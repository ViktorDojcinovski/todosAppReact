const TodosFooter = (props) => {
  return (
    <>
      <section>
        <h3>Actions</h3>
        <button onClick={props.onClickCompletedHandler}>
          Mark all completed
        </button>
        <button onClick={props.onClickClearHandler}>Clear completed</button>
      </section>
    </>
  );
};

export default TodosFooter;
