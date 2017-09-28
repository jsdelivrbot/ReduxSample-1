import React,{Component} from 'react'
renderLists()
{
    this.props.books.map(function(book){
return(
    <li key={nook.title} className="list-group-item">{book.title}</li>
)
    });
}
export default class BookLits extends Component()
{
    render(){
        return(
            <ul>
            {this.renderLists()}
            </ul>
        )
    }
}