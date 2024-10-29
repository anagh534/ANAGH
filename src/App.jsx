import 'react'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Works from './pages/Works/Works'
import Blogs from './pages/Contact/Contact'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Blogs/>
    </>
  )
}

export default App
