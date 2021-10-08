import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import QueenHiveApi from './api';
import useLocalStorage from "./hooks/useLocalStorage";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// import Profile from './Profile';
import ReadList from './ReadList'
import NavBar from './Navbar';
import UserContext from "./UserContext";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "queenhive-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          QueenHiveApi.token = token;
          let currentUser = await QueenHiveApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token])

  useEffect(() => {
    async function getMessages() {
      let messages = await QueenHiveApi.getMessages();
      setMessages(messages);
    }
    getMessages();
  }, []);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await QueenHiveApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await QueenHiveApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <NavBar logout={logout} />
          <Switch>
            <Route exact path="/users/signup">
              <SignupForm signup={signup}/>
            </Route>
            <Route exact path="/users/login">
              <LoginForm login={login}/>
            </Route>
            <Route exact path="/messages">
              <ReadList messages={messages}/>
            </Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
