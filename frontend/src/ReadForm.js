import React, { useState, useContext } from "react";
import Alert  from "./Alert";
import LoginForm from "./LoginForm";
import { useHistory, Redirect } from "react-router-dom";
import UserContext from './UserContext';
/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * Routes -> LoginForm -> Alert
 * Routed as /login
 */

function ReadForm({addMessage, login}) {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  console.log(currentUser)
  const [formData, setFormData] = useState({
    userId: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState([]);


  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await addMessage(formData);
    if (result.success) {
      history.push("/messages");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }
    if(currentUser){
        return (
            <div className="ReadForm">
              <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3">Add drama!</h3>
      
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Please share a not so popular opinion!</label>
                        <input
                            name="message"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="username"
                            required
                        />
                      </div>
                      <button
                          className="btn btn-primary float-right"
                          onSubmit={handleSubmit}
                      >
                        Submit
                      </button>
                      {formErrors ? <h3>{formErrors}</h3> : null}
                    </form>
                    <h3>To register click <a href="/users/signup">here</a>!</h3>
                  </div>
                </div>
              </div>
            </div>
        );
    } else{
        return(
            <Redirect to='/users/login' />
        )
    }
     
}

export default ReadForm;
