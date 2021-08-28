import React from 'react'
import HomeHeader from './HomeHeader';
import HomeStart from './HomeStart';
import HomeInfo from './HomeInfo';
import HomeSteps from './HomeSteps';

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
        </>
    )
}

export default Home;

