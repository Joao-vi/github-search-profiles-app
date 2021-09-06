import { FormEvent, useState } from "react";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";

const Form = styled.form`
  align-self: center;
  display: flex;
  gap: 10px;
`;
const Input = styled.input`
  height: 25px;
  padding: 5px 10px;
`;

export function SearchBar() {
  const [inputData, setInputData] = useState("");
  const { requestUserGit } = useApi();

  function handleInput(e: FormEvent) {
    e.preventDefault();
    if (inputData.trim() === "") {
      return;
    }
    requestUserGit(inputData);
  }

  return (
    <Form onSubmit={handleInput}>
      <Input
        onChange={(e) => setInputData(e.target.value)}
        type="text"
        placeholder="Nome do usuario."
      />
      <button type="submit">Buscar</button>
    </Form>
  );
}
