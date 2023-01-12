import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { FlexBox } from '../styled/Flex';

const Header = () => {
    return (
        <div>
            <Container>
                <FlexBox justifyContent='space-between' sx={{
                    padding: '2rem 0',
                }}>
                    <img src='https://i.ibb.co/qyhHRFM/logo2.png' alt='Logo' style={{
                        width: '160px'
                    }}/>
                    <Stack direction='row' spacing={4} sx={{
                        alignItems: 'center'
                    }}>
                        <IconButton>
                            <ShoppingCartOutlinedIcon/>
                        </IconButton>
                        <Button variant='text' sx={{
                            color: '#191919'
                        }}>Sign In</Button>
                        <Button>Sign Up</Button>
                    </Stack>
                </FlexBox>
            </Container>
        </div>
    );
};

export default Header;