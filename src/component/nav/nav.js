import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render() {
        return (
            <ul>
                {

                    this.props.navList.map((item, index) => {
                        return (
                            <Link to={ item.path } key={ index }>
                                <li onClick={ this.props.fnTitle.bind(this, item.navName) }>{ item.navName + 'nav' }</li>
                            </Link>
                        )
                    })
                }
            </ul>
        )
    }
};

const a = (state) => {
    return {
        navList:state.navStore.navList
    }
}

const b = (dispacth) => {
    return {
        fnTitle(name) {
            const action = {
                type:'qh_title',
                title:name
            }
            dispacth(action);
        }
    }
}

export default connect(a, b)(Nav);