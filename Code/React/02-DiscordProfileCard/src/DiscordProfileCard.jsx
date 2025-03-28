import './App.css'
import './DiscordProfileCard.css'

import OnlineStatus from './assets/StatusImg/online.png';
import OfflineStatus from './assets/StatusImg/invisible.png'
import DnDStatus from './assets/StatusImg/DnD.png'
import IdleStatus from './assets/StatusImg/idle.png'

import More from './assets/Other/more.png';
import Friend from './assets/Other/friend.png';


// DiscordProfileCard-main

export function DiscordProfileCard({bgColor,profileImage, name,userName,pronouns,bioText,status,mutualFriends,mutualServers}){
    console.log('Received props:', {bgColor, profileImage, name, userName, pronouns, bioText,status,mutualFriends,mutualServers });

    //  mutualFriends == true ? mutualFriendsText = "14 Mutual Friends" : mutualFriendsText = " "
    // let mutualFriendsText = mutualFriends ? "14 Mutual Friends" : " "

    let mutualFriendsText = ""
    let mutualServersText = ""

    switch(true) {

        case mutualFriends && mutualServers:
            mutualFriendsText = "14 Mutual Friends"
            mutualServersText = "6 Mutual Servers"
            break;
        
        case mutualFriends && !mutualServers:
            mutualFriendsText = "14 Mutual Friends"
            mutualServersText = "No Mutual Servers"
            break;


        case !mutualFriends && mutualServers:
            mutualFriendsText = "No Mutual Friends"
            mutualServersText = "6 Mutual Servers"
            break;


    }

    


    return(

        <article className="DiscordProfileCard">

            <div 
                className='DiscordProfileCard-background'
                style={{ backgroundColor: bgColor }}    
            > &nbsp; 

                <button className='DiscordProfileCard-friendButton'> <img src={Friend} alt="F" width="18" height="18" type="button" /></button>
                <button className='DiscordProfileCard-moreButton'> <img src={More} alt='M' width="18" height="18" type="button" /> </button>

            </div>

            <aside className="DiscordProfileCard-pfpContainer"> 


            <img 
                src= {profileImage || "https://i.pinimg.com/564x/40/12/19/401219944fffca0776691cdc5f5e308c.jpg"} 
                alt="pfp" 
                className="DiscordProfileCard-pfpImage" 
            />

            <img 

                src={

                    status == "Online" ? OnlineStatus : 
                    status == "DnD" ? DnDStatus :
                    status == "Invisible" ? OfflineStatus :
                    status == "Idle" ? IdleStatus : OnlineStatus
                } 

                alt="S" 
                className='DiscordProfileCard-status' 

            /> 

            </aside>

            <div className='DiscordProfileCard-userZone'>

                <strong className='DiscordProfileCard-name'>{name}</strong>

                <div className='DiscordProfileCard-info'>

                    <span className='DiscordProfileCard-userName'>{userName}</span>
                    <span className='DiscordProfileCard-pronouns'> • {pronouns}</span>
                    {/* <span className='DiscordProfileCard-badges'> X - X </span> */}

                </div>


            </div>

            <div className='DiscordProfileCard-mutuals'> {mutualFriendsText} • {mutualServersText} </div>

            <div className='DiscordProfileCard-bio'>

                <p className='DiscordProfileCard-bioText'> {bioText} </p>

            </div>

            <div className='DiscordProfileCard-messageContainer'>

                <input className="DiscordProfileCard-messageBox" type="text" placeholder={`Message @${name}`} />
                <button className="DiscordProfileCard-sendButton" type="button" > ☺ </button>

            </div>
            

        </article>

            
 
    );
}
