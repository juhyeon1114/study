import React, {Component} from 'react';

class TryList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <li key={this.props.idx}>{this.props.value}</li>
            </>
        );
    }
}

export default TryList;