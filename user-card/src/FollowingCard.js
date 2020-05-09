import React from 'react';

const FollowingCard = (props) => {
    return(
        <div className="following">
            <header>
                <h1>Following:</h1>
            </header>
            <img src={props.following.avatar_url} alt="user img" />
            <h1>{props.following.name}</h1>
            <h2>Username: {props.following.login}</h2>
        </div>
    )
}

export default FollowingCard;