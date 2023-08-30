import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {isValidUrl, copyToClipboard} from "@utils/url/url";
import API from "@utils/api/api";

const Home: React.FC = () => {

  const [inputs, setInputs] = useState({
    long: "",
    validURL: false,
    generated: "",
    clipboarded: false
  });

  useEffect(()=>{
    let isValid = isValidUrl(inputs.long)
    setInputs({
      ...inputs,
      validURL: isValid
    })
    console.log(inputs)
  },[inputs.long, inputs.validURL])

  async function handleGenerate(){
    const shortened = await API.createShortLink(encodeURI(inputs.long))
    if(shortened.ok){
      setInputs({...inputs, generated: encodeURI(`${window.location.origin}/srt/${shortened.data.short}`)})
    }
  }

  function handleClipboard(){
    copyToClipboard(inputs.generated)
    setInputs({
      ...inputs, clipboarded: true
    })
  }

  return (
    <Container>
      <Content>
        <Form>
          <h2>Encurtador de links</h2>
          <div>
            <input
              type={"text"}
              name={"long"}
              onChange={(e) => {
                setInputs({ ...inputs, [e.target.name]: e.target.value });
              }}
            />
            <button type="button" disabled={!inputs.validURL} onClick={handleGenerate}>Gerar link</button>
          </div>
          {(!inputs.validURL && inputs.long.length != 0) && <p>link inválido</p>}
          <div>
            <input
              type={"text"}
              name={"generated"}
              value={inputs.generated}
              readOnly={true}
            />
            <button type="button" disabled={inputs.generated.length == 0} onClick={handleClipboard}>{inputs.clipboarded ? "Copiado!":"Copiar"}</button>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  height: 100vh;
  width: 100vw;
`;
const Content = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 400px;

  h2 {

  }
  div {

  }

  input {
    background-color: ${(props) => props.theme.background.secondary};
  }

  button {
    background-color: ${(props) => props.theme.highlight};
  }
`;
