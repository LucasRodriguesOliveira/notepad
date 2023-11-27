import { FC } from 'react';
import { FaCog, FaPlus, FaEdit, FaRegTrashAlt, FaTimes } from 'react-icons/fa';
import './style.css';
import { useSidebar } from '../../hooks/useSidebar.hook';

export const HomePage: FC = () => {
  const { open } = useSidebar();

  return (
    <>
      {/* <div className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p>Add a new Note</p>
              <FaTimes />
            </header>
            <form>
              <div className="row title">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title'/>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <main className={open ? 'sidebar-open' : 'sidebar-closed'}>
        <div className='add-box'>
          <div className="icon">
            <FaPlus />
          </div>
          <p>Add new note</p>
        </div>
        <div className="note">
          <div className="details">
            <p>This is a title</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore nam enim velit nostrum eum. Itaque reprehenderit distinctio accusamus tempora, nulla sint commodi eos adipisci voluptatum, velit consequatur unde minima.</span>
          </div>
          <div className='bottom-content'>
            <span>November 20, 2023</span>
            <div className="settings">
              <FaCog />
              <div className="menu">
                <span className='edit'><FaEdit /> Edit</span>
                <span className='remove'><FaRegTrashAlt /> Remove</span>
              </div>
            </div>
          </div>
        </div>
        <div className="note">
          <div className="details">
            <p>This is a title</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore nam enim velit nostrum eum. Itaque reprehenderit distinctio accusamus tempora, nulla sint commodi eos adipisci voluptatum, velit consequatur unde minima.</span>
          </div>
          <div className='bottom-content'>
            <span>November 20, 2023</span>
            <div className="settings">
              <FaCog />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
