import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { PhotographyPageData } from '@data/siteData';
export async function generateStaticParams() {
    return PhotographyPageData.map((work) => ({
        name: work.name,
    }));
}
const Page: FC<{
    params: { name: string };
}> = memo(({ params: { name } }) => {
    const data = PhotographyPageData.find((ele) => ele.name == name);
    return <Box>My Post: {data?.name}</Box>;
});
export default Page;
