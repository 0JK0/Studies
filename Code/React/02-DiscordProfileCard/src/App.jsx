//App.jsx
import React from 'react';
import { useState } from 'react';

import './App.css'
import './DiscordProfileCard.css'
import './inputZone.css'

import {InputZone} from './inputZone.jsx'
import { DiscordProfileCard } from './DiscordProfileCard'



export function App() {

  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    pronouns: "",
    bioText: "",
    status: "",
    mutualFriends: "",
    mutualServers: "",
    profileImage: "",
    bgColor: "#cef1fd",

  });

  console.log("App re-rendered. Current userData:", userData); // Debugging log

  // Copys the list and then passes the value to said list, so it makes a change and so re Renders
  const handleInput = (info) => {

    // ... copys the list  
    // .target.name gets the name of the targe
    // .target.value gets the value of the target
    // [] is the index/key and ; is the value in that index

    //.targets TARGETS and gives back the value of whatever that variable contains

    // Simplified Example { ...userData, name: "John" }

    setUserData({ ...userData, [info.target.name]: info.target.type === "checkbox" ? info.target.checked : info.target.value}

    // SHIT had to be added for the Checkbox Functionality
    //  IF the type of the input is "checked" it passes .checked instead of .value
    //  Else it passes .value normaly
    //  info.target.type === "checkbox" ? info.target.checked : info.target.value

    ) 
  };


  return(
    
    <aside className='MainPage'>

      <div className='InputZone-wrapper'>

        <InputZone userData={userData} handleInput={handleInput}/>

      </div>

      <div className="DiscordProfileCard-wrapper">

        <DiscordProfileCard {...userData}/> 

      </div>



    </aside>


  );

}


