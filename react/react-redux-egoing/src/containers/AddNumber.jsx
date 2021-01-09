import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onClickPlusBtn : (size) => {
            dispatch({
                type: 'INCREMENT',
                size: size
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(AddNumber);