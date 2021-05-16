import React, {Component,useState } from 'react'
import styled from 'styled-components'
import Frase from '../frases/Frase'

let primaryColor = "#"+Math.round(Math.random()*1000000)

const Contenedor = styled.div`
    background-color: ${primaryColor};
    width: 100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
`


export default class Home extends Component {
    render() {
        return (
            <Contenedor color="primaryColor">
                <Frase/>
            </Contenedor>
        )
    }
}
