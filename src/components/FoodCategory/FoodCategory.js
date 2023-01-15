import { Box, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import useFoods from '../../hooks/useFoods';
import TabButtons from '../Custom/TabButtons';
import FoodCard from '../FoodCard/FoodCard';


const FoodCategory = () => {
  const [value, setValue] = useState(0);
  
  const {foods} = useFoods()

  console.log(foods);
  
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

                <Grid container display="flex" justifyContent="center" alignItems="center">
                    {
                        foods.map(food => <FoodCard key={food._id} meal={food}/>)
                    }
                </Grid>
            </Container>           
        </Box>
    );
};

export default FoodCategory;