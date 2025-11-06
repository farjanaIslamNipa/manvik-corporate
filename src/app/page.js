"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <div className="min-h-screen container space-y-8">
      <div className="flex flex-wrap gap-x-2">
        <div className="h-10 w-10 bg-[#393E46]"></div>
        <div className="h-10 w-10 bg-[#948979]"></div>
        <div className="h-10 w-10 bg-[#DFD0B8]"></div>
        <div className="h-10 w-10 bg-[#543A14]"></div>
        <div className="h-10 w-10 bg-[#F0BB78]"></div>
        <div className="h-10 w-10 bg-[#FFF0DC]"></div>
        <div className="h-10 w-10 bg-brand"></div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">Manvik</div>
        <div className="col-span-4">
        <div className="my-10 w-full flex justify-end items-center py-10">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={true}
          speed={1000}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
        </div>
      </div>
      <div className="space-y-5">
        <div className="text-brand">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum consequatur vitae facilis maiores est possimus, officia quam maxime. Maiores, numquam. Neque et quaerat, eos molestias excepturi facilis consectetur incidunt, quis fugiat veritatis ad. Blanditiis quo eos rerum adipisci delectus magnam, laudantium doloribus quia velit debitis cupiditate dignissimos aperiam. In cum, ipsum impedit ipsam eveniet fugit velit debitis quis, pariatur incidunt odio? A, dolorum dolorem deleniti ab itaque modi quidem eius hic quibusdam. Blanditiis ipsam atque quisquam nam inventore mollitia eius, aliquid earum voluptas doloribus aspernatur dolorum ab quaerat. Atque eum reprehenderit nostrum quas sequi harum tenetur illo dolorum nam!
        </div>
        <div className="text-dark-brand">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum consequatur vitae facilis maiores est possimus, officia quam maxime. Maiores, numquam. Neque et quaerat, eos molestias excepturi facilis consectetur incidunt, quis fugiat veritatis ad. Blanditiis quo eos rerum adipisci delectus magnam, laudantium doloribus quia velit debitis cupiditate dignissimos aperiam. In cum, ipsum impedit ipsam eveniet fugit velit debitis quis, pariatur incidunt odio? A, dolorum dolorem deleniti ab itaque modi quidem eius hic quibusdam. Blanditiis ipsam atque quisquam nam inventore mollitia eius, aliquid earum voluptas doloribus aspernatur dolorum ab quaerat. Atque eum reprehenderit nostrum quas sequi harum tenetur illo dolorum nam!
        </div>
        <div className="text-[#FFF0DC]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum consequatur vitae facilis maiores est possimus, officia quam maxime. Maiores, numquam. Neque et quaerat, eos molestias excepturi facilis consectetur incidunt, quis fugiat veritatis ad. Blanditiis quo eos rerum adipisci delectus magnam, laudantium doloribus quia velit debitis cupiditate dignissimos aperiam. In cum, ipsum impedit ipsam eveniet fugit velit debitis quis, pariatur incidunt odio? A, dolorum dolorem deleniti ab itaque modi quidem eius hic quibusdam. Blanditiis ipsam atque quisquam nam inventore mollitia eius, aliquid earum voluptas doloribus aspernatur dolorum ab quaerat. Atque eum reprehenderit nostrum quas sequi harum tenetur illo dolorum nam!
        </div>
      </div>
      <div>
      set 1 : #222831, #393E46, #948979, #DFD0B8

set 2 : #131010, #543A14, #F0BB78, #FFF0DC
      </div>
    </div>
  );
}
