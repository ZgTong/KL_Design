import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { PhotographyPageData } from '@data/siteData';


const Home: FC = memo(() => {
    return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                }}
                id='photography'
            >
                photography
            </Box>
    );
});
export default Home;
