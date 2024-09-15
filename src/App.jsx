import './App.css'
import Body from './components/body.jsx'
import Control from './components/control.jsx'
import Sidebar from './components/sidebar.jsx'
function App() {
  return (
    <>
    <div className='main-box'>
    <Sidebar/>
    <Body/>
    <Control/>
    </div>
    </>
  )
}

export default App
