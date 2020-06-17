import React from 'react'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="Home page">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Home" >
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Lista 1</li>
          <li>Lista 2</li>
        </ul>
      </Header>
    </>
  )
}

export default App