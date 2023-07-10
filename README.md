# <p align="center">AKINITA</p>

Akinita é um site que está sendo projetado para gerenciar transações e mostrar os imóveis cadastrados na Imobiliária. Essa imobiliária pediu para que fosse feito um site para que pudesse facilitar a administração dos seus negócios, já que atualmente o controle é feito no papel e ela não deseja utilzar serviços disponiveis no mercado para isso, preferindo um customizado.<br>

### Funcionalidades:
1. Gerenciar Imovel:
   - cadastrar (corretor)
   - visualizar (corretor/usuario, comprador)
   - editar (corretor)
   - apagar (corretor)
2. Gerenciar Transações:
   - cadastrar (corretor)
   - visualizar (corretor, comprador(futuro))
   - editar (corretor)
   - apagar (corretor)<br>
3. Gerenciar Comprador:
   - cadastrar (corretor/usuário)
   - visualizar (corretor, comprador )
   - editar (corretor, comprador )
   - deletar (corretor, comprador) (exclusão lógica?)<br>

### Usuários previstos:
- Corretor
- Comprador
- Usuário

### Estrutura de diretório:
- Documents
- Source
- Tests

### Commits:
#### Regras de commit
- feat: Uma nova feature
- fix: Correções de bugs
- docs: Alteração na documentção
- refactor: Refatorações que não são feature, nem melhoria

### Práticas a seguir na codificação:
- Nomes: Ao dar nomes a funções ou variáveis usar nomes intuitivos e de acordo com propósito da variavel ou função
- Funções: As funções devem ser pequenas com até 15 linhas e devem fazer apenas uma coisa
- Responsabilidade: As funções devem ser únicas ou seja, não devem ter duas funções que realizam as mesmas coisas
- Comentários: Se for comentar o código seja direto e breve com no máximo 30 caracteres, comente só se for realmente necessário
- Erros: Faça os tratamentos de exceções para que o seu código tenha o mínimo de erros possíveis
- Testes: Ao adcionar uma nova função ao sistema faça testes e verifique se ela está funcionando como deveria


## TECNOLOGIAS UTILIZADAS
1. FrontEnd:
   - HTML 5
   - CSS 3
   - BOOTSTRAP 3.0
   - JavaScript
   - Vue 3
2. BackEnd:
   - NodeJs 18.16.1
3. Banco de Dados:
   - PostgreSQL 15.3-2
4. Servidor:
   - Express
