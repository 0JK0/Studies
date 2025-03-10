import { useState } from 'react'
import './App.css'
import OnlineStatus from './assets/badges/online.png';
import More from './assets/badges/more.png';
import Friend from './assets/badges/friend.png';

// DiscordProfileCard-main

export function DiscordProfileCard(){

    return(

        
            <article className="DiscordProfileCard">
 
                <div className='DiscordProfileCard-background'> &nbsp; 

                    <button className='DiscordProfileCard-friendButton'> <img src={Friend} alt="F" width="18" height="18" type="button" /></button>
                    <button className='DiscordProfileCard-moreButton'> <img src={More} alt='M' width="18" height="18" type="button" /> </button>

                </div>

                <aside className="DiscordProfileCard-pfpContainer"> 


                <img src="https://i.pinimg.com/564x/40/12/19/401219944fffca0776691cdc5f5e308c.jpg" alt="pfp" className="DiscordProfileCard-pfpImage" />

                <img src={OnlineStatus} alt="S" className='DiscordProfileCard-status' /> 

                </aside>

                <div className='DiscordProfileCard-userZone'>

                    <strong className='DiscordProfileCard-name'>Kyuwi</strong>

                    <div className='DiscordProfileCard-info'>

                        <span className='DiscordProfileCard-userName'>_kwiomee</span>
                        <span className='DiscordProfileCard-pronouns'> • She / Her</span>
                        <span className='DiscordProfileCard-badges'> X - X </span>

                    </div>


                </div>

                <div className='DiscordProfileCard-mutuals'> 4 Mutual Friends • 2 Mutual Servers </div>

                <div className='DiscordProfileCard-bio'>

                    <p className='DiscordProfileCard-bioText'> Hikikomori Wannabe :3  :3 .. </p>

                </div>

                <div className='DiscordProfileCard-messageContainer'>

                    <input className="DiscordProfileCard-messageBox" type="text" placeholder=' Message @Kyuwi' />
                    <button className="DiscordProfileCard-sendButton" type="button" > ☺ </button>

                </div>
                

            </article>
 
    );
}
