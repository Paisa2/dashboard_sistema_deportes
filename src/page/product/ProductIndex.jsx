import Box from '@mui/material/Box'
import ListProduct from './ListProduct'


export default function Producto() {


    return (
            <>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box height={90} />  
                    <ListProduct />
                </Box>

            </>
    )
}