import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data1/testimonials";
const Testimonial = () => {
  return (
    <div className={css.testimonial}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            seedialy say has suitable disposal and boy. Exercise joy man
            children rejected
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>HAppy Customers with us</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousal}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonials}>
                <img src={testimonial.image} />
                <span>{testimonial.comment}</span>
                <hr></hr>
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
