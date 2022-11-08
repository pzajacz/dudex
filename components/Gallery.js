import ImageGallery from 'react-image-gallery';
import useSWR from 'swr';
import styles from './Gallery.module.scss'
import {useAppContext} from "../context/states";

const Gallery = ({id}) => {
  const {showGallery, setShowGallery} = useAppContext();
  const {hasGallery, setHasGallery} = useAppContext();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles?id='+ `${id}`, fetcher);
  let images = [];

  data && data.map(item => {
    images.push({original: `galleries/${id}/${item}`, thumbnail: `galleries/${id}/${item}`})
  })

  const onLoad = function onLoad() {
    // console.log("load")
  }


  return (
    <div className={`${styles["backdrop"]}`}>
      <div className={`${styles["wrapper"]}`}>
        <svg
          className={`${styles["close-gallery"]}`}
          onClick={() => {
            setShowGallery(false)
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
        <ImageGallery items={images} onImageLoad={onLoad} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showBullets={true} lazyLoad={true}/>
      </div>
    </div>

  );
}

export default Gallery;
