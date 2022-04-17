import React from 'react';
import { Box, CssBaseline, Divider, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Home from './pages/Home/Home';
import CarDetails from './pages/CarDetails/CarDetails';
import NotFound from './pages/NotFound';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Divider variant="fullWidth" />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car/:stockNumber" element={<CarDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
        <Divider variant="fullWidth" />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
