import React, { Component, Fragment } from 'react';
import Title from '../../component/title/title';
import Nav from '../../component/nav/nav';
import { connect } from 'react-redux';

class Index extends Component{
    render() {
        return (
            <Fragment>
                <Title/>
                <Nav/>
                <div>这是首页~~</div>
            </Fragment>
        )
    }
};



export default Index;