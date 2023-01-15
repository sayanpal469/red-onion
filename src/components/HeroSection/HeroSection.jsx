import { Box, Button, Container, Typography } from '@mui/material';
// import { display } from '@mui/system';
import React from 'react';
import { HeroSectionWrapper, SearchBox } from './heroStyled';

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <Container sx={{
                height: '100%'
            }}>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center'
                }}>
                    <Box sx={{
                        width: '50%'
                    }}>
                        <Typography variant='h4' fontWeight={500} textAlign='center'>
                            Best Food Waiting For Your Belly
                        </Typography>

                        <SearchBox>
                            <input type="search" alt='Search Food' placeholder='Search Food' />
                            <button>Search</button>
                        </SearchBox>
                    </Box>
                </Box>
            </Container>
            
        </HeroSectionWrapper>
    );
};

export default HeroSection;