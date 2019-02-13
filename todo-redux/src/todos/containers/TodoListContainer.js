import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodos } from '../selectors';
import { todoRemove } from '../actions';

function mapStateToProps(state) {
  return {
    todos: selectTodos(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete(todo) {
      dispatch(todoRemove(todo));
    },
  };
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export {
  TodoListContainer,
}