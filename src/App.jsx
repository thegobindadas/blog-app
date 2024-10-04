import { Outlet } from 'react-router-dom'
import { Header } from './components/index'

function App() {

  return (
    <div className="min-h-screen bg-[#121212]">
      <div className="h-screen overflow-y-auto text-white">
        <Header />
          <main>
            <Outlet />
          </main>
      </div>
    </div>
  )
}

export default App
