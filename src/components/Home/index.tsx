import React, { useState } from 'react';

//components
import HomePost from '../HomePost';
import HomePostPublic from '../HomePublic';

//styles
import './Home.scss'


const Home: React.FC = () => {


    return (
        <section className="home">
            <h3 className="home__title">Домашняя</h3>

            <HomePostPublic />

            <ul className="home__posts">
                <HomePost />
                <HomePost />
                <HomePost />
            </ul>

            {/* <Widgets /> */}
        </section >
    )

}

export default Home;