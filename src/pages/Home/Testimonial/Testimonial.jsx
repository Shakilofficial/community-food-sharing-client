import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import QuoteSVG from "../../../assets/images/quote.svg";

const reviews = [
  {
    author: "Shakil Hossain",
    img: "https://i.ibb.co/5nQRsND/team2.jpg",
    profession: "Community Leader",
    details:
      "I had a remarkable experience working with this team. Their professionalism and dedication to supporting our community are truly commendable. They exceeded my expectations, and I'm impressed with the level of service they provided. Their attention to detail and innovative solutions make them a top choice for community initiatives.",
  },
  {
    author: "Jane Doe",
    img: "https://i.ibb.co/Pg43B2C/team1.jpg",
    profession: "Project Coordinator",
    details:
      "The team's expertise is second to none. Their exceptional results speak for themselves. I was looking for a trustworthy partner, and I found them. Their dedication to understanding our project needs and delivering tailored solutions is truly remarkable. They are a top choice for anyone seeking excellence in their project support.",
  },
  {
    author: "John Smith",
    img: "https://i.ibb.co/7C4wp1y/team3.jpg",
    profession: "Entrepreneur",
    details:
      "Working with this team has been an absolute pleasure. They demonstrated their commitment to excellence by exceeding my expectations. The quality of their work and their dedication to delivering on time are outstanding. I'm grateful for their creative and innovative solutions that have had a positive impact on my business.",
  },
  {
    author: "Alice Johnson",
    img: "https://i.ibb.co/5nQRsND/team2.jpg",
    profession: "Creative Director",
    details:
      "This team's creative solutions are a breath of fresh air. Their attention to detail and ability to understand my design needs are commendable. I'm thrilled with the quality of work and the way they brought my vision to life. I highly recommend them for their outstanding design services.",
  },
  {
    author: "Mark Davis",
    img: "https://i.ibb.co/7C4wp1y/team3.jpg",
    profession: "Tech Guru",
    details:
      "I'm more than satisfied with the service provided by this team. Their technical expertise and problem-solving skills are impressive. They quickly identified and resolved complex issues, which saved me a lot of time and effort. I appreciate their professionalism and commitment to excellence in every aspect of their work.",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="text-center max-w-xl mx-auto">
        <h4 className="text-xl text-red-500 mb-8 font-bold">Testimonial</h4>
        <h2 className="text-5xl font-extrabold mb-8">What Visitors Says</h2>
      </div>
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="h-[450px] px-12 lg:px-16 text-center rounded-lg shadow-lg flex flex-col justify-center items-center">
              <div className="flex justify-between items-center gap-16 mb-6">
                <div className="flex justify-center items-center gap-6">
                  <img
                    src={review.img}
                    alt={review.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.author}</h3>
                    <p className="text-gray-500">{review.profession}</p>
                  </div>
                </div>
                <div>
                  <img
                    src={QuoteSVG}
                    alt="Quotation Mark"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-400 overflow-y-auto">
                  {review.details}
                </p>
              </div>
              <div className="rating mt-5">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
