import Lottie from 'lottie-react';
import animateImage from "../../../public/animate.json"
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-center items-center'>
            {user ?
                <Lottie className='w-[750px]' animationData={animateImage}></Lottie>
                :
                <div className='mt-60 p-5'>
                        <div className='text-white font-bold text-center space-y-2'>
                            <h2 className='text-4xl'>You want to see what we have in the Homepage?</h2>
                            <p className='text-2xl'>It's Magic! Press the Login Button.</p>
                        </div>
                        <div className='bg-[#F92659] px-4 py-2 mt-10 text-white font-semibold rounded-xl text-center'>
                            <Link to="/login" >
                                login
                            </Link>
                        </div>
                </div>
        }
        </div>
    );
};

export default Banner;