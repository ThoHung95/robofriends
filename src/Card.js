import React from "react";

const Card = () => {
    return (
        <div className='bg-light-green'>
            <img alt='robot' src ='https://robohash.org/huyen_beo?200x200' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;