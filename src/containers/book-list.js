import React, { Component } from 'react'
import { connect } from 'react-redux'//glue between react and redux

class BookList extends Component {
 renderLists() {
      
        this.props.books.map( (book)=> {
    console.log(book.title);
            
            return (
                <li className="list-group-item">
                hello
             </li>
            );
        });
    }
    render() {
 
        return (
            <ul className="list-group col-sm-4">
                {this.renderLists()}
                This is ul            
            </ul>
        )
    }
    
   
}

function mapStateToProps(state) {//application state connection there between redux and react
    return  { 
        books: state.books
    }

}
export default connect(mapStateToProps)(BookList);//connect function and Component and produces container and container is a component which is aware of states 
