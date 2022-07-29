import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Sports</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="http://facebook.com" rel="noreferrer" target='_blank'><i className="fa-brands sidebarIcon fa-2x fa-square-facebook"></i></a>
        <a href="http://twitter.com" rel="noreferrer" target='_blank' ><i className="fa-brands sidebarIcon fa-2x fa-square-twitter"></i></a>
        <a href="http://pinterest.com"rel="noreferrer" target='_blank'><i className="fa-brands sidebarIcon fa-2x fa-square-pinterest"></i></a>
        <a href="http://instagram.com"rel="noreferrer" target='_blank'><i className="fa-brands sidebarIcon fa-2x fa-square-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar