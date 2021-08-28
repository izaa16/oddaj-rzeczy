import React from 'react'
import HomeHeader from './HomeHeader';
import HomeStart from './HomeStart';

const Home = () => {
    return (
        <>
            <div className='container top-block flex' name="homeStart">
                <div className='left-side-container' />
                <div className='right-side-container'>
                    <div className='flex-col-right-top__header'>
                        <HomeHeader />
                    </div>
                    <HomeStart />
                </div>
            </div>
        </>
    )
}

export default Home;

