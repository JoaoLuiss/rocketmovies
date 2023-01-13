import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

	// resets
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	// dimensionamento dinâmico
	:root {
		font-size: 6.25%;
	}

	/* Cola:
		font-family: 'Roboto', sans-serif;
		font-family: 'Roboto Slab', serif; 
	*/

	// cores globais padrão de fonte e background
	body {
		width: 100%;
		height: 100vh;
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
		color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
	}

	// padronizando os elementos de texto
	body, input, button, textarea {
		font-family: 'Roboto Slab', serif;
		font-size: 16rem;
		outline: none;
		border: 0;
	}

	// padronizando a "clickabilidade"
	button, a {
		cursor: pointer;
		transition: filter .2s;
		text-decoration: none;

		&:hover {
			filter: brightness(.4);
		}
	}

	/* width */
	::-webkit-scrollbar {
      width: 16px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 8px ${({ theme }) => theme.COLORS.BACKGROUND_600 }; 
      border-radius: 10px;
			/* background:  ${({ theme }) => theme.COLORS.GRAY_500 };  */
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background:  ${({ theme }) => theme.COLORS.PINK }; 
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background:  ${({ theme }) => theme.COLORS.PINK }80; 
    }
	
`;
