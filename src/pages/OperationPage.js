import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Page } from '../components/shared/page';
import { Button, Form } from '../components/shared/sign';
import { useUserContext } from '../contexts/UserContext';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Header } from '../components/shared/Header';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import UserNotFound from '../components/UserNotFound';
export default function OperationPage() {
    const { user, setUser } = useUserContext();
    const { operationType } = useParams();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    if (!user) {
        return(<UserNotFound/>);
    }

    function submitForm(e) {
        e.preventDefault();
        axios.post(`http://localhost:3000/api/new/`, {
            value,
            description,
            type: operationType,
        }, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then(res => history.push('/'))
        .catch(e=>console.log(e));
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
                <Button>
                    {`Save ${operationType}`}
                </Button>
            </Form>
        </Page>
    );
}

const ValueInput = styled.input`
    
`;

