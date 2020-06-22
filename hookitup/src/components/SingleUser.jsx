import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SingleUser() {

    const [user, setUser] = useState({});
    let { id } = useParams();

    //inside this singluser function nest the following:

    useEffect(() => {
        const getUser = async () => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let user = await res.json();
            setUser(user);
        }

        getUser();
    }, [id]);

    //the return is also wrapped in this function

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{user.name}</h5>
                <p class="card-text">{user.username}</p>
                <p class="card-text">{user.email}</p>
                <Link to = {`/`}>
                                <button className="btn btn-primary">Return</button>
                            </Link>
            </div>
        </div>
    );
}

export default SingleUser