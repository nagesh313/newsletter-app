import { Box, Button, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createRef } from 'react';
import { createFileName, useScreenshot } from "use-react-screenshot";
import './App.css';
import { Newsletter } from './components/Newsletter';
import { Header } from './components/sections/headers/Header';
import { ResponsiveAppBar } from './components/sections/headers/AppBar';

const defaultTheme = createTheme({
  palette: {
    background: {
      // default: "#222222"
    },
    text: {
      // primary: "#ffffff"
    }
  }
}
);
function App() {
  const ref = createRef()
  const [image, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 1.0
  });
  const download = (image: any, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  console.log(image);
  return (<ThemeProvider theme={defaultTheme} >
    <div className="App" id='App' >
      <Box ref={ref}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Header />
        <Newsletter />
        <Button onClick={downloadScreenshot}>Print</Button>
      </Box>
    </div>
  </ThemeProvider >
  );
}

export default App;
