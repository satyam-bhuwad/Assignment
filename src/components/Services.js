import React, { useEffect } from 'react';

function CourseList() {
  useEffect(() => {
    filterSelection('all');
  }, []);

  function filterSelection(c) {
    const elements = document.getElementsByClassName('filter-div');
    if (c === 'all') {
      Array.from(elements).forEach((element) => {
        element.style.display = 'block';
      });
    } else {
      Array.from(elements).forEach((element) => {
        if (element.classList.contains(c)) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }
  }

  function handleFilterClick(c) {
    filterSelection(c);

    const buttons = document.getElementsByClassName('btn-filter');
    Array.from(buttons).forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });

    const currentButton = document.getElementById(c);
    currentButton.classList.add('active');
  }

  return (
    <section className="section-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="service-title">
              <h3>Our Online Courses</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="myBtnContainer">
              <button
                id="all"
                className="btn btn-filter active"
                onClick={() => handleFilterClick('all')}
              >
                All
              </button>
              <button
                id="business"
                className="btn btn-filter"
                onClick={() => handleFilterClick('business')}
              >
                Business
              </button>
              <button
                id="design"
                className="btn btn-filter"
                onClick={() => handleFilterClick('design')}
              >
                Design
              </button>
              <button
                id="development"
                className="btn btn-filter"
                onClick={() => handleFilterClick('development')}
              >
                Development
              </button>
              <button
                id="management"
                className="btn btn-filter"
                onClick={() => handleFilterClick('management')}
              >
                Management
              </button>
              <button
                id="technology"
                className="btn btn-filter"
                onClick={() => handleFilterClick('technology')}
              >
                Technology
              </button>
              <button
                id="photo"
                className="btn btn-filter"
                onClick={() => handleFilterClick('photo')}
              >
                Photo
              </button>
            </div>
            <div className="filter-body">
              <div className="filter-div business">
              <div className="item-box">
                           <img src="images/business-one.jpg" />
                           <div className="rating">
                              <div className="price">
                                 $80
                              </div>
                              <div className="rating-icon">
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                              </div>
                           </div>
                        </div>
                        <div className="filter-content">
                           <h3>Business ideas</h3>
                           <p>Lecturer <a href="#">admin</a> in <a href="#">Business Strategy</a></p>
                           <hr/>
                           <ul>
                              <li>
                                 <i className="fa-regular fa-user"></i> 2006
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> 12h 28m
                              </li>
                              <li>
                                 <i className="fa-regular fa-bookmark"></i> lectures
                              </li>
                           </ul>
                        </div>
              </div>
              <div className="filter-div design">
              <div className="item-box">
                           <img src="images/web-design.jpg" />
                           <div className="rating">
                              <div className="price">
                                 $80
                              </div>
                              <div className="rating-icon">
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                              </div>
                           </div>
                        </div>
                        <div className="filter-content">
                           <h3>Master Web Design</h3>
                           <p>Lecturer <a href="#">admin</a> in <a href="#">Business Strategy</a></p>
                           <hr/>
                           <ul>
                              <li>
                                 <i className="fa-regular fa-user"></i> 2006
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> 12h 28m
                              </li>
                              <li>
                                 <i className="fa-regular fa-bookmark"></i> lectures
                              </li>
                           </ul>
                        </div>
              </div>
              <div className="filter-div development">
              <div className="item-box">
                           <img src="images/app-development.jpg" />
                           <div className="rating">
                              <div className="price">
                                 $80
                              </div>
                              <div className="rating-icon">
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                              </div>
                           </div>
                        </div>
                        <div className="filter-content">
                           <h3>App Development</h3>
                           <p>Lecturer <a href="#">admin</a> in <a href="#">Business Strategy</a></p>
                           <hr/>
                           <ul>
                              <li>
                                 <i className="fa-regular fa-user"></i> 2006
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> 12h 28m
                              </li>
                              <li>
                                 <i className="fa-regular fa-bookmark"></i> lectures
                              </li>
                           </ul>
                        </div>
              </div>
              <div className="filter-div management">
              <div className="item-box">
                           <img src="images/management.jpg" />
                           <div className="rating">
                              <div className="price">
                                 $80
                              </div>
                              <div className="rating-icon">
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                              </div>
                           </div>
                        </div>
                        <div className="filter-content">
                           <h3>Master Management</h3>
                           <p>Lecturer <a href="#">admin</a> in <a href="#">Business Strategy</a></p>
                           <hr/>
                           <ul>
                              <li>
                                 <i className="fa-regular fa-user"></i> 2006
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> 12h 28m
                              </li>
                              <li>
                                 <i className="fa-regular fa-bookmark"></i> lectures
                              </li>
                           </ul>
                        </div>
              </div>
              <div className="filter-div photo">
              <div className="item-box">
                           <img src="images/photo.jpg" />
                           <div className="rating">
                              <div className="price">
                                 $80
                              </div>
                              <div className="rating-icon">
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                              </div>
                           </div>
                        </div>
                        <div className="filter-content">
                           <h3>Master Web Design</h3>
                           <p>Lecturer <a href="#">admin</a> in <a href="#">Business Strategy</a></p>
                           <hr/>
                           <ul>
                              <li>
                                 <i className="fa-regular fa-user"></i> 2006
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> 12h 28m
                              </li>
                              <li>
                                 <i className="fa-regular fa-bookmark"></i> lectures
                              </li>
                           </ul>
                        </div>
              </div>
              <div className="filter-div technology">
              <div className="item-box">
                           <img src="images/technology.jpg" />
                           <div className="rating">
                              <div className="price">
                                 $80
                              </div>
                              <div className="rating-icon">
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                                 <span>&#9733;</span>
                              </div>
                           </div>
                        </div>
                        <div className="filter-content">
                           <h3>Master Web Design</h3>
                           <p>Lecturer <a href="#">admin</a> in <a href="#">Business Strategy</a></p>
                           <hr/>
                           <ul>
                              <li>
                                 <i className="fa-regular fa-user"></i> 2006
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> 12h 28m
                              </li>
                              <li>
                                 <i className="fa-regular fa-bookmark"></i> lectures
                              </li>
                           </ul>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseList;
