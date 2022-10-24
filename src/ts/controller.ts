// import view from './view'
import Model from './Model'
import * as view from './view'

/**
 * Initialization
 */
const Pessoa = new Model()
const pessoas = Pessoa.getPessoas()
view.renderPessoas(pessoas)

/**
 * Add pessoa
 */
view.elements.submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  const newNome = view.elements.nomeInputBox.value 
  
  Pessoa.addPessoa(newNome)
  const pessoas = Pessoa.getPessoas()
  const newPessoa = pessoas[pessoas.length - 1]

  // append new pessoa
  view.renderPessoa(newPessoa)
})

/**
 * Remove pessoa
 */
view.elements.list.addEventListener('click', (event) => {
  const element = event.target as HTMLElement

  if (element.classList[0] === 'delete') {
    const pessoa = element.parentElement
    Pessoa.deletePessoa(Number(pessoa.id))
    view.removePessoa(pessoa)
  }
})

/**
 * Toggle pessoa
 */
view.elements.list.addEventListener('click', (event) => {
  const element = event.target as HTMLInputElement

  if (element.closest('.checkbox')) {
    const pessoa = element.parentElement
    Pessoa.togglePessoa(Number(pessoa.id))
    view.markSiblingComplete(element)
  }
})

/**
 * Update pessoa
 */
view.elements.list.addEventListener('focusout', (event) => {
  const element = event.target as HTMLElement

  if (element.classList[0] === 'editable') {
    const pessoa = element.parentElement
    const updatedText = element.textContent
    Pessoa.editPessoa(Number(pessoa.id), updatedText)
  }
})
