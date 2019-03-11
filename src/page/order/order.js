import React, { Component, Fragment } from 'react';
import Title from '../../component/title/title';
import Nav from '../../component/nav/nav';

class Order extends Component{
    render() {
        return (
             <Fragment>
                <Title/>
                <Nav/>
                <div>这是订单页~~</div>
            </Fragment>
        )
    }
};

export default Order;