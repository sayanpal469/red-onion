import { styled, Tabs } from '@mui/material';

export const CustomTabs = styled(Tabs)(({theme}) => ({
    padding: '5px',
    '& .MuiTabs-flexContainer': {
        justifyContent: 'space-between'
    },
    '& .MuiTab-root': {
        textTransform: 'capitalize',
        color: '#000'
    }
}))