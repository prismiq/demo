import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
    message?: string;
}


export default function LoadingComponent({message = 'Loading...'}: Props) {
    return (
        <Backdrop open={true} invisible={true}>
            <Box display='flex' justifyContent='centre'>
                <CircularProgress size={100} color='secondary' />
                <Typography variant='h4'>{message}</Typography>
            </Box>
        </Backdrop>
    )
}