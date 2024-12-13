# desafiofullstackfront

> Descrição:
#### Front-end desenvolvido com vue.js para gerenciamento de usuários. Onde cada usuário poderá ter um ou mais números de telefone. A listagem de usuários contém paginação (como ilustrado na imagem abaixo) quando a lista contém mais de uma página. Para os formulários foi aplicado o Design Pattern (padrão de Design) Builder pattern (padrão do construtor) que reduz o custo e melhora a performance. Além disso, também foi aplicado o design pattern adapter (padrão do adaptador) que faz adaptação da responsta vinda da api que facilita ao front na renderização dos dados. Também foram utilizadas animações para tornar a experiência mais leve e dinâmica para o usuário, além da responsividade (capacidade de adaptação) das telas que possibilita a utilização do site em aparelhos com resoluções distintas. Foram feitos alguns testes unitários simples mas que ajudaram bastante, já que apontaram bugs que não eram vistos a olho nu e que nem a IDE alertava, como por exemplo algumas tipagens e até imports.

#### Captura de tela da lista de usuários:
![Captura de tela 2024-12-13 0408324](https://github.com/user-attachments/assets/0f458f54-54c9-471b-9591-237ca442ae70)

#### Captura de tela do formulário de cadastro:
![Captura de tela 2024-12-13 0403214](https://github.com/user-attachments/assets/bd12bace-f4b6-46a7-83f7-d0baee120693)

#### Captura de tela de detalhes do usuário:
![Captura de tela 2024-12-13 0401073](https://github.com/user-attachments/assets/faffdc3d-5e28-45dd-93b2-3d19abfc0806)

#### Captura de tela de detalhes do usuário em resolução para dispositivo mobile:
![Captura de tela 2024-12-13 0402324](https://github.com/user-attachments/assets/09af55e3-e785-40d7-8b39-8efc6929b98d)

#### Captura de tela de edição:
![Captura de tela 2024-12-13 0359112](https://github.com/user-attachments/assets/52eed000-6d2c-49f7-a165-2681b10fdc27)

#### Captura de tela dos testes:
![Captura de tela 2024-12-13 0346521](https://github.com/user-attachments/assets/3dc266b4-54d6-49cf-aa3b-0c7405adf9ef)

> Execução:

#### Obs: é importante lembrar, que para que os jobs de email funcionem corretamente e sincronizado com o front-end, execute o comando abaixo:
~~~~
php artisan queue:work --tries=3
~~~~
#### Também não se esqueça de iniciar os jobs pela rota: api/job

#### Após clonar o projeto, deve-se instalar todas as dependencias:
~~~~
npm i
~~~~
#### Em caso de erro:
~~~~
npm i --force
~~~~
#### Se o .env estiver ausente, crie um na raiz do projeto e configure desta forma:
~~~~
VUE_APP_BACKEND_URL=http://localhost:8000/api
VUE_APP_BACKEND_URL_PATH_STORAGE=http://localhost:8000/storage/
~~~~
#### Por último, é só executar o comando abaixo e o site estará no ar:
~~~
npm run serve
~~~
#### Caso queira executar os testes:
~~~~
npm run test
~~~~

#### Para acessar o app: http://localhost:8080/
