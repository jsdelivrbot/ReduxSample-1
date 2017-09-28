import React, { Component } from 'react'
import ReactDom  from 'react-dom'


import { connect } from 'react-redux'//glue between react and redux

class BookList extends Component {
    constructor(props)
    {     
        super(props);
        this.renderLists= this.renderLists.bind(this)
    }
    componentDidMount(){
debugger
    }
 renderLists() {
      /*
        this.props.books.map( (book,index)=> {
    console.log(book.title);            
            return (
                <li key={index} className="list-group-item">
             {book.title}
             </li>
            );
        });
        */
    }
    render() {
   debugger;
   console.log(this.props.books)
        return (

          <div>
          <h3>Hello React</h3>
            <ul>               
                {
                    this.props.books.map( (book,index) => {   
                        console.log(book)  ;
                        console.log(book.title);                                      
                    <li key={index}>
                      {index}{book.title}
                    </li>
                    })
                }       
            </ul>
            </div>
        )
    }
    
   
}

function mapStateToProps(state) {//application state connection there between redux and react
    debugger;
    return  { 
        books: state.books
    }

}
export default connect(mapStateToProps)(BookList);//connect function and Component and produces container and container is a component which is aware of states 
