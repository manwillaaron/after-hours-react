import React from 'react'

export default function Add(props){
    return(
        <button onClick={() => props.add()}>add</button>
    ) 
}