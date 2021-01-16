import {connect} from 'react-redux';
import * as actionCreators from '../redux/movies/actionCreators';

export const NominationList = (props) => {
    const { state } = props;

    return (
        <div>
            <p>{state}</p>
        </div>
    )
}

export default connect (
    state => state,
    actionCreators
)(NominationList)