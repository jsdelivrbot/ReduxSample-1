import React, { Component } from 'react'
import  {  selectBook } from '../actions/index'
import { connect } from 'react-redux'//glue between react and redux
import { bindActionCreators } from 'redux'

class BookList extends Component {
    render() {
        console.log(this.props.books)
        return (
            <div>
                {
                    this.props.books.map((book, index) => {
                        console.log(book.title);
                        return (
                            <li key={index} 
                            onClick={()=>
                       
                               alert(this.props.selectBook(book))                                 
                            }>
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
    debugger
    return {
        
        books: state.books  
    }

}
function mapDispatchToProps(dispatch) {//
    return bindActionCreators({selectBook:selectBook},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);//connect function and Component and produces container and container is a component which is aware of states 
