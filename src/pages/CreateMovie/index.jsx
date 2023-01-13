import { Container, Form, BackLine } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { MovieTagEdit } from "../../components/MovieTagEdit";
import { Link, useNavigate } from "react-router-dom";

export function CreateMovie() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />

      <BackLine>
        <Link to={navigate('/')} ><FiArrowLeft />Voltar</Link>
      </BackLine>

      <Form>
        <h1>Novo filme</h1>
        <div class='title-and-rating'>
          <Input type='text' placeholder='Título'/>
          <Input type='number' placeholder='Sua nota (de 0 a 5)'/>
        </div>
        <TextArea placeholder='Observações' />
        <section>
          <h2>Marcadores</h2>
          <div className='tag-manager'>
            <MovieTagEdit value='React' />
            <MovieTagEdit isNew />
          </div>
        </section>

        <div class='buttons'>
          <Button className='remove' title='Excluir'/>
          <Button className='save' title='Salvar'/>
        </div>
        <br />
      </Form>

    </Container>
  )
}