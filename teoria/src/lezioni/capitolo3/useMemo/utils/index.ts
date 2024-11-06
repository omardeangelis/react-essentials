function* generateTodo(max: number) {
  let i = 0
  while (true) {
    if (i === max) break
    yield {
      id: i++,
      title: `todo ${i}`,
      completed: i % 3 === 0,
      inProgress: i % 5 === 0,
    }
  }
}

export const initialTodos = Array.from(generateTodo(10000))
