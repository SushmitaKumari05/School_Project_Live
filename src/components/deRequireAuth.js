import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

// exporting a function. When we call a function with this component we get another component class that wraps the one we called the function with.
export default function (ComposedComponent) {
  class DeAuthentication extends Component {
  //   static contextTypes = {
  //     router:PropTypes.object
  //   };

    componentDidMount(){
      if(this.props.auth){
        this.props.history.push("/about")
      }
    }
    
    componentDidUpdate(){
      if(this.props.auth){
        this.props.history.push("/about")
      }
    }

    render() {
      // console.log(this.context);
      // {...this.props} passing the whole props which is passed from the other component
      // console.log(this.props.auth);
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    // return { auth: state.authenticate };
    return {auth: state.auth.authenticated}
  }

  return connect(mapStateToProps)(DeAuthentication);
}
