import { Box } from "@mui/material";

export default function PhotographyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>{children}</Box>
    );
}
