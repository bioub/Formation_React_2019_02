import { connect } from 'react-redux';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { todoChange, todoAdd } from '../actions';
import { selectNewTodo } from '../selectors';

function mapStateToProps(state) {
  return {
    newTodo: selectNewTodo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoSubmit(newTodo) {
      dispatch(todoAdd(newTodo));
    },
    onNewTodoChange(newTodo) {
      dispatch(todoChange(newTodo));
    }
  }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export {
  TodoFormContainer,
}