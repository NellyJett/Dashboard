
import './App.css'
import AdminLayout from './components/admin-layout'
import { Route, Routes } from 'react-router-dom'
function App() {


  return (
    <Routes>
      <Route path='/' element={<AdminLayout />} />
      
    </Routes>
    // <>
    //    <div>
    //       <AdminLayout />
    //   </div> 
    // </>
  )
}

export default App
