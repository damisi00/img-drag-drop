import { useState } from 'react';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../authentication/firebase';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
const Register = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
       
    const onRegistration = (e, type) => {
        e.preventDefault();
        if(type == 'signup') {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    navigate("/home")
                    console.log(user);
                    setLogin(true)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    alert(errorMessage)
                    
            });
       
        } else{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Log in
                    const user = userCredential.user;
                    navigate("/home")
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    alert(errorMessage)

            })
        }
    }
  return (
    <>
        <main className='login-pg'>
            <form action="" onSubmit={(e) => onRegistration(e, login ? 'login' : 'signup')}>
                <h3>{login ? 'Login' : 'Sign Up'} Form</h3>
                <div className="input-wrapper">
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                    <input type="email" name="" id="email" placeholder='Email Id'  onChange={(e)=>setEmail(e.target.value)} required/>
                    
                </div>
                <div className="input-wrapper">
                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                    <input type="password" name="" id="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit" >{login ? 'Login' : 'Sign Up'}</button>
               <Link style={{color: '#f2f2f2', fontWeight: '600', fontSize:'1.1rem'}} onClick={() => setLogin(true)}>Login</Link>
            </form>
        </main>
        
    
    </>
  )
}

export default Register