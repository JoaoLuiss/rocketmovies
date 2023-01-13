import { FiX, FiPlus } from 'react-icons/fi'

import { Container } from "./styles";

export function MovieTagEdit({ value, isNew, onClick, ...rest}) {
  return (
    <Container isNew={isNew}> {/**/}
      <input 
        type='text'
        value={value}
        readOnly={!isNew}
        placeholder='Novo marcador'
        // size={value ? 35 : 12}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-remove' }
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}