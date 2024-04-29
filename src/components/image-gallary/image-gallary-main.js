"use client";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getGalleryWithId } from "@/services/api/general-api";


export default function App() {
  // const { gallery } = props;
  // console.log(photos, "photos");
  // console.log(gallery, "gallery");
  const [gallery, setGallery] = useState(null);
  const [index, setIndex] = useState(-1);
  
  const searchParams= useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      const getGalleryDatas = async () => {
        const gallery = await getGalleryWithId(id);
        setGallery(gallery);
      }
      getGalleryDatas();
    }
  }, [id])

  const slides = gallery?.images?.map(image => ({
    src: image.image,
  }));

  return (
    <div className="image-gallery-extra">

      {gallery?.images?.map((image, index) => (
        <div className="gallery-images single-image" key={image.id} onClick={()=>setIndex(index)}>
          <Image src={image.image} alt="gallery-image" width={1000} height={1000} loading="lazy" quality={100}  />
        </div>
      ))}

      {/* <NewPhotoAlbum /> */}
      {/* <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} /> */}

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

    </div>
  );
}
