import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <div>
        <a href="#"><FiArrowLeft/>Voltar</a>
      </div>

      <Form>
        <Avatar>
          <img src="https://www.github.com/joaoluiss.png" alt="Foto de usuário" />
          <label htmlFor="profile-picture">
            <FiCamera/>
            <input type="file" name="profile-picture" id="profile-picture" />
          </label>
        </Avatar>

        <Input icon={FiUser} type='text' placeholder='Nome' />
        <Input icon={FiMail} type='text' placeholder='E-mail' />
        <Input icon={FiLock} type='password' placeholder='Senha atual' />
        <Input icon={FiLock} type='password' placeholder='Nova senha' />

        <Button title='Salvar' />
      </Form>

    </Container>
  )
}