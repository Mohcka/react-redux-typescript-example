import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import {} from "../../components/todo/todo-item"

interface TodoContainerState {
  todoInput: string;
}

interface TodoContainerProps {
  count: number;
  todoList: string[];
  addTodo: (item: string) => object;
  deleteTodo: (idx: number) => object;
}

class TodoContainer extends React.Component<
  TodoContainerProps,
  TodoContainerState
> {
  constructor(props: TodoContainerProps) {
    super(props);

    this.state = {
      todoInput: ""
    };
  }

  private handleTextUpdate = (e: any): void => {
    this.setState({
      todoInput: e.target.value
    });
  };

  private handleButtonClick = (): void => {
    this.props.addTodo(this.state.todoInput);
    this.setState({
      todoInput: ""
    });
  };

  handleDeleteButtonClick = (idx: number): void => {
    console.log("Deleting", idx);
    this.props.deleteTodo(idx);
  };

  render() {
    let todoJSX: JSX.Element[] | JSX.Element;

    if (!this.props.todoList.length) {
      todoJSX = <p>No Todos</p>;
    } else {
      todoJSX = this.props.todoList.map((item: string, idx: number) => {
        return <>Item</>;
      });
    }

    return (
      <div>
        {todoJSX}
        <input
          onChange={this.handleTextUpdate}
          placeholder={"New To Do Here"}
          value={this.state.todoInput}
        />
        <button onClick={this.handleButtonClick}>Add To Do</button>
      </div>
    );
  }
}

const mapStateToProps = (store: RootState) => {
  return {
    count: store.todo.count,
    todoList: store.todo.list
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addTodo: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
  deleteTodo: (idx: number) =>
    dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
