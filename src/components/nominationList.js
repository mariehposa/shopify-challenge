import {connect} from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

export const NominationList = (props) => {
    const { astate } = props;

    return (
        <div>
            <p>{astate.text}</p>
        </div>
    )
}

export default connect (
    state => state,
    actionCreators
)(NominationList)