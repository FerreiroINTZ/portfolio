import { useState } from 'react'
import Header from './header/header'
import Start from './start/start'
import Tecnologias from "./tecnologias/tecnologias"
import Projects from './projects/projects'
import Contatos from './contact/contact'

function App() {

  return (
    <>
      <Header />
      <Start />
      <Tecnologias />
      <Projects />
      <Contatos />
    </>
  )
}

export default App
