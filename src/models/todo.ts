class Todo {
  // ts syntax requires property types to be set right away vs. js where its not needed
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
