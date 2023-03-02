

export const addFavorite = (character) => {
return{
    type: "ADD_FAVORITE",
    payload: character
    }
}

export const deleteFavorite = (id) => {
return{
    type: "DETELE_FAVORITE",
    payload: id
}
}