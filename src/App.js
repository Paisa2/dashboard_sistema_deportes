import { useState } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./page/Home";
import CategoryIndex from './page/category/CategoryIndex';
import AppState from './state/appState';
import ProductIndex from './page/product/ProductIndex';
import DisiplinaIndex from './page/disiplina/DisiplinaIndex';
import UserIndex from './page/user/UserIndex'
import EntrenadorIndex from './page/entrenador/EntrenadorIndex';
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import './Dash.css'
import Box from '@mui/material/Box';


function App() {

  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return ( 

        <>
          <div className='bgcolor'> 
            <AppState>
              <BrowserRouter>
                  <ThemeProvider theme={darkTheme}>
                        <Navbar setMode={setMode} mode={mode} />
                        <Box sx={{ display: 'flex' }}>
                              <Sidenav setMode={setMode} mode={mode} />
                              <Routes>
                                <Route path="/" exact element={<Home />} />
                                <Route path="/producto" exact element={<ProductIndex />} />
                                <Route path="/categoria" exact element={<CategoryIndex />} />
                                <Route path='/disiplina' exact element={<DisiplinaIndex />} />
                                <Route path='/entrenador' exact element={<EntrenadorIndex />} />
                                <Route path='/usuario' exact element={<UserIndex />} />
                              </Routes>
                        </Box>          
                  </ThemeProvider>
              </BrowserRouter>
            </AppState>
          </div>
        </>
    )
}

export default App;