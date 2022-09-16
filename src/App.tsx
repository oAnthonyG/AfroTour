import './styles/global.scss'

import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { Router } from './Routes';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
