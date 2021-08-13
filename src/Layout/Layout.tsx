import React, {FC} from 'react';

const Layout: FC = () => {
  return (
    <div>
      <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
      <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
      <header>
        <span id="header-title">
          Upify Analytics
        </span>
        <svg className="svg-inline--fa fa-bars fa-w-14 fa-fw header-svg" aria-hidden="true" focusable="false" data-prefix="fa"
             data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
          <path fill="#F8FAFC"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </header>
      <nav id="drawer">
        <ul>
          <li><a href="#">Menu Item</a></li>
          <li><a href="#">Menu Item</a></li>
          <li><a href="#">Menu Item</a></li>
          <li><a href="#">Menu Item</a></li>
        </ul>
      </nav>
      <div id="page-content">
        <p>Page Content</p>
      </div>
    </div>
  );
};

export default Layout;