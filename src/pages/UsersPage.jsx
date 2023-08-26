import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
        .get("https://dummyjson.com/users")
        .then((response) => {
            const data = response.data;
            setUsers(data.users);
        })
        .catch((error) => {
            console.error("Ошибка при получении данных:", error);
        });
    }, []);

    return (
        <div>
        <ul className="user-info">
            {users.map((user) => (
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                {user.firstName} {user.lastName}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default UsersPage;
