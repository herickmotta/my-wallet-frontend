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
    width:100%;
    height:100%;
`
export const SignForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    width:100%;
    height:100%;
    input{
        height:58px;
        width:80%;
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
    width: 80%;
    color:#FFF;
    height:58px;
    border-radius:5px;
    font-size:20px;
`

