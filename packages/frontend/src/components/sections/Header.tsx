'use client';
import { FC, memo, useMemo, useState, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import {
    ThemeProvider,
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    SvgIcon,
    MenuItem,
    Menu,
    Link,
    Typography,
} from '@mui/material';
import theme from '@root/theme';
import { HearderMenuData } from '@data/siteData';
import { SectionId } from '@data/dataDef';
import { useNavObserver } from '@hooks/useNavObserver';

export const headerID = 'headerNav';
const Header: FC = memo(() => {
    const KL_theme = theme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setMobileOpen((prevState) => !prevState);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileOpen((prevState) => !prevState);
    };
    const menuSVG_1 = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='14'
            viewBox='0 0 22 14'
            fill='none'
        >
            <path
                d='M1 1H21'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
            <path
                d='M7 6.5L21 6.5'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
            <path
                d='M1 12.5H21'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
        </svg>
    );
    const menuSVG_2 = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='14'
            viewBox='0 0 22 14'
            fill='none'
        >
            <path
                d='M1 1.5L21 12.5'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
            <path
                d='M1 12.5L21 1.5'
                stroke='#EEE5D8'
                strokeWidth='2'
                strokeLinecap='round'
            />
        </svg>
    );
    const navSections = useMemo(
        () => [
            {
                id: 0,
                text: 'Home',
                href: 'home',
                route: '/#home'
            },
            ...HearderMenuData,
        ],
        []
    );
    const intersectionHandler = useCallback((section: SectionId | null) => {
        // console.log("section", section);
        section && setCurrentSection(section);
    }, []);
    useNavObserver(
        navSections.map((section) => `#${section.href}`).join(','),
        intersectionHandler
    );
    const showHeader = useAppSelector((state) => state.app.showHeader);
    return (
        <ThemeProvider theme={KL_theme}>
            <Box
                sx={{
                    position: 'fixed',
                    top: {
                        xs: '60px',
                        lg: '46px',
                    },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    height: {
                        xs: '46px',
                        lg: '84px',
                    },
                    display: showHeader ? 'flex' : 'none',
                    boxSizing: 'border-box',
                    boxShadow: '0px 0px 24px 0px rgba(41, 41, 41, 0.9)',
                    backgroundColor: 'warning.main',
                    borderRadius: {
                        xs: '16px 0',
                        lg: '32px 0',
                    },
                    zIndex: 1000,
                }}
                id={headerID}
            >
                <CssBaseline />
                <AppBar
                    component={'nav'}
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        borderRadius: {
                            xs: '16px 0',
                            lg: '32px 0',
                        },
                        backgroundColor: 'warning.main',
                        boxSizing: 'border-box',
                    }}
                >
                    <Toolbar
                        variant='dense'
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '100%',
                            padding: {
                                sm: '8px 16px',
                                lg: '16px 32px',
                            },
                            boxSizing: 'border-box',
                        }}
                    >
                        <Link
                            href='/#home'                            
                            sx={{
                                height: '100%',
                                width: 'auto',
                                textDecoration: 'none',
                            }}
                        >
                            <Typography
                                color={'info.main'}
                                sx={{
                                    fontFamily: 'Denton Test',
                                    fontWeight: 'bold',
                                    fontStyle: 'normal',
                                    fontSize: {
                                        xs: '20px',
                                        lg: '28px',
                                    },
                                    width: '100%',
                                    height: '100%',
                                    lineHeight: {
                                        xs: '30px',
                                        lg: '52px',
                                    },
                                    '&:hover': {
                                        color: 'secondary.main',
                                        transition: 'color 0.3s ease-in-out',
                                    },
                                    '&:focus': {
                                        color: 'secondary.main',
                                        transition: 'color 0.3s ease-in-out',
                                    },
                                }}
                            >
                                KL Design
                            </Typography>
                        </Link>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={(e) => handleMenuClick(e)}
                            onMouseEnter={() =>
                                !isHovered && setIsHovered(true)
                            }
                            onMouseLeave={() =>
                                isHovered && setIsHovered(false)
                            }
                            sx={{
                                display: {
                                    xs: 'block',
                                    lg: 'none',
                                },
                            }}
                        >
                            <SvgIcon
                                children={mobileOpen ? menuSVG_2 : menuSVG_1}
                            />
                        </IconButton>
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    lg: 'flex',
                                },
                                gap: '64px',
                            }}
                        >
                            {HearderMenuData.map((item, index) => (
                                <Link
                                    key={item.id}
                                    href={`${item.route}`}
                                    sx={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Typography
                                        color={item.href == currentSection ? 'secondary.main' : 'info.main'}
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            lineHeight: '20px',
                                            letterSpacing: '0.32px',
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
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                {HearderMenuData && HearderMenuData.length > 0 && (
                    <Menu
                        open={showHeader && open}
                        id='headerMenu'
                        anchorEl={anchorEl}
                        onClose={handleMenuClose}
                        sx={{
                            '.MuiPaper-root': {
                                backgroundColor: 'warning.main',
                                padding: '40px 32px',
                                borderRadius: {
                                    xs: '0 16px',
                                },
                                boxShadow:
                                    '0px 9px 51.3px 0px rgba(41, 41, 41, 0.9)',
                            },
                            '.MuiList-root': {
                                padding: 0,
                            },
                            '.MuiMenuItem-root': {
                                padding: '8px 0',
                            },
                        }}
                    >
                        {HearderMenuData.map((item) => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    onClick={handleMenuClose}
                                    id={item.href}
                                >
                                    <Link
                                        sx={{
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: item.href == currentSection ? 'secondary.main' : 'info.main',
                                            width: '100%',
                                            padding: 0,
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
                                        href={`${item.route}`}                            
                                    >
                                        {item.text}
                                    </Link>
                                </MenuItem>
                            );
                        })}
                    </Menu>
                )}
            </Box>
        </ThemeProvider>
    );
});
Header.displayName = 'Header';
export default Header;
