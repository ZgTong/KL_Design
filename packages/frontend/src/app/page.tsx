'use client';
import { FC, memo } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@root/theme';
import Landing from '@components/sections/Landing';
import About from '@components/sections/About';
import SelectedWorks from '@components/sections/SelectedWorks';
import Photography from '@components/sections/Photography';
import Contact from '@components/sections/Contact';


const Home: FC = memo(() => {
    const KL_theme = theme();
    return (
        <ThemeProvider theme={KL_theme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Landing />
                <About hrefId='about'/>
                <SelectedWorks hrefId='works' />
                <Photography hrefId='photography' />
                <Contact hrefId='contact' />
            </Box>
        </ThemeProvider>
    );
});
export default Home;
