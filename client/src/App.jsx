import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import Author from './components/Author'

function App() {
  const [authors, setAuthors] = useState([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path ="/authors" element={<Main authors={authors} setAuthors={setAuthors}></Main>}/>
          <Route exact path = "./authors/:authorsId/edit" element= {<Author/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;