import { Box, Container, Grid, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import useFoods from '../../hooks/useFoods';
import TabButtons from '../Custom/TabButtons';
import FoodCard from '../FoodCard/FoodCard';

const categories = ['breakfast', 'lunch', 'Dinner']

const FoodCategory = () => {
    const [value, setValue] = useState(0);
    const {foods, loading} = useFoods(categories[value])
    
  return (
        <Box>
            <Container>
                <Box sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    mb: 8
                }}>
                    <TabButtons value={value} setValue={setValue}/>
                </Box>

                <Grid container gap='40px' display="flex" justifyContent="center" alignItems="center">
                    {
                       !loading && foods.map(food => <FoodCard key={food._id} value={value} meal={food}/>)
                    }

                    {loading && Array.from(new Array(6)).map((item) => (
                    <Box sx={{ width: 350 }}>
                            <Skeleton
                            width={250}
                            height={250}
                            variant='circular'
                            sx={{
                              mx: 'auto',
                            }}
                           animation='wave'
                        />  
                            <Skeleton width={350} height={50} variant='text' />
                            <Skeleton width={350} height={50} variant='text' />
                            <Skeleton
                            width={100}
                            height={40}
                            variant='text'
                            sx={{
                                mx: 'auto',
                            }}
                            />
                     </Box>
                  ))}
                </Grid>
            </Container>           
        </Box>
    );
};

export default FoodCategory;