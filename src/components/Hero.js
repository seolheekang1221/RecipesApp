import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Container from './reusableComponents/Container';
import Loader from './reusableComponents/Loader';

const Hero = () => {
    return(
        <section className="hero">
            <Container></Container>
        </section>
    );
};

export default Hero;