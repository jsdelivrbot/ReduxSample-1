//here reducer will call whenever action is dispatched on call
export default function(state=null,action)
{
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
   }
return state
}