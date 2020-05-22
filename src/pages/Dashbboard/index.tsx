import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Gitghub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/20324935?s=460&u=252e93639dae9e6e666547a2856144fc3fea3fcb&v=4"
            alt="Caio Felipe"
          />
          <div>
            <strong>github-explorer</strong>
            <p>Project to explore Github projects and issues made in ReactJS using Typescript</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/20324935?s=460&u=252e93639dae9e6e666547a2856144fc3fea3fcb&v=4"
            alt="Caio Felipe"
          />
          <div>
            <strong>github-explorer</strong>
            <p>Project to explore Github projects and issues made in ReactJS using Typescript</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/20324935?s=460&u=252e93639dae9e6e666547a2856144fc3fea3fcb&v=4"
            alt="Caio Felipe"
          />
          <div>
            <strong>github-explorer</strong>
            <p>Project to explore Github projects and issues made in ReactJS using Typescript</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
