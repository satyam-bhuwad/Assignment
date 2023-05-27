import React from 'react';

function Carousel() {
        return (
            <div>
                <section className="banner">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-heading">
                     <h2>Learn best online Courses</h2>
                     <h4>48,000 Online Courses for you</h4>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="banner-from">
                  <div className="col-md-8 col-sm-12 offset-md-2">
                     <form className="row form-category bg-white pt-3">
                        <div className="col-md-4">
                           <select className="form-select pine-green-bg text-white mb-2">
                              <option selected>Category</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="col-md-6">
                           <input type="password" className="form-control mb-2" placeholder="What do you want to learn" />
                        </div>
                        <div className="col-md-2">
                           <button type="submit" className="btn pine-green-bg mb-2 text-white w-100">Search</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <img src="images/banner.png" width="100%" />
               </div>
            </div>
         </div>
      </section>
            </div>
        );
}

export default Carousel;