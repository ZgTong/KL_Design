'use client';
import { FC, memo, Suspense } from 'react';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import { SelectedWorksData } from '@data/siteData';
import { useAppSelector } from '@lib/hooks';
import theme from '@root/theme';

const WorkPage: FC = memo(() => {
    const curPhotoIndex = useAppSelector((state) => state.app.selectedWorksIndex);
    const data = SelectedWorksData[curPhotoIndex];
    const KL_theme = theme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '1400px',
                height: 'auto',
                paddingBottom: {
                    xs: '64px',
                    lg: '104px',
                },
                marginTop: {
                    xs: '0',
                    lg: '-110px',
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    padding: {
                        xs: '0px 30px 20px',
                        lg: '0px 0px 64px',
                    },
                }}
            >
                <Box
                    sx={{
                        borderBottom: {
                            xs: '1px solid #272727',
                            lg: '2px solid #272727',
                        },
                        width: '100%',
                        padding: {
                            xs: '0 0px 20px',
                            lg: '0 0 0px',
                        },
                    }}
                >
                    <Typography
                        color={KL_theme.palette.secondary.main}
                        sx={{
                            width: '100%',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontFamily: 'Denton Test',
                            fontSize: {
                                xs: '32px',
                                lg: '102px',
                            },
                            textShadow: '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                        }}
                    >
                        {data.title}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: {
                        xs: '0 28px 0px',
                        lg: '0 70px 0px',
                    },
                }}
            >
                {/* <ImageList cols={2} gap={4} variant='quilted'>
                    {data.collection.map((item, index) => (
                        <ImageListItem
                            key={item.id}
                            cols={item.cols}
                            rows={item.rows}
                            onClick={handleOpen}
                        >
                            <img
                                src={item.url}
                                loading='lazy'
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
            </Box>
        </Box>
    );
});

const Page: FC = memo(() => {
    return (
        <Suspense>
            <WorkPage />
        </Suspense>
    );
});
export default Page;
