import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserInfoPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных пользователя:', error);
      });

    if (activeTab === 'posts') {
      axios.get(`https://dummyjson.com/posts?userId=${userId}`)
        .then(response => {
          setPosts(response.data); 
        })
        .catch(error => {
          console.error('Ошибка при получении постов:', error);
        });
    } else if (activeTab === 'todos') {
      axios.get(`https://dummyjson.com/todos?userId=${userId}`)
        .then(response => {
          setTodos(response.data); 
        })
        .catch(error => {
          console.error('Ошибка при получении дел:', error);
        });
    }
  }, [userId, activeTab]);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>Email: {user.email}</p>

          <button onClick={() => setActiveTab('posts')}>Посты</button>
          <button onClick={() => setActiveTab('todos')}>Список дел</button>

          <h3>{activeTab === 'posts' ? 'Посты пользователя' : 'Список дел пользователя'}</h3>
          <ul>
            {activeTab === 'posts' && posts.title && <li>{posts.title}</li>}
            {activeTab === 'todos' && todos.title && <li>{todos.title}</li>}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfoPage;