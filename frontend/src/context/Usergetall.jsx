import { useState, useEffect } from 'react';
import axios from 'axios';
import { getallusersRoute } from '../utils/Apiroutes';

const UserGetAll = () => {
  const [allusers, setAllusers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(getallusersRoute, {
          withCredentials: true, 
        });
        setAllusers(response.data.alluser);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return [allusers, loading];
};

export default UserGetAll;
