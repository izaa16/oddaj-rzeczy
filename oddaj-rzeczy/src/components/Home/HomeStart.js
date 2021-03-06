import React from 'react';
import { Link } from 'react-router-dom';

const HomeStart = () => {
    return (
        <section className='top-block-bttns'>
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <div className='decoration' />
            <div className='bttns'>
                <Link className='white-bttn' to='/logowanie'>ODDAJ<br />RZECZY</Link>
                <Link className='white-bttn' to='/logowanie'>ZORGANIZUJ<br />ZBIÓRKĘ</Link>
            </div>
        </section>
    )
}

export default HomeStart;