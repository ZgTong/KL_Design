"use client";
import { FC, memo, useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch } from '@lib/hooks';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import { PhotographyPageData } from '@data/siteData';
import theme from '@root/theme';


const Home: FC = memo(() => {
    const dispatch = useAppDispatch();
    const KL_Theme = theme();
    useEffect(() => {
        console.log("first useEffect in Photography")
        const background = "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 15%)";
        dispatch({ type: "app/setBackgroundImageMobile", payload: background });
        dispatch({ type: "app/setBackgroundImageDesktop", payload: background });
        dispatch({ type: "app/setBackgroundColor", payload: KL_Theme.palette.info.main });
    }, []);
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

                <BackgroundSetter />
                photography
            </Box>
    );
});
export default Home;
