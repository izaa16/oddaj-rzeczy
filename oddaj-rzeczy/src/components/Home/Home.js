import React from 'react'
import HomeHeader from './HomeHeader';

const Home = () => {
    return (
        <div className='container top-block flex' name="homeStart">
            <div className='left-side-container' />
            <div className='right-side-container'>
                <div className='flex-col-right-top__header'>
                    <HomeHeader />
                </div>
            </div>
        </div>
    )
}

export default Home;
