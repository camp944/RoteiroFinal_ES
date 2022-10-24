import { Pessoa } from './helpers'

export const elements = {
  nomeInputBox: document.querySelector('#inputNome') as HTMLInputElement,
  cpfInputBox: document.querySelector('#inputCpf') as HTMLInputElement,
  submitButton: document.querySelector('#submit') as HTMLButtonElement,
  list: document.getElementsByTagName('ul')[0] as HTMLElement,
  listItemTemplate: document.querySelector(
    '#listItemTemplate'
  ) as HTMLTemplateElement,
}

export const clearPessoas = () => {
  elements.list.innerHTML = ''
}

export const renderPessoa = (Pessoa: Pessoa) => {
  const { id, complete, nome } = Pessoa
  const listItemTemplate = document.importNode(
    elements.listItemTemplate.content,
    true
  )
  const listItemElement = listItemTemplate.querySelector(
    '.list-item'
  ) as HTMLElement
  const checkboxElement = listItemTemplate.querySelector(
    '.checkbox'
  ) as HTMLInputElement
  const textElement = listItemTemplate.querySelector('.editable') as HTMLElement

  listItemElement.id = id.toString()
  checkboxElement.checked = complete
  textElement.textContent = nome 
  

  elements.list.append(listItemTemplate)
}

export const renderPessoas = (pessoas: Pessoa[]) => {
  pessoas.forEach(renderPessoa)
}

export const removePessoa = (element: HTMLElement) => {
  element.parentElement.removeChild(element)
}

export const markSiblingComplete = (element: HTMLInputElement) => {
  element.parentElement.children[1].classList.toggle('complete')
}
