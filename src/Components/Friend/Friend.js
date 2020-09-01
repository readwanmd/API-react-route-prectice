import React from 'react';
import {Link} from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;

    const style = {
        border: '1px solid blue',
        borderRadius: '5px',

        margin: '10px 50px'
    }
    return (
        <div style={style}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}><button>Show Details of {id}</button></Link>
        </div>
    );
};

export default Friend;