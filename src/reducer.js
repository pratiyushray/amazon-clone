export const initialState={
    basket:[],
};

//Selector
export const getBasketTotal =(basket)=> basket?.reduce((amount,item)=>item.price+amount,0);

const reducer =(state,action)=>{
    // console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex((basketItem)=> basketItem.id===action.id);
            let newBasket=[...state.basket];
            if (index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(`Can't remove product (id:-${action.id}) as its not in the basket!`);
            } 

            return {
                ...state,
                basket:newBasket
            }


            // return {

            //     //THE BELOW CODE WILL REMOVE ALL THE OCCURANCE OF THAT ELEMENT OF ID BUT WE JUST HAVE TO REMOVE THAT SINGLE ELEMENT
            //     // ...state,
            //     // basket: state.basket.filter(item=>item.id!==action.id)
            // }
        default:
            return state;
    }
};

export default reducer;