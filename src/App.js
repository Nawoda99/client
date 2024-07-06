import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route,BrowserRouter as Router,} from "react-router-dom";
import TopBar from "./pages/Global/TopBar";
import Login from "./pages/Login";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <Router>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Navbar /> */}
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/login" element={(<Login />) } />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
