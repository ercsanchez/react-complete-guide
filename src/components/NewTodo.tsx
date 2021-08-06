const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">
        <input type="text" id="text" />
        <button>Add Todo</button>
      </label>
    </form>
  );
};

export default NewTodo;
