import React, { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import {Link, useHistory} from 'react-router-dom';
import {ChangeSign,Page,SignForm,Button} from '../components/shared/sign'
import axios from 'axios';

export default function SignUp(){
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState(null);
    const history = useHistory();
    
    function submitForm(e){
        e.preventDefault();
        const req = axios.post(`http://localhost:3000/api/users/sign-up`,{
                        email,
                        name,
                        password,
                        confirmPassword,
                    });
        req.then(()=>{
            alert('sucess');
            return history.push('/sign-in');
        }).catch(e=>alert(e));      
    }
    return(
        <Page>
            <TitleHeader/>
            <SignForm onSubmit={submitForm}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                />
                
                <Button>Sign Up</Button>
            </SignForm>
            <ChangeSign>
                <Link to='/sign-in'>Already have an account?</Link>
            </ChangeSign>
        </Page>
    );
}
