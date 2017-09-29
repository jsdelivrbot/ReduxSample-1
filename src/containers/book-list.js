import React, { Component } from 'react'
import ReactDom from 'react-dom'


import { connect } from 'react-redux'//glue between react and redux

class BookList extends Component {
    render() {
        debugger;
        console.log(this.props.books)
        return (
            <div>
                {
                    this.props.books.map((book, index) => {
                        console.log(book.title);
                        return (
                            <li key={index} >
                                {book.title}
                            </li>
                        );
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {//application state connection there between redux and react
    return {
        books: state.books
    }

}
export default connect(mapStateToProps)(BookList);//connect function and Component and produces container and container is a component which is aware of states 
