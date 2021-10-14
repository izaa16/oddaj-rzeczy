import React from 'react'
import HomeHeader from './HomeHeader';
import HomeStart from './HomeStart';
import HomeInfo from './HomeInfo';
import HomeSteps from './HomeSteps';
import HomeAbout from './HomeAbout';

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
            <HomeInfo />
            <HomeSteps />
            <HomeAbout />
        </>
    )
}

export default Home;

