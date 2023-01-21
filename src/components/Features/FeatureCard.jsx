import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';

const FeatureCard = ({feature}) => {
    return (
        <Card
         sx={{
            maxWidth: 345,
            boxShadow: 'none',
            cursor: 'pointer',
            borderRadius: 5,
            pb: 2,
            '&:hover': {
               boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
            },
         }}
      >
         <CardMedia
            component='img'
            height='auto'
            image={feature.image}
            alt='green iguana'
         />
         <CardContent
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'flex-start',
               gap: 1,
               pt: 2,
               '&:last-child': {
                  pb: 0,
               },
            }}
         >
            <Box
               sx={{
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                  borderRadius: '50%',
               }}
            >
               <feature.icon
                  sx={{
                     color: '#ffffff',
                  }}
               />
            </Box>
            <Box>
               <Typography gutterBottom variant='h6' component='div'>
                  {feature.title}
               </Typography>
               <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
               </Typography>
               <Button
               variant='text'
                  sx={{
                     mt: 3,
                     color: '#191919',
                  }}
                  endIcon={<ArrowForwardIcon sx={{
                    bgcolor: '#76ff03',
                    borderRadius: '50px',
                    color: '#fff',
                  }} />}
               >
                  See more
               </Button>
            </Box>
         </CardContent>
      </Card>
    );
};

export default FeatureCard;