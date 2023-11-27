import { FC, useMemo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import style from './style.module.css';
import { useSidebar } from '../../hooks/useSidebar.hook';

export const Toolbar: FC = () => {
  const { open, toggle, close } = useSidebar();

  const MenuButton = useMemo(() => {
    return open
      ? <FaTimes className={style['menu-button']}
        onClick={close}
      />
      : <FaBars className={style['menu-button']}
        onClick={toggle}
      />
  }, []);

  return (
    <nav>
      {MenuButton}
      <h2 className={style.logo}>Notepad</h2>
    </nav>
  );
}
