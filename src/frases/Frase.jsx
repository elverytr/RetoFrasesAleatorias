import React, { Component, useState } from "react";
import styled from "styled-components";
let { frase } = require("./frases.json");

let rand;
let randColor;
//let primaryColor = "#red"
function numRand() {
  rand = Math.round(Math.random() * 10);
  randColor = "#"+Math.round(Math.random()*1000000)
}

numRand();

const Card = styled.div`
  width: 35%;
  min-width: 330px;
  max-width: 400px;
  background-color: #f5f59d;
  border-radius: 5px;
  min-height: 20px;
  padding: 20px;
`;
const Texto = styled.p`
  font-size: 1.2rem;
`;
const Autor = styled.article`
  width: 100%;
  text-align: right;
`;
const Botones = styled.div`
  width: 100%;
  display: inline;
`;
const BtnTwitter = styled.button`
  border: 0;
  color: #f5f59d;
  border-radius: 10px 10px 10px 10px;
  margin-top: 10px;
`;
const BtnNew = styled.button`
  float: right;
  border: 0;
  color: #f5f59d;
  border-radius: 10px 10px 10px 10px;
  margin-top: 10px;
`;

export default function Frase() {
  const [num, setNum] = useState(rand);
  const [primaryColor, setPrimaryColor] = useState(randColor);

  return (
    <Card id="quote-box">
      <Texto id="text" style={{color:primaryColor}}>{JSON.stringify(frase[num].texto)}</Texto>
      <Autor id="author" style={{color:primaryColor}}>{JSON.stringify(frase[num].autor)}</Autor>
      <Botones>
        <BtnTwitter style={{backgroundColor:primaryColor}}>Twitter</BtnTwitter>
        <BtnNew
        style={{backgroundColor:primaryColor}}
          id="new-quote"
          onClick={() => {
            numRand();
            setNum(rand)
            setPrimaryColor(randColor)
          }}
        >
          Nueva frase
        </BtnNew>
      </Botones>
    </Card>
  );
}
