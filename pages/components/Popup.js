import style from "./Popup.module.scss";
import Image from "next/image";
import {useAppContext} from "../../context/states";

const Popup = ({content}) => {
  const {activePopup, setActivePopup} = useAppContext();

  return (
    <div className={`${style['backdrop']}`}>
      <div className={`${style['wrapper']}`}>
        <div className={`${style['header']}`}>
          <Image
            src={`/popups/${content.image}.jpg`}
            alt={content.title}
            width={600}
            height={250}
            quality={100}
          />
          <svg
            onClick={() => {
              setActivePopup(null)
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
          <h2 className={`${style['title']}`}>{content.title}</h2>

        </div>

        <div className={`${style['body']}`}>
          <ul className={`${style['data']}`}>
            {
              Object.entries(content.data).map(([key, value], i)=> {
                return (<li key={i}><span>{`${key}: `}</span>{value}</li>)
              })
            }
          </ul>
        </div>

        <div className={`${style['footer']}`}>
          <span><a href="tel:+36 30 908 5873">+36 30 908 5873</a></span>
          <span><a href="mailto:dudextrailer.futo@gmail.com">
            dudextrailer.futo@gmail.com</a></span>
        </div>

      </div>
    </div>
  );
}

export default Popup;
