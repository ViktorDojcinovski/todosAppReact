const TodosHeader = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.val}
        onChange={props.onChangeHandler}
        onKeyUp={props.onKeyUpHandler}
      />
    </div>
  );
};

export default TodosHeader;
