import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';
const mapReduxStateToReactProps = (state) => {
    return {
        number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(DisplayNumber);