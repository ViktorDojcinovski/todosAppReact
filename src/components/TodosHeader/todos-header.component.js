import withColor from "../../hocs/withColor.hoc";

const TodosHeader = ({ ...props }) => {
  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={onChangeHandler}
        onKeyUp={onKeyUpHandler}
      />
    </div>
  );
};

export default TodosHeader;
