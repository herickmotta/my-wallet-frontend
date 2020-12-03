import React, { useState } from 'react';
import styled from 'styled-components';
import {Page} from '../components/shared/page';
import { Button, Form } from '../components/shared/sign';
import {IoArrowBackOutline} from 'react-icons/io5';
import { Header } from '../components/shared/Header';
import { useParams } from 'react-router-dom';
export default function OperationPage() {

    const { operationType } = useParams();
    const [value, setValue] = useState('');
    const [description,setDescription] = useState('');
    
    return (
        <Page>
            <Header>
                {`New ${operationType}`}
                <IoArrowBackOutline/>
            </Header>
            <Form>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    name="value"
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

