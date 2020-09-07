import React, {PureComponent} from 'react';
import TryList from './TryList';

class Try extends PureComponent {

    render() {
        return (
            <>
                <ul>
                    {this.props.tries.map((v, idx) => <TryList value={v} index={idx}></TryList> )}
                </ul>
            </>
        );
    }
}

export default Try;