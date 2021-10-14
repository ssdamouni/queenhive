import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Alert from './Alert'
import UserContext from './UserContext';

function Home({login}) {
   const { currentUser } = useContext(UserContext);
   console.log(currentUser)
   if(currentUser){
      return ( <div>
          <h2>Authenticated</h2>
      </div>
       )}
   //redirect if there is no user 
   else{
    return (
        <div>
            <LoginForm login={login} />
            <Alert messages={["You must be authenticated to see this page"]}/>
        </div>
    )
   }
   
}

export default Home;