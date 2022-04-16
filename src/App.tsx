import React from 'react';
import { CssBaseline, Divider, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Home from './pages/Home/Home';
import CarDetails from './pages/CarDetails';
import NotFound from './pages/NotFound';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import LayoutWrapper from './layout/LayoutWrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutWrapper>
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
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default App;
