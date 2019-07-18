import React from 'react';
import { Details, Image, Title} from './cardComponents'

export default function Card(props){
    return(
        <div>
            <Title title={props.passData.title}/>
            <Image src={props.passData.hdurl}/>
            <Details detail={props.passData.explanation}/>
            {console.log(props.passData)} 
        </div>
        
    );
};

