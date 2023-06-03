import React from 'react';
import './Feature.css';

const data = [
  {
    "id": 1,
    "name": "Fully Responsive Design",
    "desc": "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    "imageName": "bg-showcase-1"
  },
  {
    "id": 2,
    "name": "Updated For Bootstrap 5",
    "desc": "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    "imageName": "bg-showcase-2"
  },
  {
    "id": 3,
    "name": "Easy to Use & Customize",
    "desc": "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    "imageName": "bg-showcase-3"
  }
];

const Feature = () => {
  return (
    <section className="showcase">
      <div className="container-fluid p-0">

        {data.map((item, i) => {

          const srcImage = {
            "backgroundImage": `url(${require(`../../assets/images/${item.imageName}.jpg`)})`
          };

          return (
            <div className="row g-0" key={i}>
              {
                item.id === 1 || item.id === 3
                  ?
                  <>
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={srcImage}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                      <h2>{item.name}</h2>
                      <p className="lead mb-0">{item.desc}</p>
                    </div>
                  </>
                  :
                  <>
                    <div className="col-lg-6 text-white showcase-img" style={srcImage}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                      <h2>{item.name}</h2>
                      <p className="lead mb-0">{item.desc}</p>
                    </div>
                  </>
              }
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;