import React from "react";
import Filtered from "./Filtered";

export default function Header(props) {
    
  return (
    <header>
      this is a cool app
      <img src='https://api.thecatapi.com/v1/images/search'></img>
      <Filtered
      deleteDown={props.deleteDown}
        appState={props.appState}
        searchForTitle={props.searchForTitle}
        handleChange={props.handleChange}
      />
    </header>
  );
}
