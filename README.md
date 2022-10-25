# Clean Architecture utilizando Typescript
## Clean Arquitecture
Clean Arquitecture é uma forma de programar baseada delimitação do código
em camadas para que uma mesma classe não represente uma entidade e possua 
suas interações com os serviços a serem realizados, como ocorre em sistemas 
desenvolvidos a partir do modelo Model-View-Controller, onde entidades interagem com 
serviços através de de classes de controle:

![](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Typescript
O typescript é um pacote de ferramentas disponível para javascript que é amplamente 
utilizados em diversos frameworks como o node.js e que pode ser facilmente instalado 
através do console, após navegar até o diretório da aplicação, utilizando o gerenciador
de pacotes npm e o seguinte comando:
```sh
    npm install typescript --save-dev
```

## Aplicação
Para melhor ilustrar e fixar os tópicos demonstrados a cima, foi criada uma aplicação web, 
utilizando typescript, que possui campos a serem preenchidos para realizar um exemplo de 
cadastro, fictício, de pessoas.
A aplicação é basicamente composta por uma tela inicial index.html e 4 arquivos: 
controller.ts, Model.ts, view.ts e helper.ts, que possuem respectivamente: as funções controle, 
que promevem a interação entre serviço e entidade, a classe que contem os serviços, as funções de 
gerenciamento de tela e por último a entidade que será utilizada como base para o código.
Sendo assim, para que possamos realizar o cadastro de indivíduos, será necessário realizar algumas
mudanças no código que totalizaram 8 passoas ao final deste roteiro.

### PASSO 1:
Será necessário substituir o código presente das linhas 19 a 24 do arquivo ```\src\controller.ts```, 
pelo código abaixo, para que, ao realizar o cadastro de um novo indivíduo, o CPF dele também seja 
coletado na tela.
```ts
const newCpf = view.elements.cpfInputBox.value 
  
if(view.elements.cpfInputBox.value!="" && view.elements.nomeInputBox.value!="")
  {
    Todo.addTodo(newNome,newCpf)
    const pessoas = Todo.getTodos()
    const newPessoa = pessoas[pessoas.length - 1]

    // append new pessoas
    view.renderPessoa(newPessoa)
  }
```
### PASSO 2:
Para que a entidade base do projeto possa registrar o CPF será necessário criar o atributo cpf 
no arquivo ```\src\helper.ts```, como demonstrado abaixo, inserindo esse mesmo código após a linha 3.
```ts
    cpf: string
```
### PASSO 3:
Após inserir o novo atributo, será necessário adicionar um novo parâmetro à função ```addPessoa(newNome: string )``` 
 em ```\src\Model.ts``` para que o cpf possa ser atribuído a uma pessoa. Logo, a função deve ficar da seguinte forma:
```ts
addPessoa(newNome: string,newCPF: string ) {
    this.pessoas.push({
      id: this.pessoas.length > 0 ? this.pessoas[this.pessoas.length - 1].id + 1 : 1,
      nome: newNome,
      cpf: newCPF ,
      complete: false,
    })
  }
```
### PASSO 4:
Para que a tela possa carregar as informações contidas na entidade, será necessário substituir o código da linha 
18 do arquivo ```\src\Model.ts``` pelo disponibilizado abaixo:
```ts
const { id, complete, nome, cpf } = Pessoa
```
e em seguida substituir a linha 33 pela seguinte:
```ts
textElement.textContent = nome + '|' + cpf
```
### PASSO 5:
Por fim, para que o CPF do indivíduo possa ser inserido, deve-se criar um campo na tela para que o usuário da aplicação digite
e em seguida confirme.Logo, deve-se adicionar o código abaixo após a linha 21 do arquivo ```\src\index.html```.
```html
    <label>CPF: </label>
      <input
        class="row"
        style="margin-left: 5px;"
        type="text"
        id="inputCpf"
        placeholder="Inserir CPF"
        name="todo"
      />    
```
### PASSO 6:
Para executar o código, o node.js deve estar instalado na máquina e, após navegar até o diretório raiz da aplicação, deve-se 
executar o comando :
```sh
npm run dev
```
A aplicação deve ser capaz de receber nome e CPF, exibí-los na tela após clicar no botão de submit, deletar cadastros após clicar
no botão delete e traçar uma linha sobre ele ao preencher a checkbox.


<h3>AUTORES<h3>
João Pedro de Almeida Campos
