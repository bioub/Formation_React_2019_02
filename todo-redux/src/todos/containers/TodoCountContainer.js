import { connect } from 'react-redux';
import { TodoCount } from '../components/TodoCount/TodoCount';
import { selectTodoCount } from '../selectors';

function mapStateToProps(state) {
  return {
    todoCount: selectTodoCount(state),
  };
}

const TodoCountContainer = connect(mapStateToProps)(TodoCount);

export {
  TodoCountContainer,
}