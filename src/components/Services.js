import React, { useEffect } from 'react';

function Services() {
  useEffect(() => {
    filterSelection("all");
  }, []);

  function filterSelection(c) {
    const elements = Array.from(document.getElementsByClassName("filterDiv"));
    if (c === "all") {
      elements.forEach((element) => (element.style.display = "block"));
    } else {
      elements.forEach((element) => {
        if (element.classList.contains(c)) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    }
  }

  useEffect(() => {
    const btnContainer = document.getElementById("myBtnContainer");
    const btns = btnContainer.getElementsByClassName("btn");
    const handleClick = (event) => {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      event.target.className += " active";
    };
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", handleClick);
    }
    return () => {
      for (let i = 0; i < btns.length; i++) {
        btns[i].removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <section className="section-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="service-title">
              <h3>our online courses</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="myBtnContainer">
              <button className="btn btn-filter active" onClick={() => filterSelection('all')}>
                all
              </button>
              <button className="btn btn-filter" onClick={() => filterSelection('business')}>
                business
              </button>
              <button className="btn btn-filter" onClick={() => filterSelection('design')}>
                design
              </button>
              <button className="btn btn-filter" onClick={() => filterSelection('development')}>
                development
              </button>
              <button className="btn btn-filter" onClick={() => filterSelection('management')}>
                management
              </button>
              <button className="btn btn-filter" onClick={() => filterSelection('technology')}>
                technology
              </button>
              <button className="btn btn-filter" onClick={() => filterSelection('photo')}>
                photo
              </button>
            </div>
            <div className="filter-body">
              <div className="filterDiv business">
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
              <div className="filterDiv design">
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
              <div className="filterDiv development">
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
              <div className="filterDiv management">
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
              <div className="filterDiv photo">
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
              <div className="filterDiv technology">
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

export default Services;
