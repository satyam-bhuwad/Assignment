import React, { Component } from 'react';

class SectionOne extends Component {
    render() {
        return (
            <div>
                <section className="section-one">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="main-box">
                     <img src="images/icon-one.png" />
                     <div className="box-title">
                        <h5>Enrolled Students</h5>
                        <h2>80,000+ </h2>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="main-box">
                     <img src="images/icon-two.png" />
                     <div className="box-title">
                        <h5>Online Courses </h5>
                        <h2>1,200+  </h2>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="main-box">
                     <img src="images/icon-three.png" />
                     <div className="box-title">
                        <h5>Expert instructors</h5>
                        <h2>80,000+</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
            </div>
        );
    }
}

export default SectionOne;