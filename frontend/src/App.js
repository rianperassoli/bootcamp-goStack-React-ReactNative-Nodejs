import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/background.jpeg'

import Header from './components/Header'

function App() {

  const [projects, setProjects] = useState([`Project 1 ${Date.now()}`, `Project 2 ${Date.now()}`])

  const handleAddProject = () => {
    setProjects([...projects, `Project ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects" />

      <img width={150} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>
    </>
  )
}

export default App