'use client';
import { useState, useEffect } from 'react';
import { Box, Fade } from '@mui/material';
import Loading from '@app/loading';
const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoad = () => setIsLoaded(true);
    useEffect(() => {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);
    return isLoaded ? (
        <Fade in={isLoaded} timeout={1500} key={'topFade'}>
            <Box>{children}</Box>
        </Fade>
    ) : (
        <Loading />
    );
};

export default ClientOnly;
