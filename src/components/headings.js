import React from 'react';

// Function Based Component

export const Headings = (props)=>{

    return(
        <h1 style={props.style}>Welcome To class {props.name}, your class time is {props.time} and fees is {props.fees} rupees</h1>
        )
}
export const Paragraph = (props)=>{
    return(
        <p style={props.style}>Welcome To rahul</p>
        )
}

// export {Headings,Paragraph};