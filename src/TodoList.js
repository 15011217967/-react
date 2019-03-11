import React, { Component, Fragment } from 'react';
// import store from './store';
import { connect } from 'react-redux';


class TodoList extends Component {

    render(){
        return (
            <Fragment>
                <input type="text" onChange={ this.props.changeInputValue } value={ this.props.inputValut }/>
                <input type="button" onClick={ this.props.addList.bind(this, this.props.inputValut) } value="提交"/>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li onClick={ this.props.deleteItem.bind(this, index) } key={ index }>{ item }</li>;
                        })
                    }
                </ul>
            </Fragment>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        inputValut: state.header.inputValut,
        list:state.header.list
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            let action = {
                type: 'change_input_value',
                inputValut: e.target.value
            }
            dispatch(action);
        },
        addList(inputValut) {
            console.log(inputValut)
            if (!inputValut) return;
            let action = {
                type: 'add_list',
                inputValut: inputValut
            }
            dispatch(action);
        },
        deleteItem(index) {
            let action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
