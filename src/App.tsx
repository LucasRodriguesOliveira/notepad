import './App.css'
import { Sidebar } from './components/Sidebar'
import { Toolbar } from './components/Toolbar'
import { SidebarProvider } from './context/sidebar.context'
import { HomePage } from './pages/home'

function App() {
  return (
    <>
      <SidebarProvider>
        <Toolbar />
        <Sidebar />
        <HomePage />
      </SidebarProvider>
    </>
  )
}

export default App
