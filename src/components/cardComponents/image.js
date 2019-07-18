import React from 'react';


export default function Image(props){
    return(
        <img src ={props.src} alt ="NASA thing" style={{maxWidth: "250px"}}/>
        //<div>Image to be passed via</div>
    )
}

