import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {buyMobile} from "../Redux/Mobile/MobileActions";


const HooksContainer = () => {
    const numOfMobs = useSelector (state => state.numOfMobiles)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Mobiles:{numOfMobs} </h2>
            <button onClick={() => dispatch(buyMobile())}>Decrement</button>

        </div>
    );
};

export default HooksContainer;