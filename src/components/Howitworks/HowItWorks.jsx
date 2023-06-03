import React from 'react';
import './HowItWorks.css';

const data = [
  {
    "id": 1,
    "iconClass": "bi-window m-auto text-primary",
    "name": "Fully Responsive",
    "desc": "This theme will look great on any device, no matter the size!"
  },
  {
    "id": 2,
    "iconClass": "bi-layers m-auto text-primary",
    "name": "Bootstrap 5 Ready",
    "desc": "Featuring the latest build of the new Bootstrap 5 framework!"
  },
  {
    "id": 3,
    "iconClass": "bi-terminal m-auto text-primary",
    "name": "Easy to Use",
    "desc": "Ready to use with your own content, or customize the source files!"
  }
];

const HowItWorks = () => {
  return (
    //  < !--Icons Grid-- >
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {data.map((item, i) => {
            return (
              <div className="col-lg-4" key={i}>
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex"><i className={item.iconClass}></i></div>
                  <h3>{item.name}</h3>
                  <p className="lead mb-0">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;