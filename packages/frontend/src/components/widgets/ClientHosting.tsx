'use client';
import { useState, useEffect } from 'react';
import { Box, Fade } from '@mui/material';
import Loading from '@app/loading';
const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);
    if (!isLoaded) {
        return <Loading />;
    }
    return (
        <Fade in={isLoaded} timeout={1500} key={"topFade"}>
            <Box>{children}</Box>
        </Fade>
    );
};

export default ClientOnly;
