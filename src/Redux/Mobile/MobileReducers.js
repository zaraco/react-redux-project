import {BUY_MOBILE} from './MobileTypes';


const initialState = {
    numOfMobiles: 50
}

const MobileReducer = (state = initialState, action)=> {
    switch (action.type) {
        case BUY_MOBILE: return {
            ...state,
            numOfMobiles: state.numOfMobiles -1
        }
        default: return state

    }
}

export default MobileReducer;

