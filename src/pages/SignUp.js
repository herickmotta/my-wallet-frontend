import React, { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import {Link, useHistory} from 'react-router-dom';
import {ChangeSign,Page,SignForm,Button} from '../components/shared/sign'

export default function SignUp(){
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState(null);
    return(
        <Page>
            <TitleHeader/>
            <SignForm>
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

                <ChangeSign>
                    <Link to='/sign-in'>Already have an account?</Link>
                </ChangeSign>
            </SignForm>
        </Page>
    );
}
