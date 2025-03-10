import "./App.css"
import { useState } from "react";


export function TwitterFollowCard({userName, name,Avatar}){

    //      OG State       Switch             Asign OG State
    const [isFollowing,setIsFollowing] = useState(false);

    const handleClick = () => {
//       Call Switch   Tell to modify
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? "Following" : "Follow";

    const buttonClassName = isFollowing ? "tw-FollowCard-button is-following" : "tw-FollowCard-button";

    return(

        <article className="tw-FollowCard">

            <header className="tw-FollowCard-header">

                <img className="tw-FollowCard-image" alt="Avatar" src={Avatar} />

                <div className="tw-FollowCard-div">   

                    <strong  className="tw-FollowCard-strong">{name}</strong>
                    <span className="tw-FollowCard-span">{userName}</span>

                </div>

            </header>


            <aside className="tw-FollowCard-aside">

                <button className={buttonClassName} onClick={handleClick}> {text} </button>

            </aside>

        </article>

    )


}