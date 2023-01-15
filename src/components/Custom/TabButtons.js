import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { CustomTabs } from './tabStyle';

export default function TabButtons({value, setValue}) {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <CustomTabs value={value} onChange={handleChange} centered>
        <Tab label="Breakfast" />
        <Tab label="Lunch" />
        <Tab label="Dinner" />
      </CustomTabs>
    </Box>
  );
}
