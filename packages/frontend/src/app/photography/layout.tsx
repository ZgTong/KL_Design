import { Box } from "@mui/material";

export default function PhotographyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box>{children}</Box>
    );
}
