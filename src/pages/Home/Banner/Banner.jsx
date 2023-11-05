import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/T0M3jXw/banner-7.jpg",
      label: "Join ExcessEats to Share Food",
      subtitle:
        "Connect with your community and share surplus food resources on ExcessEats.",
    },
    {
      image: "https://i.ibb.co/tMf7zLp/banner-2.jpg",
      label: "Help Reduce Food Waste",
      subtitle:
        "Play your part in reducing food waste by sharing excess food with those in need.",
    },
    {
      image: "https://i.ibb.co/MDW6Tzc/banner-3.jpg",
      label: "Support Food Security",
      subtitle:
        "Promote food security and ensure no one goes hungry with ExcessEats.",
    },
    {
      image: "https://i.ibb.co/F82psdz/banner-8.jpg",
      label: "Get Involved in Community Food Sharing",
      subtitle:
        "Participate in our community and contribute to a sustainable food sharing ecosystem.",
    },
    {
      image: "https://i.ibb.co/4VPhpBh/bannner-5.jpg",
      label: "Help Us Reduce Surplus Food",
      subtitle:
        "Let's work together to reduce food surplus and make a positive impact.",
    },
    {
      image: "https://i.ibb.co/stFxmSh/banner-6.png",
      label: "Sustainable Food Practices",
      subtitle:
        "Learn about sustainable food practices and be a part of the change with ExcessEats.",
    },
  ];

  return (
    <div className="rounded-lg">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center h-[750px] text-white rounded-lg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-lg bg-opacity-90 h-full space-y-4 flex flex-col justify-center items-start">
                <div className="pl-16 md:ml-32 max-w-xl">
                  <h1 className="text-2xl md:text-6xl text-white font-bold mb-8">
                    {slide.label}
                  </h1>
                  <p className="font-light text-lg mb-5">{slide.subtitle}</p>
                  <div className="pt-10 space-x-5">
                    <Link to="/signUp">
                      <button className="px-4 py-2 btn text-white text-lg capitalize bg-red-500 rounded-md shadow hover:bg-red-700">
                        Join ExcessEats
                      </button>
                    </Link>
                    <Link to="/login">
                      <button className="px-4 py-2 btn btn-outline text-white text-lg capitalize">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
