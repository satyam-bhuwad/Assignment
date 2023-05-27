import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div>
                <section className="our-blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="blog-heading">
                     <h3>read our blogs</h3>
                     <a href="#" className="btn btn-blog">
                     view all
                     </a>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="bog-box">
                     <img src="images/business-one.jpg" />
                     <div className="blog-content">
                        <div className="blog-icon">
                           <ul>
                              <li>April 22,2020</li>
                              <li>4 Comments</li>
                           </ul>
                        </div>
                        <h5>
                           Mauris pretium en tellu nullam dignissim sit amet commondo
                        </h5>
                        <a href="#">read more</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="bog-box">
                     <img src="images/business-one.jpg" />
                     <div className="blog-content">
                        <div className="blog-icon">
                           <ul>
                              <li>April 22,2020</li>
                              <li>4 Comments</li>
                           </ul>
                        </div>
                        <h5>
                           Mauris pretium en tellu nullam dignissim sit amet commondo
                        </h5>
                        <a href="#">read more</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="bog-box">
                     <img src="images/business-one.jpg" />
                     <div className="blog-content">
                        <div className="blog-icon">
                           <ul>
                              <li>April 22,2020</li>
                              <li>4 Comments</li>
                           </ul>
                        </div>
                        <h5>
                           Mauris pretium en tellu nullam dignissim sit amet commondo
                        </h5>
                        <a href="#">read more</a>
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

export default Blog;