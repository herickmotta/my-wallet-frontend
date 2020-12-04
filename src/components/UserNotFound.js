import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from './shared/Header';
import { Page } from './shared/page';
import { Button } from './shared/sign';

export default function UserNotFound() {
    const history = useHistory();
    return (
        <Page>
            <Header>Please, sign in</Header>
            <Button onClick={() => history.push('/sign-in')}>
                Sign In
            </Button>
        </Page>
    )
}