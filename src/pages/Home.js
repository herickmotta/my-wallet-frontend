import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { IoExitOutline } from "react-icons/io5";
import styled from 'styled-components';
import OperationsList from '../components/OperationsList';
import {Page} from '../components/shared/page';
import {Header} from '../components/shared/Header';
export default function Home(){
    const {user,setUser} = useUserContext();

    useEffect(()=>{
        // if (!user) return history.push('/sign-in');
    },[])

    return(
        <Page>
            <Header>
                <h1>{`Olá, Lulu`}</h1>
                <IoExitOutline/>
            </Header>

            <RegisterBox>

            </RegisterBox>

            <OperationsList />
        </Page>
    );
}


const RegisterBox = styled.div`
    background:#FFF;
    border-radius:5px;
    height: 400px;
    width:85vw;
`