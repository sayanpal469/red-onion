import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import { theme } from "./Theme/theme";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    }
  ])                        
  return (
    <ThemeProvider theme={theme}>
      <div>
        <RouterProvider router={router} />
        <CssBaseline/>
      </div>
    </ThemeProvider>
  );
}

export default App;
