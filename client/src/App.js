import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Home from 'components/Home';
import Signin from 'components/Signin';
import Signup from 'components/Signup';
import Profile from 'components/Profile';

function App() {
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));
  const isAuth =true;
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={isAuth ? <Home mode={mode} setMode={setMode}/> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <Profile/> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
