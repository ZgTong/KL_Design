"use client";
import { FC, memo, Suspense } from 'react';
import { Box } from '@mui/material';
import { SelectedWorksData } from '@data/siteData';
import { useSearchParams } from 'next/navigation';

const WorkPage: FC = memo(() => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || 0;
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                color: 'white',
            }}
            id='works'
        >
            works {name}
        </Box>
    );
});

const Home: FC = memo(() => {
    return (
        <Suspense>
            <WorkPage />
        </Suspense>
    );
});
export default Home;
