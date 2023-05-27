import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="mobile-logo">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="mobile-view">
                     <a href="#">
                     <img src="images/e-online-logo.png" />
                     </a>
                     <a href="#" id="toggle" className="toggle-bar">
                     <i className="fa-solid fa-bars"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <header className="header" id="menubar" >
         <div className="container container-width">
            <div className="main-menu">
               <div className="logo">
                  <a href="#">
                  <img src="images/e-online-logo.png" />
                  </a>
               </div>
               <div className="menu" >
                  <ul>
                     <li>
                        <a href="#">home</a>
                     </li>
                     <li>
                        <a href="#">about</a>
                     </li>
                     <li>
                        <a href="#">courses</a>
                     </li>
                     <li>
                        <a href="#">blog</a>
                     </li>
                     <li>
                        <a href="#">contact</a>
                     </li>
                  </ul>
               </div>
               <div className="get-btn">
                  <button className="btn gt-btn text-white text-capitalize">
                  get started
                  </button>
               </div>
            </div>
         </div>
      </header>
            </div>
        );
    }
}

export default Header;