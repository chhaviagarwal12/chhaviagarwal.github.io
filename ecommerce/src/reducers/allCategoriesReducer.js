export default (state=[],action)=>{
    switch(action.type){
        case "ALL_CATEGORIES":
              return action.payload;
    
        default:
            return state
    }
}