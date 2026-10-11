import { useEffect } from 'react'
import { useLocation } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './components/Resume/resume'
import Navbar from './components/Home/Navbar'
import Footer from './components/Footer/footer'
import Contact from './components/Footer/Contact'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sectionId = {
      '/': 'home',
      '/about': 'about',
      '/projects': 'projects',
      '/resume': 'resume',
    }[pathname]

    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [pathname])

  return (
    <div className="bg-[#181126]">
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-24"><Home /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="projects" className="scroll-mt-24"><Projects /></section>
        <section id="resume" className="scroll-mt-24"><Resume /></section>
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
