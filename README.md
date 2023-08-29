 # Next.js + Styled Components + TypeScript Boilerplate
 
Este é um repositório boilerplate criado por mim para iniciar projetos com Next.js, Styled Components e TypeScript. Ele foi desenvolvido para fornecer uma base sólida, recomendada especialmente para iniciantes, que desejam começar seus projetos com essas tecnologias populares. A estrutura de projeto foi cuidadosamente criada para facilitar a componentização, organização e início de novos projetos com Next.js.

O CSS base já foi atualizado com o Reset CSS mais recente, garantindo uma experiência de desenvolvimento consistente e livre de estilos indesejados.
 
Vale ressaltar que este boilerplate contém arquivos com códigos básicos que uso em meus projetos pessoais, então pode ser que não sirva como uma luva para o seu caso. Ficarei feliz em receber sugestões de mudanças por via de issues e pull requests.
 ## Tecnologias incluídas
 
 - [Next.js](https://nextjs.org/): Um framework React para criação de aplicativos web modernos e eficientes.
 - [Styled Components](https://styled-components.com/): Uma biblioteca para estilização de componentes React através de CSS-in-JS.
 - [TypeScript](https://www.typescriptlang.org/): Uma linguagem de programação que adiciona tipagem estática ao JavaScript.
 - [ESLint](https://eslint.org/): Ferramenta de análise de código para manter um código consistente e de alta qualidade.
 - [Prettier](https://prettier.io/): Formatador de código para manter o estilo do código consistente em todo o projeto.
 
 ## Como começar
 
 Para começar a usar este boilerplate, siga estas etapas:
 
 1. Clone o repositório:
 
 ```bash
 git clone https://github.com/seu-usuario/nome-do-repositorio.git
 ```
 
 2. Acesse a pasta do projeto:
 
 ```bash
 cd nome-do-repositorio
 ```
 
 3. Instale as dependências:
 
 ```bash
 npm install
 # ou
 yarn install
 ```
 
 4. Execute o servidor de desenvolvimento:
 
 ```bash
 npm run dev
 # ou
 yarn dev
 ```
 
 Agora você pode acessar o aplicativo em `http://localhost:3000` no seu navegador.
 
 ## Estrutura Básica de diretórios
 
 ```
 .
 ├── lib/
 │   └── registry.tsx
 ├── src/
 │   ├── assets/
 │   │   ├── components/
 │   │   ├── images/
 │   │   └── pages/
 │   │       └── Home.tsx
 │   ├── context/
 │   │   └── Theme.tsx
 │   ├── pages/
 │   │   ├── _app.tsx
 │   │   ├── _document.tsx
 │   │   └── index.tsx
 │   ├── styles/
 │   │   └── GlobalStyles.ts
 │   ├── theme/
 │   │   └── theme.ts
 │   ├── types/
 │   │   ├── props.d.ts
 │   │   └── theme.d.ts
 │   └── utils/
 │       └── api.ts
 └──     └── hooks.ts 
 
 ```
 
 ## Scripts disponíveis
 
 - `dev`: Inicia o servidor de desenvolvimento.
 - `build`: Cria uma versão otimizada para produção do aplicativo.
 - `start`: Inicia o servidor em produção.
 - `lint`: Executa o ESLint para verificar problemas no código.
 
 ## Contribuindo
 
 Se você deseja contribuir com melhorias, correções de bugs ou novos recursos, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**. Sua contribuição será muito bem-vinda!
 
 ## Licença
 
 Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
 