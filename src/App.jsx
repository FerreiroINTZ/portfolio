import { useState } from 'react'
import Header from './header'
import Start from './start/start'
import Tecnologias from "./tecnologias/tecnologias"
import Projects from './projects/projects'

function App() {

  return (
    <>
      <Header />
      <Start />
      <Tecnologias />
      <Projects />
    </>
  )
}

export default App
