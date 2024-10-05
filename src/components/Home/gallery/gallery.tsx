import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { gallery } from "@/utils/mock/gallery/gallery.json";

const Gallery = () => {
  return (
    <div className="my-[67px]">
      <div className="flex flex-col justify-center items-center">
        <span className="text-[20px] font-semibold text-[#616161]">
          Share your setup with
        </span>
        <h1 className="text-[40px] font-bold mb-[43px]">#FurniroFurniture</h1>
      </div>
      <MasonryPhotoAlbum photos={gallery} />;
    </div>
  );
};

export default Gallery;
