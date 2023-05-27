import React from 'react';

function Subscribe() {
        return (
            <div>
                <section className="subscribe-page">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="main-subscribe">
                     <div className="subscribe-bg"></div>
                     <div className="subscribe-box">
                        <div className="subscribe-box-left">
                           <h4>Subscribe Our Newsletters</h4>
                           <p>
                              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                           </p>
                           <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                              <button className="btn btn-subscribe" type="button" id="button-addon2">SubScribe</button>
                           </div>
                        </div>
                        <div className="subscribe-box-right">
                           <img src="images/subscribe-women.png" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
            </div>
        );
}

export default Subscribe;