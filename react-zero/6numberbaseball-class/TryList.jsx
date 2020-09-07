import React, {PureComponent} from 'react';

class TryList extends PureComponent {
    // shouldComponentUpdate(nextPorps, nextState, nextContext) {
    //     // 어떤 경우에 렌더링을 새로 할것인지를 정의할 수 있음
    // }

    render() {
        return (
            <>
                <li key={this.props.idx}>{this.props.value.try}<br/>{this.props.value.result}</li>
            </>
        );
    }
}

export default TryList;