import { FC } from 'react';
import style from './style.module.css';
import { FaTimes, FaBug } from 'react-icons/fa';
import { IMenuItem, menuItems } from './menu-items';
import { useSidebar } from '../../hooks/useSidebar.hook';

export const Sidebar: FC = () => {
  const { open, close } = useSidebar();

  return (
    <aside className={open ? style.open : ''}>
      <header>
        <span>Menu</span>
        <FaTimes className={style['close-button']} onClick={close}/>
      </header>
      <section>
        <ul className={style['menu-items']}>
          {menuItems.map((menuItem: IMenuItem) => (
            <li key={menuItem.name}>
              <a href={menuItem.path}>
                <menuItem.icon className={style['menu-icon']}/>
                <span>{menuItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <FaBug />
        <span>v1.14.492</span>
      </footer>
    </aside>
  );
};
