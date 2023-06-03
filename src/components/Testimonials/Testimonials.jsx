import React from 'react';
import './Testimonials.css';
import { TESTIMONIALS_IMAGE } from '../../assets/images';

const data = [
  {
    "id": 1,
    "customerName": "Margaret E.",
    "customerMessage": '"This is fantastic! Thanks so much guys!"',
    "customerImage": `${TESTIMONIALS_IMAGE.testimonials1}`
  },
  {
    "id": 2,
    "customerName": "Fred S.",
    "customerMessage": '"Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages."',
    "customerImage": `${TESTIMONIALS_IMAGE.testimonials2}`
  },
  {
    "id": 3,
    "customerName": "Sarah W.",
    "customerMessage": '"Thanks so much for making these free resources available to us!"',
    "customerImage": `${TESTIMONIALS_IMAGE.testimonials3}`
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {data.map((item, i) => {
            return (
              <div className="col-lg-4" key={i}>
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src={item.customerImage} alt="..." />
                  <h5>{item.customerName}</h5>
                  <p className="font-weight-light mb-0">{item.customerMessage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;