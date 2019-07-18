import React from 'react';
import styled from "styled-components";




export default function Title(props) {
    const StyleH1 = styled.h1`
    color: #008000;
    font-size: 4rem;
    `;
    return (
        <StyleH1>{props.title}</StyleH1>
    )
}
