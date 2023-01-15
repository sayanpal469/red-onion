import { Stack } from '@mui/material';
import React from 'react';
import FoodCategory from '../components/FoodCategory/FoodCategory';
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <Stack spacing={10}>
            <HeroSection/>
            <FoodCategory/>
        </Stack>
    );
};

export default Home;