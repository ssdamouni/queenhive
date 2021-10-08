"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin, ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Message = require("../models/message");
const { createToken } = require("../helpers/tokens");
const messageCreate = require("../schemas/messageCreate.json");
const messageUpdate = require("../schemas/messageUpdate.json")
// const userUpdateSchema = require("../schemas/userUpdate.json");

const router = express.Router();


/** POST / { user }  => { user, token }
 * creats a new message
 **/

router.post("/:user_id", ensureCorrectUserOrAdmin ,async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, messageCreate);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const message = await Message.newMessage(req.params.user_id, req.body);
    return res.json({ message });
  } catch (err) {
    return next(err);
  }
});


/** GET / => { users: [ {username, firstName, lastName, email }, ... ] }
 *
 * Returns list of all users.
 *
 * Authorization required: admin
 **/

router.get("/", ensureLoggedIn, async function (req, res, next) {
  try {
    const messages = await Message.findAll();
    return res.json({ messages });
  } catch (err) {
    return next(err);
  }
});


/** GET /[user_id] => { messages }
 *
 * Returns messages for a specific user
 **/

router.get("/:user_id", ensureLoggedIn, async function (req, res, next) {
  try {
    const messages = await Message.findUserMessages(req.params.user_id);
    return res.json({ messages });
  } catch (err) {
    return next(err);
  }
});


/** PATCH /[message_id] { user } => { user }
 *
 * Data can include:
 *   { message }
 *
 * Returns { updated message }
 *
 * Authorization required: admin or same-user-as-:username
 **/

router.patch("/:message_id", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, messageUpdate);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const message = await Message.update(req.params.message_id, req.body);
    return res.json({ message });
  } catch (err) {
    return next(err);
  }
});


/** DELETE /[username]  =>  { deleted: username }
 *
 * Authorization required: admin or same-user-as-:username
 **/

router.delete("/:username",  async function (req, res, next) {
  try {
    await User.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});


/** POST /[username]/jobs/[id]  { state } => { application }
 *
 * Returns {"applied": jobId}
 *
 * Authorization required: admin or same-user-as-:username
 * */

router.post("/:username/jobs/:id",  async function (req, res, next) {
  try {
    const jobId = +req.params.id;
    await User.applyToJob(req.params.username, jobId);
    return res.json({ applied: jobId });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
