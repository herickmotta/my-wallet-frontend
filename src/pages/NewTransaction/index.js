import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import UserContext from "../../context/UserContext";
import ContentContainer from "../../assets/globalStyles/ContentContainer";
import AccountService from "../../service/UserService";
import Button from "../../components/Button";
import mask from "../../utils/masks";
import { Title, DescriptionArea, Container, MaxSize } from "./styles.js";
import { Forms, TextError } from "../SignIn/styles";
import ModalSuccess from "../../components/Modal";
import Colors from "../../config/colors";
import Input from "../../components/Input";

export default function NewTransaction() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const { type } = useParams();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const cleanDataValue = () => {
    const valueWithoutMask = value.replace(/[ ,.]/g, "");
    return parseInt(valueWithoutMask, 10);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const valueWithoutMask = cleanDataValue();

    const body = {
      value: valueWithoutMask,
      description,
    };

    setLoading(true);
    const data = await AccountService.postTransaction(body, user.token, type);
    setLoading(false);

    if (data.success) {
      setSuccess(true);
    } else {
      setError(true);
      setErrorMessage(data.response.data);
    }
  };

  return (
    <ContentContainer>
      <MaxSize>
        <Container>
          <IoMdArrowRoundBack
            color={Colors.white}
            fontSize="1.5rem"
            cursor="pointer"
            onClick={() => history.push("/home")}
          />
          <Title>{`New ${type}`}</Title>
        </Container>
        <Forms>
          <Input
            placeholder="Value"
            type="text"
            value={value}
            onChange={(event) => setValue(mask(event.target.value))}
          />
          <DescriptionArea
            type="text"
            placeholder="Description"
            value={description}
            maxLength="25"
            onChange={(event) => setDescription(event.target.value)}
          />
          <Button
            onClick={(event) => onSubmit(event)}
            label="Submit"
            loading={loading}
            disabled={loading}
          />
        </Forms>
        <ModalSuccess modalIsOpen={success} />
        {error && <TextError>{errorMessage}</TextError>}
      </MaxSize>
    </ContentContainer>
  );
}
