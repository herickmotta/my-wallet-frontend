/* eslint-disable react/no-array-index-key */
import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";
import LogOutService from "../../service/LogOutService";
import ContentContainer from "../../assets/globalStyles/ContentContainer";
import { TransactionBox, ButtonContainer } from "./styles";
import TransactionButton from "./components/TransactionButton";
import Header from "../../components/Header";
import Transaction from "./components/Transaction";
import Spinner from "../../components/Spinner";
import Balance from "./components/Balance";
import AccountService from "../../service/UserService";
import { TextError } from "../SignIn/styles";
import SignIn from "../SignIn";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [cashButtonsDisabled, setCashButtonsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  if (!user) {
    history.push("/sign-in");
    return <SignIn />;
  }
  const getHistoryTransactions = async () => {
    setLoadingTransactions(true);
    const data = await AccountService.getTransactions(user.token, user.id);
    setLoadingTransactions(false);
    if (data.success) {
      setTransactions(data.success.transactions);
      setBalance(data.success.balance);
    } else {
      setCashButtonsDisabled(true);
      setError(true);
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    getHistoryTransactions();
  }, []);

  const logOut = async () => {
    setLoading(true);
    const data = await LogOutService.logOut(user.token);
    setLoading(false);
    history.push("/sign-in");
    setUser(null);
  };

  return (
    <ContentContainer>
      {error && <TextError>{errorMessage}</TextError>}
      <Header
        name={user.name}
        showLogOut
        loading={loading}
        onClick={() => logOut()}
      />
      <TransactionBox>
        {loadingTransactions ? (
          <Spinner transaction style={{ marginTop: "50px" }} />
        ) : (
          transactions.map((t) => (
            <Transaction
              key={t.id}
              date={t.createdAt}
              type={t.type}
              description={t.description}
              value={t.value}
            />
          ))
        )}
      </TransactionBox>
      <Balance balance={balance} />

      <ButtonContainer>
        <TransactionButton
          showPlusButton
          disabled={cashButtonsDisabled}
          label="New Input"
          onClick={() => history.push(`/new/input`)}
          loading={false}
        />

        <TransactionButton
          marginLeft="5%"
          showPlusButton={false}
          disabled={cashButtonsDisabled}
          label="New Output"
          onClick={() => history.push(`/new/output`)}
          loading={false}
        />
      </ButtonContainer>
    </ContentContainer>
  );
}
