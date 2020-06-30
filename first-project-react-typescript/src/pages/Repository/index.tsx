import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import logo from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string
}

interface GithubRepository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

interface GithubIssue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  const [repository, setRepository] = useState<GithubRepository | null>(null)
  const [issues, setIssues] = useState<GithubIssue[]>([])

  useEffect(() => {
    const loadRepository = async (): Promise<void> => {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get<GithubRepository>(`repos/${params.repository}`),
        api.get<GithubIssue[]>(`repos/${params.repository}/issues`),
      ])

      setRepository(repositoryResponse.data)
      setIssues(issuesResponse.data)
    }

    loadRepository()
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          // utilizado a para que seja aberto um link externo
          <a key={issue.id} target="_blank" href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
