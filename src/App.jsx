import './styles/app.scss'

import { BrowserRouter , Route , Routes } from 'react-router-dom'

import NavBar from './components/Navbar/NavBar'

import TestimonialsSection from './components/Testimonials/Testimonials'
import ContactsSection from './components/Contacts/Contacts'

import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <TestimonialsSection/>
    <ContactsSection/>
    <Footer/>
    

    <Routes>
      <Route path="/" element={

    <>
      
     
      
    </>

      }/>
     
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
