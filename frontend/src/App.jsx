import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Logo from './Components/Template/Logo/Logo'
import Navbar from './Components/Template/Navbar/Navbar'
import Footer from './Components/Template/Footer/Footer'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Logo />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
