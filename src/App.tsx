import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="app-shell" id="top">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
