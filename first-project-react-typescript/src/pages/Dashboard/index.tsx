import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios do github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="testse">
          <img
            src="https://avatars2.githubusercontent.com/u/4731098?s=460&u=eeca98d6254c745fc63fd8e70a702d47f95d2edf&v=4"
            alt="Rian Perassoli"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="testse">
          <img
            src="https://avatars2.githubusercontent.com/u/4731098?s=460&u=eeca98d6254c745fc63fd8e70a702d47f95d2edf&v=4"
            alt="Rian Perassoli"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="testse">
          <img
            src="https://avatars2.githubusercontent.com/u/4731098?s=460&u=eeca98d6254c745fc63fd8e70a702d47f95d2edf&v=4"
            alt="Rian Perassoli"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
