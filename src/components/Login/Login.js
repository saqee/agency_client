import React, { useContext } from 'react';
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import    firebaseConfig  from './Login.config'
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedUser,setloggedUser]=useContext(UserContext)
    const [User,setUser]=useState({
        email:'',
        name:''
    })
    const history=useHistory();
    const handleGoogle=()=>{
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then((result)=> {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const {email} = result.user;
            let newUser={
                email:email
            }
            
            setUser(newUser)
            setloggedUser(newUser)
            history.push('/order')
            // The signed-in user info.
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (


        <section className="d-flex justify-content-center mt-4 p-5 ml-5">
              
              <div class="shadow-none p-3 mb-5 bg-light rounded">
                  <h2>Login With Google</h2>
              <button onClick={handleGoogle} style={{backgroundImage:"linear-gradient(#111430, #111430)", width:'120px', color:'white'}}>SignIn</button>
           <br/>
           <small><a href="#">Create Account </a></small>

              </div>
             
                
           
       

       
       </section>
        
    );
};

export default Login;