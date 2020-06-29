import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import logo from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'

interface GithubRepository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('')
  const [repositories, setRepositories] = useState<GithubRepository[]>([])

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    const response = await api.get<GithubRepository>(`repos/${newRepository}`)

    const repository = response.data

    setRepositories([...repositories, repository])

    setNewRepository('')
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios do github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepository}
          onChange={event => setNewRepository(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="testse">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
