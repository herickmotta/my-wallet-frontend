import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";
import { Title, TextError, Text, Forms } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SignInService from "../../service/SignInService";
import ContentContainer from "../../assets/globalStyles/ContentContainer";

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user) {
      history.push(`/home`);
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = { email, password };
    setLoading(true);
    const data = await SignInService.signIn(body);
    setLoading(false);

    if (data.success) {
      setUser(data.success);
    } else {
      setError(true);
      setErrorMessage(data);
    }
  };

  return (
    <ContentContainer>
      <Title>MyWallet</Title>
      <Forms>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onFocus={() => setError(false)}
          error={error}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setError(false)}
          error={error}
        />
        {error && <TextError>{errorMessage}</TextError>}
        <Button
          onClick={(event) => onSubmit(event)}
          label="Login"
          disabled={loading}
          loading={loading}
        />
      </Forms>
      <Text disable={loading}>
        <Link to="/sign-up">First time MyWallet? Join us!</Link>
      </Text>
    </ContentContainer>
  );
}
