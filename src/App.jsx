import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ThemeProvider } from './context/ThemeContext'
import ProfilePage from './pages/ProfilePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App