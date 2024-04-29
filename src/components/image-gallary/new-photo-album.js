// "use client";
// import { getGalleryData, getGalleryWithId } from '@/services/api/general-api';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect } from 'react'
// import PhotoAlbum from "react-photo-album";

// const NewPhotoAlbum = (props) => {
//     const { gallery } = props;
//     // console.log(gallery);
//     const [galleryDatasss, setGalleryDatass] = React.useState(null);
//     const [newGallery, setNewGallery] = React.useState(null);
//     const [newPhotos, setNewPhotos] = React.useState(null);
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');
//     const predefinedHeights = [800, 1620, 720, 610, 1440, 810];
//     const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
//     useEffect(() => {

//         const getGalleryDatas = async () => {
//             const gallery = await getGalleryWithId(id);
//             setGalleryDatass(gallery);
//             const newArrays = gallery?.images && gallery?.images?.map((result, index) =>
//             ({
//                 id: index + 1,
//                 width: 1080,
//                 height: predefinedHeights[Math.floor(Math.random() * predefinedHeights.length)],
//                 image: result.image

//             })
//             );
//             setGalleryDatass(newArrays);
//             const newPhotos = newArrays && newArrays?.map((photo) => ({
//                 src: photo.image,
//                 width: photo.width,
//                 height: photo.height,
//                 srcSet: breakpoints.map((breakpoint) => {
//                     const height = Math.round((photo.height / photo.width) * breakpoint);
//                     return {
//                         src: photo.image,
//                         width: breakpoint,
//                         height,
//                     };
//                 }),
//             }));
//             setNewGallery(newPhotos);
//         }
//         getGalleryDatas();

//     }, [])

//     console.log(galleryDatasss);
//     console.log(newPhotos, "NewPHotos");
//     return (
//         <div className='container'>NewPhotoAlbum
//            <PhotoAlbum className="flex" photos={newGallery} rowConstraints={{maxPhotos:3}} layout='rows'/>
//         </div>


//     )
// }

// export default NewPhotoAlbum