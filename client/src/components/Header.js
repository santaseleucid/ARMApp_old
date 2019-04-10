import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//dummy comment 
class Header extends Component {

  renderContent(){
    switch(this.props.auth){
      case null:
        return ; 
      case false:
        //return <li><a href = "/auth/google">Login With Google</a></li>; 
        return <li>Login</li>
      default:
        return <li><a href = "/api/logout">Logout</a></li>;
    }
  }

  render() {
    console.log(this.props); 
    return (
      <div>
        <nav>
            <div className ="nav-wrapper light-blue lighten 4">
              <Link to = {this.props.auth ? '/surveys' : '/'} className ="left brand-logo">
                ARM
              </Link>
              <ul className ="right">
                <li>
                  <Link to = {'/map'}>
                    Map
                  </Link>
                </li>
                <li>
                  { this.renderContent() }
                </li>
                
              </ul>
            </div>
          </nav>
                
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return{auth};
}

export default connect(mapStateToProps)(Header);
