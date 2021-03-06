import React, { useState, useEffect } from 'react'

import './App.css'
import backgroundImage from './assets/background.jpeg'
import api from './services/api'

import Header from './components/Header'

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  const handleAddProject = async () => {
    const response = await api.post('/projects', {
      title: `Project ${Date.now()}`,
      owner: "Rian Perassoli"
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Projects" />

      <img width={250} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>
    </>
  )
}

export default App