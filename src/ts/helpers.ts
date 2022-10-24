export interface Pessoa {
  id: number
  nome: string
  complete: boolean
}

export const areUniqueIds = (arr: Pessoa[]) => {
  const uniqIds: number[] = []

  arr.forEach(({ id }) => {
    if (uniqIds.includes(id)) {
      return false
    }

    uniqIds.push(id)
  })

  return true
}
