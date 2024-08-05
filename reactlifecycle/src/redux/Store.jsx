import { createStore } from "redux";

function reduce (state = 0, action) {
    switch(action.type){
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        default : return state
    }

}

const store = createStore(reduce);

export default store