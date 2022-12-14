import style from "./ListWrapper.module.scss";
import Image from "next/image";
import {useAppContext} from "../context/states";
import defaultImage from '/public/items/utanfuto_mini.png';

const ListWrapper = ({content}) => {
  const {activePopup, setActivePopup} = useAppContext();

  return (
    <div className={`${style['category-wrapper']}`}>
      {content && content.map((item, i) => {
        return (
          <div
            className={`${style['trailer-box']}`}
            key={i}
            onClick={()=> {
              setActivePopup(item)
            }}
          >
            <div className={`${style['trailer-title']}`}>{item.title}</div>
            <span className={`${style['trailer-image']}`}>
              <Image
                src={`/items/${item.image}.png` || defaultImage }
                alt={item.title}
                width={200}
                height={102}
                quality={75}
                unoptimized={false}
                priority={true}
              />
              </span>
          </div>
        )
      })}
    </div>
  );
}

export default ListWrapper;
