import React from "react";

import { ContentInput, Container } from "./styles";

export default function Input({
  value,
  type,
  placeholder,
  onChange,
  onFocus,
  error,
}) {
  return (
    <Container>
      <ContentInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        error={error}
      />
    </Container>
  );
}
