import { Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import SettingsPage from './pages/SettingsPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={HomeScreen}></Route>
        <Route path='/settings' Component={SettingsPage}></Route>
      </Routes>
    </>
  )
}

export default App
