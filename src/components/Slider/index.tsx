import React from "react";
import { SliderContainer } from "./style";
import { Banner } from "../../global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Slider(props: any) {
  // const [sliderSwiper, setSliderSwiper] = useState<Swiper>();
  const { bannerList } = props;
  return (
    <SliderContainer>
      {/* 图片上的图标和文字提供一个遮罩，
      因为在字体颜色是白色，在面对白色图片背景的时候，
      文字会看不清或者看不到，因此提供一个阴影来衬托出文字 */}
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          <Swiper
            // 使用引入的功能自动播放和分页
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
          >
            {bannerList.map((item: Banner, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={item.imageUrl}
                    width="100%"
                    height="100%"
                    alt="suggest"
                  ></img>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider);
