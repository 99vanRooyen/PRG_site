import Navbar from "./components/navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Blog from "./pages/Blog.jsx"
import Services from "./pages/Services.jsx"
import Products from "./pages/Products.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./components/loginForm.jsx"
import Admin from "./pages/Admin.jsx"
import {Routes, Route} from "react-router-dom"

function App() {

  // Variables

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/ >} />
        <Route path="/about" element={<About/ >} />
        <Route path="/blog" element={<Blog/ >} />
        <Route path="/services" element={<Services/ >} />
        <Route path="/products" element={<Products/ >} />
        <Route path="/contact" element={<Contact/ >} />
        <Route path="/login" element={<Login/ >} />
        <Route path="/admin" element={<Admin/ >} />
      </Routes>
    </>
  )
}

export default App
