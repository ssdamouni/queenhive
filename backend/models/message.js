"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

class Message {
    static async newMessage(user_id, { message }){
        const result = await db.query(
            `INSERT INTO messages
             (user_id,
              message)
             VALUES ($1, $2)
             RETURNING user_id, message`,
          [
            user_id,
            message,
          ],
      );
      const newMessage = result.rows[0];

      return newMessage;
    }
    static async findUserMessages(user_id){
        const result = await db.query(
            `SELECT message
             FROM messages
             WHERE user_id=$1`,
             [user_id],
        )

        return result.rows;
    }

    static async findAll() {
        const result = await db.query(
              `SELECT message,
                      users.username
               FROM messages
               JOIN users ON (messages.user_id = users.id)`,
        );
    
        return result.rows;
      }
    
    static async update(message_id, {message}){
        const result = await db.query(
            `UPDATE messages 
             SET message = $1 
             WHERE id = $2 
             RETURNING message`,
            [message, message_id]
        )

        return result.rows;
    }
}


module.exports = Message;