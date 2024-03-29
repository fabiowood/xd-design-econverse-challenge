Resumo: Este projeto foi desenvolvido para apresentar a reprodução do design especificado pela Econverse para a aplicação.

Instruções para Acesso ao Projeto:

1 - Realizar um "Clone" do projeto em um diretório local (Git Clone <link do repositório no GitHub>).

2 - Acessar o diretório local do projeto pelo terminal do seu computador.

3 - Inserir os comandos npm install e npm start no terminal, no diretório em que o projeto está instalado localmente.

4 - O usuário será direcionado ao browser automaticamente em: http://localhost:3000

Alguns comentários pontuais:

- Cada componente está separado em um diretório específico, com o seu arquivo .JSX e seu respectivo arquivo .SCSS.

- Toda a aplicação foi desenvolvida em React .js. Dado o objetivo do desafio, utilizei pontualmente a gestão de estados com o React Hooks, nos componentes em que eram necessários.

- Em caso de ampliação do escopo da aplicação, com funcionalidades e páginas distintas, recomendo a migração para o Redux, para obter uma gestão de estados coerente com a expansão de componentes acessando e alterando estados similares.

- Deixei comentadas algumas linhas nos arquivos .SCSS, nos casos em que eu identifiquei um conflito entre as especificações, ou mesmo quando avaliei que a implantação do especificado ficaria bem diferente do Preview da aplicação.

- O arquivo package.json contém todas as dependências e packages utilizados para este projeto, e foi criado a partir do Create React App.

Atenciosamente.

Fabio Madeira.

==================================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
