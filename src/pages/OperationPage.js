import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/page';
import { Button, Form } from '../components/shared/sign';
import { useUserContext } from '../contexts/UserContext';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Header } from '../components/shared/Header';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorBox from '../components/ErrorBox';
import SignIn from './SignIn';
export default function OperationPage() {
    const { user, setUser } = useUserContext();
    const { operationType } = useParams();
    const [isButtonDisabled,setIsButtonDisabled] = useState(false);
    let [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    const [error,setError] = useState(null);
    if (!user) {
        return (<SignIn/>);
    }

    function submitForm(e) {
        if(isButtonDisabled) return;
        setIsButtonDisabled(true);
        e.preventDefault();
        value = value.replace(/,/,'.');
        axios.post(`https://herickmotta-my-wallet.herokuapp.com/api/registers/new/`, {
            value,
            description,
            type: operationType,
        }, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then(res => {
            setIsButtonDisabled(false);
            history.push('/')
        })
        .catch((error)=>{
            const { response } = error;
            setIsButtonDisabled(false);
            if (response.data.error) return setError(response.data.error);
        });
    }

    return (
        <Page>
            <Header>
                {`New ${operationType}`}
                <div onClick={()=>history.push('/')}><IoArrowBackOutline /></div>
            </Header>
            <Form onSubmit={(e) => submitForm(e)}>
                <ValueInput
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    name="value"
                    step="any"
                    placeholder="Value"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    placeholder="Description"
                />
                <Button color={isButtonDisabled ? '#c850fc' : null}>
                    {`Save ${operationType}`}
                </Button>
                {error && <ErrorBox>{error}</ErrorBox>}
            </Form>
        </Page>
    );
}

const ValueInput = styled.input`
    
`;

