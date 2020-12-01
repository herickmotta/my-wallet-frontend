import React, { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import {Link, useHistory} from 'react-router-dom';
import {ChangeSign,Page,SignForm,Button} from '../components/shared/sign'

export default function SignIn(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    return(
        <Page>
            <TitleHeader/>
            <SignForm>
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
                
                <Button>Sign In</Button>

                <ChangeSign>
                    <Link to='/sign-up'>No account?</Link>
                </ChangeSign>
            </SignForm>
        </Page>
    );
}
