import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { IoExitOutline } from "react-icons/io5";
import styled from 'styled-components';
import OperationsList from '../components/OperationsList';
import {Page} from '../components/shared/page';
import {Header} from '../components/shared/Header';
import axios from 'axios';
import dayjs from 'dayjs';
export default function Home(){
    const {user,setUser} = useUserContext();
    const [operations,setOperations] = useState([]);
    useEffect(()=>{
        if (!user) return history.push('/sign-in');
        const headers = {
            'Authorization': `Bearer ${user.token}`
        };
        axios.get(`http://localhost:3000/api/`,{headers})
        .then((response) => setOperations(response.data));
    },[])
    console.log(operations);
    return(
        <Page>
            <Header>
                <h1>{`Olá, ${user.name}`}</h1>
                <IoExitOutline/>
            </Header>

            <RegisterBox>
                {operations.length === 0 
                ?
                    <EmptyBox><h1>No registers yet</h1></EmptyBox>
                :
                    operations.map((op) => 
                        <Op color={op.type === 'input' ? '#03AC00' : '#C70000'}>
                            <div className='flex'>
                                <div className = 'date'>
                                    {dayjs(op.time).format('DD/MM')}
                                </div>
                                <div className ='description'>
                                    {op.description}
                                </div>
                            </div>
                            <div className = 'value'>
                                {op.value}
                            </div>
                        </Op>
                    )
                }
            </RegisterBox>

            <OperationsList />
        </Page>
    );
}

const Op = styled.li`
    font-family: 'Raleway',sans-serif;
    font-size: 16px;
    margin: 15px 0;
    display:flex;
    justify-content: space-between;
    .date{
        color: #C6C6C6;
        margin-right:8px;
    }
    .description{
        color:#000;
    }
    .value{
        color:${props => props.color}
    }
    .flex{
        display:flex;
    }
`
const RegisterBox = styled.ul`
padding: 10px;
    background:#FFF;
    border-radius:5px;
    height: 70%;
    width:85vw;
`
const EmptyBox = styled.div`
    font-family: 'Raleway',sans-serif;
    font-size:20px;
    color: #868686;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`