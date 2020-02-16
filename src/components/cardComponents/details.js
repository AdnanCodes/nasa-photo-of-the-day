import React from 'react';
import { Message } from "semantic-ui-react";
import styled from "styled-components";


export default function Details(props) {

    const SizeAdjust = styled.div`
    width: 60%;
    margin: 0 auto;
    `;

    return (
        <SizeAdjust>
        <Message>
            <Message.Header>About this picture</Message.Header>
            {props.detail}
        </Message>
        </SizeAdjust>
    )
}

