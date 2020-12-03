import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function OperationButton(props){
    const history = useHistory();
    return(
        <Button onClick={()=>history.push(`/new/${props.op}`)}>
            {props.children}
        </Button>
    )
}

const Button = styled.button`
    background: #A328D6;
    color:#FFF;
    font-size:17px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:10px;
    flex-grow:1;
    border-radius:5px;
    font-weight:bold;
`