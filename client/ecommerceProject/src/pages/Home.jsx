import React ,{ useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';


const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        // if (!token) {
        //    navigate('/login');
        // }
    }, [navigate]);
 
  return (
    <div>
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default Home
