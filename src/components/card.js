import React from 'react';
import { Details, Image, Title } from './cardComponents'

export default function Card(props) {

    if(!props.passData ){
        return(
            <div>{console.log(props)}
                Page is loading, Please Wait...
            </div>
        )
    }
    return (
        <div>
            <Title title={props.passData.title} />
            <Image src={props.passData.hdurl} />
            <Details detail={props.passData.explanation} />
        </div>

    );
};

