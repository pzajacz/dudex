import {useState} from 'react';
import {useAppContext} from "../../context/states";
import style from './MainMenu.module.scss';

const MainMenu = ({menuList}) => {
  const {activeMenu, setActiveMenu} = useAppContext();
  const [isActive, setIsActive] = useState(false);

/*  const handleClick = event => {
    setIsActive(current => !current);
  };*/
  return (
    <ul className={`${style['main-menu']}`}>
      {
        menuList.map((item, i)=> {
          return (
            <li
              className={item.list.length ? (isActive ? 'active' : null) : `${style['inactive']}`}
              id={item.type}
              key={i}
              onClick={()=> {
                setActiveMenu(i);
               /* handleClick()*/
              }}>
              {item.type}
            </li>
          );
        })
      }
    </ul>
  );
}

export default MainMenu;
