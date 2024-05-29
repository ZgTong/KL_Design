import { FC, memo } from 'react';
import { Box, Toolbar, Button, SvgIcon } from '@mui/material';
import theme from '@root/theme';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import TabArrowLeft from '@root/public/images/tab_arrow_left.svg';
import TabArrowRight from '@root/public/images/tab_arrow_right.svg';

const KL_Theme = theme();
const Bar: FC<{
    contentLength: number;
    name: string;
    tabColor?: string;
}> = memo(
    ({ contentLength, name, tabColor = KL_Theme.palette.warning.dark }) => {
        let curIndex: number = 0;
        switch (name) {
            case 'photography':
                curIndex = useAppSelector(
                    (state) => state.app.photographyIndex
                );
                break;
            case 'selectedWorks':
                curIndex = useAppSelector(
                    (state) => state.app.selectedWorksIndex
                );
                break;
            default:
                break;
        }
        const dispatch = useAppDispatch();
        const handleNext = () => {
            dispatch({
                type: 'app/setPhotographyIndex',
                payload: curIndex === contentLength - 1 ? 0 : curIndex + 1,
            });
        };
        return (
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1400px',
                    height: 'auto',
                    paddingTop: {
                        xs: '30px',
                        lg: '80px',
                    },
                    paddingX: {
                        xs: '15px',
                        lg: '0px',
                    },
                }}
            >
                <Toolbar
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        href='/'
                        startIcon={
                            <SvgIcon
                                sx={{
                                    path: {
                                        stroke: tabColor,
                                    },
                                }}
                                children={TabArrowLeft()}
                            />
                        }
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            width: {
                                xs: '86px',
                                lg: '120px',
                            },
                            height: {
                                xs: '24px',
                                lg: '40px',
                            },
                            textAlign: 'center',
                            color: tabColor,
                            padding: {
                                xs: '4px 16px',
                                lg: '10px 24px',
                            },
                            borderRadius: {
                                xs: '0 12px',
                                lg: '0 20px',
                            },
                            borderColor: tabColor,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={handleNext}
                        endIcon={<SvgIcon children={TabArrowRight()} />}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            width: {
                                xs: '86px',
                                lg: '120px',
                            },
                            height: {
                                xs: '24px',
                                lg: '40px',
                            },
                            textAlign: 'center',
                            color: tabColor,
                            padding: {
                                xs: '4px 16px',
                                lg: '10px 24px',
                            },
                            borderRadius: {
                                xs: '0 12px',
                                lg: '0 20px',
                            },
                            borderColor: tabColor,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}
                    >
                        Next
                    </Button>
                </Toolbar>
            </Box>
        );
    }
);

export default Bar;
