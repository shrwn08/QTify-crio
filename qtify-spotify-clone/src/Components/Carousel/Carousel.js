import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumCard from "./AlbumCard";

function Carousel({ topAlbumData, newAlbumData }) {
//    console.log("Carousel",topAlbumData );
// const dataLoaded = topAlbumData.length > 0 || newAlbumData.length > 0;
if (topAlbumData.length > 0 || newAlbumData.length > 0) {
    return <div>Loading...</div>;
  }
  console.log(topAlbumData) //array[10]


//   const albumsToShow = topAlbumData.length > 0 ? topAlbumData : newAlbumData;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
     {topAlbumData.map((albumTop) => (
        <SwiperSlide key={albumTop.id}>
          {/* <AlbumCard title={item.title} image={item.image} follows={item.follows}/> */}
          <AlbumCard albumTop={albumTop}/>
        </SwiperSlide>
      ))}

      {newAlbumData.map((albumNew) => (
        <SwiperSlide key={albumNew.id}>
          {/* <AlbumCard title={item.title} image={item.image} follows={item.follows}/> */}
          <AlbumCard  albumNew={albumNew} />
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
}

export default Carousel;
