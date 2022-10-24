import { Pessoa } from './helpers'

class Model {
  pessoas: Pessoa[]

  constructor() {
    this.pessoas = [
      { id: 1, nome: 'Learn Typescript',cpf:'98765432101', complete: false },
      { id: 2, nome: 'Walk your dog',cpf:'12345678900', complete: false },
    ]
  }

  addPessoa(newNome: string ) {
    this.pessoas.push({
      id: this.pessoas.length > 0 ? this.pessoas[this.pessoas.length - 1].id + 1 : 1,
      nome: newNome,
      complete: false,
    })
  }

  deletePessoa(id: number) {
    const todoExists = this.pessoas.find((todo) => todo.id === id)
    if (!todoExists) {
      return
    }

    const newTodos = this.pessoas.filter((todo) => todo.id !== id)
    this.pessoas = newTodos
  }

  togglePessoa(id: number) {
    const newTodos = this.pessoas.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    this.pessoas = newTodos
  }

  editPessoa(id: number, updatedText: string) {
    const newTodos = this.pessoas.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: updatedText,
        }
      }

      return todo
    })

    this.pessoas = newTodos
  }

  getPessoas() {
    return this.pessoas
  }

  getLength() {
    return this.pessoas.length
  }
}

export default Model
