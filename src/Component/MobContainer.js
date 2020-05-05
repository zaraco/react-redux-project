import React from 'react';
import {buyMobile} from "../Redux/Mobile/MobileActions";
import {connect} from "react-redux";


const MobContainer = (props) => {
    return (
        <div>
            <h1>Num of Mob - {props.numOfMobiles}</h1>
            <button onClick={props.buyMobile}>Decrement</button>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfMobiles: state.numOfMobiles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMobile: () => dispatch(buyMobile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MobContainer);