import React,{Component} from 'react'
import {connect} from 'react-redux'//glue between react and redux
renderLists()
{
    this.props.books.map(function(book){
return(
    <li key={nook.title} className="list-group-item">{book.title}</li>
)
    });
}
class BookList extends Component()
{
 
    render(){
        console.log(this.props.abc)
        return(
            <ul>
            {this.renderLists()}
            </ul>
        )
    }
}

function mapStateToProps(state){//application state connection there between redux and react
  return{
   books:state.book
  }

}
export default connect(mapStateToProps)(BookList);//connect function and Component and produces container
