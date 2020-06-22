import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        const getUsers = async () => {
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let users = await res.json();
            setUsers(users);
        }

        getUsers();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {users.map(user => (
                            <div>

                            <li key={user.id} className="list-group-item">{user.name}</li>
                            <Link to = {`/${user.id}/details`}>
                                <button className="btn btn-primary">Learn More</button>
                            </Link>
                            </div>
                        ))}

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Users;