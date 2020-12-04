import React, { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import {Link, useHistory} from 'react-router-dom';
import {ChangeSign,Page,Form,Button} from '../components/shared/sign'
import axios from 'axios';
import ErrorBox from '../components/ErrorBox';

export default function SignUp(){
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState(null);
    const [isButtonDisabled,setIsButtonDisabled] = useState(false);
    const history = useHistory();
    
    function submitForm(e){
        if(isButtonDisabled) return;
        setIsButtonDisabled(true);
        e.preventDefault();
        const req = axios.post(`https://herickmotta-my-wallet.herokuapp.com/api/users/sign-up`,{
                        email,
                        name,
                        password,
                        confirmPassword,
                    });
        req.then(()=>{
            setIsButtonDisabled(false);
            return history.push('/sign-in');
        }).catch((error)=>{
            const { response } = error;
            setIsButtonDisabled(false);
            if (response.data.error) return setError(response.data.error);
        });    
    }
    return(
        <Page>
            <TitleHeader/>
            <Form onSubmit={submitForm}>
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
                
                <Button color={isButtonDisabled ? '#c850fc' : null}>Sign Up</Button>
                {error && <ErrorBox>{error}</ErrorBox>}
            </Form>
            <ChangeSign>
                <Link to='/sign-in'>Already have an account?</Link>
            </ChangeSign>
        </Page>
    );
}
