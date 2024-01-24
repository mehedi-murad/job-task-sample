import React from 'react';
import Navbar from '../Shared/Nabvar/Navbar';
import background from "../../assets/Background/bg.jpg"
import Footer from '../Shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }} className='h-[90vh]'>
                    <Banner></Banner>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;