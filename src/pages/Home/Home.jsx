import React from 'react';
import Navbar from '../Shared/Nabvar/Navbar';
import background from "../../assets/Background/bg.jpg"
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }} className='min-h-screen'>
                <Navbar></Navbar>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;