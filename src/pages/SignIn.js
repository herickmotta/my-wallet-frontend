import React, { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import {Link, useHistory} from 'react-router-dom';
import {ChangeSign,Page,Form,Button} from '../components/shared/sign'
import axios from 'axios';
import { useUserContext } from '../contexts/UserContext';
import ErrorBox from '../components/ErrorBox';
export default function SignIn(){
    const {user,setUser} = useUserContext();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    const history = useHistory();
    function submitForm(e){
        e.preventDefault();
        const req = axios.post(`http://localhost:3000/api/users/sign-in`,{
                email,
                password,
            });
        req.then((response)=>{
            setUser(response.data);
            history.push('/');
        }).catch((error)=>{
            const { response } = error;
            if (response.data.error) return setError(response.data.error);
        });
    }

    return(
        <Page>
            <TitleHeader/>
            <Form onSubmit={submitForm}>
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
                {error && <ErrorBox>{error}</ErrorBox>}
            </Form>
            <ChangeSign>
                <Link to='/sign-up'>No account?</Link>
            </ChangeSign>
        </Page>
    );
}
