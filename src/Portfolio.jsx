import React, { useState, useEffect } from 'react';
import Achivement from './Components/Achivement';
import NewButton from './Components/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { config } from 'dotenv';
// config();


const Portfolio = () => {
  const [login, setLogin] = useState(false);
  const [images, setImage] = useState([]);

  // Logout function to clear localStorage and update login state
  const logout = () => {
    localStorage.clear();
    setLogin(false); // Reset login state after logout
  };

  useEffect(() => {
    const storedData = localStorage.getItem("data");

    // Check if stored data matches admin credentials
    if (storedData) {
      const data = JSON.parse(storedData);
      if (
        data?.data?.username === "adminmuneeb" &&
        data?.data?.email === "themuneebansari606@gmail.com"
      ) {
        setLogin(true);
      }
    }

    // Fetch images from the backend
    axios.get(`https://backened-alpha.vercel.app/api/getimage`)
      .then(response => setImage(response.data))
      .catch(error => console.error('Error fetching images:', error.message)); // Enhanced error logging
  }, []);

  // Handle image deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backened-alpha.vercel.app/api/image/${id}`);
      setImage(images.filter(image => image._id !== id)); // Remove the deleted image from the state
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div>
      <div className='w-30 m-auto'>
        {login ? <Link to="/upload"><NewButton name="Add Post" /></Link> : <span />}
        {login ? 
          <button
            className='bg-gray-500 p-2 rounded-md text-white font-bold hover:bg-blue-950'
            onClick={logout}
          >
            Logout
          </button>
          : <span />
        }
      </div>

      <Achivement name="Innovative Loopline Portfolio" />

      <div className='w-full flex flex-wrap justify-center'>
        {images.map(oneimage => (
          <div className='w-70 h-80 m-5' key={oneimage._id}>
            <img
              className='w-70 h-75 shadow-blue-950 shadow-2xl rounded-2xl'
              src={oneimage.url}
              alt={oneimage._id}
            />
            {login && (
              <button
                className='mt-2 bg-gray-500 m-5 text-white p-2 rounded-md hover:bg-red-700'
                onClick={() => handleDelete(oneimage._id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
