import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

import "./Counter.css";

const Counter = ({ counter, PLUS, MINUS, MULTIPLE, ZERO }) => {
  return (
    <div className="container">
      <h1 className="counter">{counter}</h1>
      <button className="btn btn-success plus" onClick={PLUS}>
        +
      </button>
      <button className="btn btn-success minus" onClick={MINUS}>
        -
      </button>
      <button className="btn btn-success minus" onClick={MULTIPLE}>
        *
      </button>
      <button className="btn btn-success" onClick={ZERO}>
        zero
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => {
  const { PLUS, MINUS, MULTIPLE, ZERO } = bindActionCreators(actions, dispatch);
  return {
    PLUS,
    MINUS,
    ZERO,
    MULTIPLE: () => MULTIPLE(3)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
