import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Title, TextError, Text, Forms } from "../SignIn/styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ContentContainer from "../../assets/globalStyles/ContentContainer";
import SignUpService from "../../service/SignUpService";

export default function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const body = {
      name,
      email,
      password,
      confirmPassword,
    };
    setLoading(true);
    const data = await SignUpService.signUp(body);
    setLoading(false);
    if (data.success) {
      history.push(`/sign-in`);
    } else {
      setError(true);
      setErrorMessage(data.response.data);
    }
  };

  return (
    <ContentContainer>
      <Title>MyWallet</Title>
      <Forms>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setname(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        {error && <TextError>{errorMessage}</TextError>}
        <Button
          onClick={(event) => onSubmit(event)}
          label="Submit"
          loading={loading}
          disabled={loading}
        />
      </Forms>
      <Text disable={loading}>
        <Link to="/sign-in">Have account? Log-in!</Link>
      </Text>
    </ContentContainer>
  );
}
