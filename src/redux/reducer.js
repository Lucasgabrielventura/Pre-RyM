const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case "ADD_FAVORITE":
        return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        }
    case "DELETE_FAVORITE":
        let characterCopy = state.myFavorites.filter((characters) => characters.id !== action.payload)
        return{
            ...state,
            myFavorites: characterCopy
        }   
        default: 
            return{
                ...state
            }
        
    }
}

export default reducer;