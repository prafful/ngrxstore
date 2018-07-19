export const alltodosfromreducer = (state=[] , action) => {

    switch(action.type){

        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id != action.payload.id)    
        case 'TOGGLE':
            return state.map( todo => {
                if(todo.id === action.payload.id){
                    return Object.assign({}, todo, {
                                                    status: !todo.status
                                                    })
                }
                return todo
            })    
        default:
            return state

    }



}