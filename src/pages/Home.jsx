import { Stack } from '@mui/material';
import React from 'react';
import Features from '../components/Features/Features';
import FoodCategory from '../components/FoodCategory/FoodCategory';
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <Stack spacing={10}>
            <HeroSection/>
            <FoodCategory/>
            <Features/>
        </Stack>
    );
};

export default Home;