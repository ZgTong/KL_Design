'use client';
import { FC, memo, Suspense, useState, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    useMediaQuery,
    ImageList,
    ImageListItem,
    IconButton,
} from '@mui/material';
import { SelectedWorksData } from '@data/siteData';
import { useAppSelector } from '@lib/hooks';
import theme from '@root/theme';
import CloseSvg from '@root/public/images/close.svg';
import OpenSvg from '@root/public/images/open.svg';

const KL_theme = theme();

const WorkPage: FC = memo(() => {
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
    const curWorkIndex = useAppSelector(
        (state) => state.app.selectedWorksIndex
    );
    const data = SelectedWorksData[curWorkIndex];
    const details = data.details;
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: {
                        xs: '24px',
                        lg: '36px',
                    },
                    padding: {
                        xs: '0px 30px 20px',
                        lg: '0px 0px 40px',
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
                    {details.title}
                </Typography>
                <Typography
                    color={{
                        xs: KL_theme.palette.primary.light,
                        lg: KL_theme.palette.info.main,
                    }}
                    sx={{
                        width: '100%',
                        fontWeight: {
                            xs: 'normal',
                            lg: '660',
                        },
                        fontFamily: {
                            lg: 'Denton Test',
                        },
                        textAlign: 'center',
                        fontSize: {
                            xs: '16px',
                            lg: '20px',
                        },
                        lineHeight: {
                            xs: '20px',
                            lg: '34px',
                        },
                    }}
                >
                    {details.desc}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: {
                        xs: '0 28px 0px',
                        lg: '0 0px 0px',
                    },
                }}
            >
                <img
                    src={data.entryImg[lessThanLg ? 'xs' : 'lg']}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Box>
    );
});

const Page: FC = memo(() => {
    const curWorkIndex = useAppSelector(
        (state) => state.app.selectedWorksIndex
    );
    return (
        <Suspense>
            <WorkPage />
            <DetailsContainer id={curWorkIndex + 1} />
        </Suspense>
    );
});

const DetailsContainer: FC<{
    id: number;
}> = memo(({ id }) => {
    const processesRef = useRef<HTMLDivElement>(null);
    const [processesHeight, setProcessesHeight] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
        if (processesRef.current) {
            console.log(
                'processesRef.current.clientHeight',
                processesRef.current.clientHeight
            );
            setProcessesHeight(processesRef.current.clientHeight);
        }
    }, []);
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                paddingTop: {
                    xs: isExpanded
                        ? `calc(${processesHeight}px - 20px)`
                        : `calc(${processesHeight}px * 0.3)`,
                    lg: isExpanded
                        ? `calc(${processesHeight}px - 30px)`
                        : `calc(${processesHeight}px * 0.3)`,
                },
                transition: 'padding-top 0.5s ease-in-out',
            }}
        >
            <DesignProcess id={id} processesRef={processesRef} />
            <Execution
                id={id}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />
        </Box>
    );
});

const DesignProcess: FC<{
    id: number;
    processesRef: React.RefObject<HTMLDivElement>;
}> = memo(({ id, processesRef }) => {
    const data = SelectedWorksData.find((item) => item.id === id);
    const details = data?.details;
    const processes = details?.processes || [];
    return (
        <Box
            ref={processesRef}
            sx={{
                position: 'absolute',
                top: '0',
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0px 24px',
                    lg: '0px 32px',
                },
                backgroundColor: KL_theme.palette.info.main,
                boxShadow: '13px 13px 29.7px 0px rgba(0, 0, 0, 0.26)',
                padding: {
                    xs: '56px 27px 86px',
                    lg: '64px 70px 104px',
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    paddingX: {
                        xs: '8px',
                        lg: '0',
                    },
                }}
            >
                <Typography
                    color={KL_theme.palette.primary.contrastText}
                    sx={{
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        fontFamily: 'Denton Test',
                        fontWeight: '900',
                        fontSize: {
                            xs: '64px',
                            lg: '80px',
                        },
                        lineHeight: {
                            xs: '52px',
                            lg: '64px',
                        },
                        letterSpacing: {
                            xs: '-0.64px',
                            lg: '-0.8px',
                        },
                    }}
                >{`0${data?.id}`}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        marginBottom: {
                            xs: '24px',
                            lg: '0',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: {
                                xs: '8px',
                                lg: '16px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.warning.main}
                            sx={{
                                fontFamily: 'Denton Test',
                                fontWeight: {
                                    xs: '700',
                                    lg: '660',
                                },
                                fontSize: {
                                    xs: '20px',
                                    lg: '28px',
                                },
                                lineHeight: {
                                    xs: '20px',
                                    lg: '34px',
                                },
                            }}
                        >
                            Date:
                        </Typography>
                        <Typography
                            color={KL_theme.palette.primary.main}
                            sx={{
                                fontWeight: {
                                    xs: 'normal',
                                    lg: '700',
                                },
                                lineHeight: {
                                    xs: '16px',
                                    lg: '20px',
                                },
                            }}
                        >
                            {details?.date}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: {
                                xs: '8px',
                                lg: '16px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.warning.main}
                            sx={{
                                fontFamily: 'Denton Test',
                                fontWeight: {
                                    xs: '700',
                                    lg: '660',
                                },
                                fontSize: {
                                    xs: '20px',
                                    lg: '28px',
                                },
                                lineHeight: {
                                    xs: '20px',
                                    lg: '34px',
                                },
                            }}
                        >
                            Client:
                        </Typography>
                        <Typography
                            color={KL_theme.palette.primary.main}
                            sx={{
                                fontWeight: {
                                    xs: 'normal',
                                    lg: '700',
                                },
                                lineHeight: {
                                    xs: '16px',
                                    lg: '20px',
                                },
                            }}
                        >
                            {details?.client}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: {
                                xs: '8px',
                                lg: '16px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.warning.main}
                            sx={{
                                fontFamily: 'Denton Test',
                                fontWeight: {
                                    xs: '700',
                                    lg: '660',
                                },
                                fontSize: {
                                    xs: '20px',
                                    lg: '28px',
                                },
                                lineHeight: {
                                    xs: '20px',
                                    lg: '34px',
                                },
                            }}
                        >
                            Service Provided:
                        </Typography>
                        <Typography
                            color={KL_theme.palette.primary.main}
                            sx={{
                                fontWeight: {
                                    xs: 'normal',
                                    lg: '700',
                                },
                                lineHeight: {
                                    xs: '16px',
                                    lg: '20px',
                                },
                            }}
                        >
                            {details?.service}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: {
                                xs: '8px',
                                lg: '16px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.warning.main}
                            sx={{
                                fontFamily: 'Denton Test',
                                fontWeight: {
                                    xs: '700',
                                    lg: '660',
                                },
                                fontSize: {
                                    xs: '20px',
                                    lg: '28px',
                                },
                                lineHeight: {
                                    xs: '20px',
                                    lg: '34px',
                                },
                            }}
                        >
                            Software:
                        </Typography>
                        <Typography
                            color={KL_theme.palette.primary.main}
                            sx={{
                                fontWeight: {
                                    xs: 'normal',
                                    lg: '700',
                                },
                                lineHeight: {
                                    xs: '16px',
                                    lg: '20px',
                                },
                            }}
                        >
                            {details?.software}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: {
                            xs: '100%',
                            lg: '40%',
                        },
                        gap: {
                            xs: '8px',
                            lg: '24px',
                        },
                        position: {
                            xs: 'static',
                            lg: 'absolute',
                        },
                        right: {
                            lg: '0',
                        },
                        bottom: {
                            lg: '40px',
                        }
                    }}
                >
                    <Typography
                        color={KL_theme.palette.warning.main}
                        sx={{
                            fontFamily: 'Denton Test',
                            fontWeight: {
                                xs: '700',
                                lg: '660',
                            },
                            fontSize: {
                                xs: '20px',
                                lg: '28px',
                            },
                            lineHeight: {
                                xs: '20px',
                                lg: '34px',
                            },
                        }}
                    >
                        The Brief
                    </Typography>
                    <Typography
                        color={KL_theme.palette.primary.main}
                        sx={{
                            fontWeight: {
                                xs: 'normal',
                                lg: '700',
                            },
                            lineHeight: {
                                xs: '16px',
                                lg: '20px',
                            },
                        }}
                    >
                        {details?.brief}
                    </Typography>
                </Box>
            </Box>
            <Box></Box>
        </Box>
    );
});

const Execution: FC<{
    id: number;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}> = memo(({ id, isExpanded, setIsExpanded }) => {
    const data = SelectedWorksData.find((item) => item.id === id);
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
    const toggleExpand = () => setIsExpanded(!isExpanded);
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0px 24px',
                    lg: '0px 32px',
                },
                backgroundColor: KL_theme.palette.warning.main,
                boxShadow: '13px 13px 29.7px 0px rgba(0, 0, 0, 0.26)',
                padding: {
                    xs: '27px 40px',
                    lg: '64px 70px',
                },
            }}
        >
            <Typography
                color={KL_theme.palette.secondary.main}
                sx={{
                    fontWeight: 700,
                    position: 'absolute',
                    top: {
                        xs: '-47px',
                        lg: '-64px',
                    },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    lineHeight: 1.25,
                    letterSpacing: {
                        xs: '0.28px',
                        lg: '0.32px',
                    },
                    textShadow: '13px 13px 29.7px rgba(0, 0, 0, 0.26)',
                }}
            >{`${isExpanded ? 'Close' : 'Open'} Design Process`}</Typography>
            <IconButton
                children={isExpanded ? CloseSvg() : OpenSvg()}
                onClick={toggleExpand}
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 0,
                    width: {
                        xs: '40px',
                        lg: '52px',
                    },
                    height: {
                        xs: '40px',
                        lg: '52px',
                    },
                }}
            />
            <Box
                sx={{
                    paddingX: {
                        xs: '8px',
                        lg: '0',
                    },
                }}
            >
                <Typography
                    color={KL_theme.palette.secondary.main}
                    sx={{
                        textAlign: {
                            xs: 'center',
                            lg: 'left',
                        },
                        fontFamily: 'Denton Test',
                        fontWeight: {
                            xs: '700',
                            lg: '660',
                        },
                        fontSize: {
                            xs: '32px',
                            lg: '36px',
                        },
                        marginBottom: {
                            xs: '40px',
                            lg: '40px',
                        },
                    }}
                >
                    Execution
                </Typography>
                <Typography
                    color={KL_theme.palette.info.main}
                    sx={{
                        textAlign: 'left',
                        fontFamily: 'Denton Test',
                        fontWeight: {
                            xs: '700',
                            lg: '660',
                        },
                        fontSize: {
                            xs: '20px',
                            lg: '28px',
                        },
                        lineHeight: {
                            xs: '20px',
                            lg: '34px',
                        },
                        marginBottom: {
                            xs: '16px',
                            lg: '24px',
                        },
                    }}
                >
                    {data!.details.execution.title}
                </Typography>
                <Typography
                    color={KL_theme.palette.primary.light}
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'normal',
                        fontSize: {
                            xs: '16px',
                            lg: '14px',
                        },
                        width: {
                            xs: '100%',
                            lg: '40%',
                        },
                        marginBottom: {
                            xs: '24px',
                            lg: '64px',
                        },
                    }}
                >
                    {data!.details.execution.desc}
                </Typography>
            </Box>
            <ImageList cols={1} gap={4} variant='quilted'>
                {data!.details.execution.photos.map((img) => (
                    <ImageListItem key={img.id}>
                        <img
                            src={lessThanLg ? img.url.xs : img.url.lg}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
});

export default Page;
