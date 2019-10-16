import React from 'react'

export default function Filtered(props){
    return(
        <input 
        onKeyDown={props.deleteDown}
        onChange={(e)=>props.handleChange(e,props.searchForTitle(e))}
        placeholder='Search Titles'
        name='titleSearch'
        value={props.appState.titleSearch}
        />
    )
}