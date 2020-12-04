import axios from 'axios';
import dayjs from 'dayjs';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { useUserContext } from '../contexts/UserContext';

export default function RegisterBox(){
    const { user, setUser } = useUserContext();
    const [operations, setOperations] = useState([]);
    const [balance, setBalance] = useState(user.balance);
    function getOperations() {
        axios.get(`https://herickmotta-my-wallet.herokuapp.com/api/registers`,
            {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            .then((response) => setOperations(response.data))
            .catch((e)=>console.log(e));
    }
    useEffect(()=>{
        setBalance(user.balance);
        getOperations();
    });

    function capitalize(string){
        return string[0].toUpperCase() + string.substring(1);
    }
    return (
        <>
            {
                operations.length === 0
                    ?
                    <Box><EmptyBox><h1>No registers yet</h1></EmptyBox></Box>
                    :
                    <Box>
                        <div>
                            {
                                operations.map((op) =>
                                    <Op color={op.type === 'input' ? '#03AC00' : '#C70000'} key={op.id}>
                                        <div className='flex'>
                                            <div className='date'>
                                                {dayjs(op.time).format('DD/MM')}
                                            </div>
                                            <div className='description'>
                                                {capitalize(op.description)}
                                            </div>
                                        </div>
                                        <div className='value'>
                                            {op.value.toFixed(2)}
                                        </div>
                                    </Op>
                                )
                            }
                        </div>

                        <Balance color={user.balance < 0 ? '#C70000' : '#03AC00'}>
                            <div className='title'>BALANCE</div>
                            <div className='balance'>{balance.toFixed(2)}</div>
                        </Balance>
                    </Box>
            }
        </>
    );
}

const Balance = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    font-family:'Raleway',sans-serif;
    font-size:17px;
    .title{
        font-weight:bold;
    }
    .balance{
        color: ${props => props.color};
    }
`
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
const Box = styled.ul`
    padding: 10px;
    background:#FFF;
    border-radius:5px;
    height: 70%;
    width:85vw;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
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