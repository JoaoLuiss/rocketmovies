import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';

import { Button } from '../../components/Button';

import { Container } from './styles'
import { MovieCard } from '../../components/MovieCard';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header/>
      
      <main>
        <div>
          <h1>Meus filmes</h1>
          <Button 
            title='Adicionar filme' 
            icon={FiPlus}
            onClick={() => navigate('/create-movie')}
          />
        </div>

        <section>
          <MovieCard onClick={() => navigate('/movie-preview')} />
          <MovieCard onClick={() => navigate('/movie-preview')} />
        </section>
      </main>
    </Container>
  )
}