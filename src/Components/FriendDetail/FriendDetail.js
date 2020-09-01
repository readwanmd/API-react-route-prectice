import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const FriendDetail = () => {
    let {friendID} = useParams();
    const [friend, setFriend] = useState({});
    const {name, id, phone} = friend;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`        
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFriend(data));
    }, []);

    return (
      <div>
        <h2>This is a friend detail component {friendID}</h2>
        <h1>{name}</h1>
        <h2>Id: {id}</h2>
        <h2>Phone: {phone}</h2>
      </div>
    );
};

export default FriendDetail;