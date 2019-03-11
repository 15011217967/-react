import React, { Component, Fragment } from 'react';
import Index from './page/index/index';
import Order from './page/order/order';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Fragment>
                        <Route path='/' exact component={ Index }></Route>
                        <Route path='/order' exact component={ Order }></Route>
                    </Fragment>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;