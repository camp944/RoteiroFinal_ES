import Model from '../js/model'
import { areUniqueIds } from '../js/helpers'

describe('Testing Model', () => {
  test('addTodo method adds an extra todo item to the todos list', () => {
    const model = new Model()
    const originalLength = model.getLength()
    model.addTodo('Hello World!')

    expect(originalLength + 1).toBe(model.getLength())
  })

  test(`addTodo method's new item's id should be unique`, () => {
    const model = new Model()
    // deletes all the initial todos
    model.deleteTodo(1)
    model.deleteTodo(2)
    model.addTodo('First item')
    model.addTodo('Second item')

    expect(areUniqueIds(model.getTodos())).toBe(true)
  })

  test(`deleteTodo method doesn't remove a todo with false id`, () => {
    const model = new Model()
    const originalLength = model.getLength()
    model.deleteTodo(10)

    expect(originalLength).toBe(model.getLength())
  })

  test(`deleteTodo method removes a todo`, () => {
    const model = new Model()
    const originalLength = model.getLength()
    model.deleteTodo(1)

    expect(originalLength - 1).toBe(model.getLength())
  })

  test(`toggleTodo method toggles a todo`, () => {
    const model = new Model()
    const fixture = [
      { id: 1, text: 'Run a marathon', complete: false },
      { id: 2, text: 'Plant a garden', complete: true },
    ]

    model.toggleTodo(2)
    expect(model.getTodos()).toStrictEqual(fixture)
  })

  test(`editTodo method should update the todo's text`, () => {
    const model = new Model()
    const fixture = [
      { id: 1, text: 'Run a marathon', complete: false },
      { id: 2, text: 'Interview for a job', complete: false },
    ]

    model.editTodo(2, 'Interview for a job')
    expect(model.getTodos()).toStrictEqual(fixture)
  })
})
