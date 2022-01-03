import React, { useState } from 'react';
import { authService } from '../fbase';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            if (newAccount) {
                // create account
                await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // sign in
                await authService.signInWithEmailAndPassword(email, password);
            }
        } catch(error) {
            console.log(error);
        }
        
    }

    const onChange = (event) => {
        const {target : {name, value}} = event;
        if(name === 'email') {
            setEmail(value);
        } else if(name === 'password') {
            setPassword(value);
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='email' type='email' placeholder='put your email' value={email} onChange={onChange} required></input>
                <input name='password' type='password' placeholder='put your password' vaule={password} onChange={onChange} required></input>
                <input type='submit' value={newAccount ? "Create Account" : "Sign In"}></input>
            </form>
            <div>
                <button>Continue with Google</button>
            </div>
        </div>
     );
};


export default Auth;