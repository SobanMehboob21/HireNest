import React from "react";
import quotes from "../assets/quotes.webp";
import avatar from "../assets/avatar.webp";
import Review from "../Reviews.ts";
import "../styles/Testimonial.css";

const Testimonial = () => {
  const review = Review.slice(0, 3);
  return (
    <section className="Testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testi_header">
              <div className="heading">Testimonials from Our Cuctomers</div>
              <div className="sub_heading">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                Blandit a massa elementum id
              </div>
            </div>
          </div>
          {review.length > 0 ? (
            <>
              {" "}
              {Review.map((items) => (
                <>
                  <div className="col-lg-4">
                    <div className="testimonial_wrapper">
                      <div className="rating">
                        {[...Array(items.rating)].map((_, index) => (
                          <i key={index} className="ri-star-fill"></i>
                        ))}
                      </div>
                      <div className="review_heading">
                        {items.review_heading}
                      </div>
                      <div className="review_desc">{items.review_desc}</div>
                      <div className="icon">
                        <i className="ri-double-quotes-l"></i>
                      </div>
                      <div className="avatar_wrap">
                        <div className="avatar_img">
                          <img src={avatar} />
                        </div>
                        <div className="avatr_content">
                          <div className="name">{items.name}</div>
                          <div className="review_type">{items.review_type}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              <h1>nothing to show</h1>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
