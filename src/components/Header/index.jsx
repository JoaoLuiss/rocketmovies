import { FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input'

import { Container } from './styles'

export function Header() {
  return (
    <Container>

      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>

      <div>
        <div>
          <h3>User Test</h3>
          <span>sair</span>
        </div>
        <img src="https://www.github.com/joaoluiss.png" alt="Foto do usuário" />
      </div>
    </Container>
  )
}