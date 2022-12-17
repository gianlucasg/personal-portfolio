import ParticlesBackground from './components/layout/background/particles';
import NavBar from './components/layout/navbar/navbar'
import Home from './pages/home'
import Hireme from './pages/hireme'
import Projects from './pages/projects'
import AboutMe from './components/layout/aboutme/aboutme'
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
      <BrowserRouter>
          <Container>
          <NavBar/>
            <Box sx={{borderRadius:3,backgroundColor:'rgb(241,157,71)',marginTop:'10px'}}>
              <Routes>
                <Route index path="/" element={<Home/>} />
                <Route index path="/projects" element={<Projects/>} />
                <Route index path="/hireme" element={<Hireme/>} />
              </Routes>
            </Box>
            <Box sx={{borderRadius:3,backgroundColor:'rgb(241,157,71)',marginTop:'10px'}}>
              <AboutMe/>
            </Box>
        </Container>
          <ParticlesBackground/>
      </BrowserRouter>
  );
}

export default App;
