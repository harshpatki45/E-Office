
import './App.css';
import indore from './Assets/downloadindore.png'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div style={{
        backgroundImage: `url(${indore})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        width: "100vw",
        position: "absolute",
        marginLeft: "-8px",
        marginTop: "150px",
        
        
        }}>
         <div style={{ paddingTop: '64px', color:"white" }}>
          <Home />
        </div>
        <Footer />
        
        </div>
    </div>
  );
}

export default App;export const images = [
    '/Rajwada.png',
    '/Foodhub.png',
    '/image1.png',
];

