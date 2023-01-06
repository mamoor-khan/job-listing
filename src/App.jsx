import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import ListContainer from './components/ListContainer'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListContainer />} />
          <Route path='/home' element={<ListContainer />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
