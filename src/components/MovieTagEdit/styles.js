import styled from 'styled-components';

export const Container = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 16px;
	background-color: ${({ theme, isNew }) =>
		isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

	border: ${({ theme, isNew }) =>
		isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

	padding: 16px;
	border-radius: 10px;

	> input {
		display: block;
// AQUI O WIDTH SÓ FUNCIONA COM px, MEDIDAS RELATIVAS NÃO ESTÃO FUNCIONANDO, NÃO SEI PQ
		max-width: fit-content; 

		background: transparent;
		color: ${({ theme }) => theme.COLORS.WHITE};
		font-size: 16rem;
	}

	> button {
		background: transparent;
		color: ${({ theme }) => theme.COLORS.PINK};
	}
`;
