import styled from 'styled-components';

export const ChangeSign = styled.div`
    margin:20px;
    font-family: 'Raleway',sans-serif;
    font-size:15px;  
    color:#fff;
`
export const Page = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
`
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px 0;
    width:85vw;
    input{
        height:58px;
        width:100%;
        border-radius:5px;
        padding:15px;
        margin-bottom:10px;
        color:#333;
        &::placeholder{
            font-size:18px;
            color:#333;
        }
    }
`
export const Button = styled.button`
    background: #A328D6;
    width: 100%;
    color:#FFF;
    height:58px;
    border-radius:5px;
    font-size:20px;
    font-weight:bold;
`

