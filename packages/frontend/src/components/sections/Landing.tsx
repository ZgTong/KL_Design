import { FC, memo, useEffect, useState } from 'react';
import {
    Typography,
    Link,
    Box,
    Slide,
} from '@mui/material';
import { LandingMenuData } from '@data/siteData';
import BrandLogo from '@components/widgets/BrandLogo';

const Landing: FC = memo(() => {
    const [slideChecked, setSlideChecked] = useState([
        false,
        false,
        false,
        false,
    ]);
    useEffect(() => {
        const menuLength = LandingMenuData.length;
        const newChecked = Array(menuLength).fill(false);
        LandingMenuData.forEach((_, index) => {
            setTimeout(() => {
                newChecked[index] = true;
                if (index === menuLength - 1) {
                    setSlideChecked(newChecked);
                }
            }, index * 100); // 500ms delay between each link
        });
    }, []);
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: {
                    xs: '0',
                    lg: '150px 0 0',
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1400px',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                        }}
                    >
                        <BrandLogo />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row',
                        },
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: {
                            xs: '0',
                            lg: '100px 20% 0',
                        },
                        gap: {
                            xs: '16px',
                            lg: '0',
                        },
                    }}
                >
                    {LandingMenuData.map((item, index) => {
                        return (
                            <Slide
                                in={slideChecked[index]}
                                direction='right'
                                timeout={1000}
                                key={item.id}
                                mountOnEnter
                                unmountOnExit
                            >
                                <Link
                                    key={item.id}
                                    href={`${item.route}`}
                                    color='primary.light'
                                    underline='none'
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                color: 'secondary.main',
                                                transition:
                                                    'color 0.3s ease-in-out',
                                            },
                                            '&:focus': {
                                                color: 'secondary.main',
                                                transition:
                                                    'color 0.3s ease-in-out',
                                            },
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Link>
                            </Slide>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
});

export default Landing;
