import Box from '@mui/material/Box';
import ListUser from '../user/ListUser'

export default function Usuario() {


    return (
            <>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box height={90} />  
                    <ListUser />
                </Box>
            </>
    )
}