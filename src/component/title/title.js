import React, { Component } from 'react';
import { connect } from 'react-redux';


class Title extends Component{
    render() {
        return (
            <div>{ this.props.title }</div>
        )
    }
};

const a = (state) => {
    return {
        title:state.titleStore.title
    }
};


export default connect(a, null)(Title);