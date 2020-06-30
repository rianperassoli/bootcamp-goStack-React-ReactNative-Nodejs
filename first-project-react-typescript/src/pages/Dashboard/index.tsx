import React, { useState, FormEvent, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import logo from '../../assets/logo.svg'
import { Title, Form, Repositories, Error } from './styles'

interface GithubRepository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('')
  const [newRepository, setNewRepository] = useState('')
  const [repositories, setRepositories] = useState<GithubRepository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@githubExplorer:repositories',
    )

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories),
    )
  }, [repositories])

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    if (!newRepository) {
      setInputError('Digite autor/nome do repositório')
      return
    }

    try {
      const response = await api.get<GithubRepository>(`repos/${newRepository}`)

      const repository = response.data

      setRepositories([...repositories, repository])

      setNewRepository('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios do github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepository}
          onChange={event => setNewRepository(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
