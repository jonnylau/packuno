import Weather from './Weather.jsx';
import { connect } from 'react-redux';
import { showCurrent } from './actions.jsx';


const mapDispatchToProps = (dispatch) => ({
    showCurrent: () => {
      dispatch(showCurrent('CURRENT'))
    },
  });

const ShowCurrent = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;

