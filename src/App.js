import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import AdminSidebar from './scenes/global/AdminSidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
// import Invoces from './scenes/invoces';
// import Bar from './scenes/bar';
// import From from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geograhy';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AdminSidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              {/* <Route path="/invoces" element={<Invoces/>} /> */}
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/form" element={<From/>} /> */}
              {/* <Route path="/line" element={<Line/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/faq" element={<FAQ/>} /> */}
              {/* <Route path="/geograhyfaq" element={<Geography/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
