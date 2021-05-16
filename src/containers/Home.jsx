import React, { Component, useState } from "react";
import styled from "styled-components";
let { frase } = require("../frases/frases.json");

let rand;
let randColor;
let primaryColor = randColor;

function numRand() {
  rand = Math.round(Math.random() * 10);
  randColor = "#" + Math.round(Math.random() * 1000000);
}

numRand();

const Contenedor = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  width: 60%;
  min-width: 330px;
  background-color: #f5f59d;
  border-radius: 5px;
  min-height: 20px;
  padding: 20px 80px;
`;
const Texto = styled.p`
  font-size: 2rem;
`;
const Autor = styled.article`
  width: 100%;
  text-align: right;
`;
const Botones = styled.div`
  width: 100%;
  display: inline;
  font-size: 1.2rem;
`;
const BtnTwitter = styled.button`
  border: 0;
  color: #f5f59d;
  border-radius: 5px 5px 5px 5px;
  margin-top: 10px;
`;
const BtnNew = styled.button`
  float: right;
  border: 0;
  color: #f5f59d;
  border-radius: 5px 5px 5px 5px;
  margin-top: 10px;
`;

export default function Home() {
  const [num, setNum] = useState(rand);
  const [primaryColor, setPrimaryColor] = useState(randColor);

  return (
    <Contenedor style={{ backgroundColor: primaryColor }}>
      <Card id="quote-box">
        <Texto id="text" style={{ color: primaryColor }}>
          {frase[num].texto}
        </Texto>
        <Autor id="author" style={{ color: primaryColor }}>
          {frase[num].autor}
        </Autor>
        <Botones>
          <BtnTwitter
          onClick={()=>{window.open("https://twitter.com/intent/tweet/?text="+frase[num].texto,"_blank")}}
          style={{ backgroundColor: primaryColor }}>
            Twitter
          </BtnTwitter>
          <BtnNew
            style={{ backgroundColor: primaryColor }}
            id="new-quote"
            onClick={() => {
              numRand();
              setNum(rand);
              setPrimaryColor(randColor);
            }}
          >
            Nueva frase
          </BtnNew>
        </Botones>
      </Card>
    </Contenedor>
  );
}
