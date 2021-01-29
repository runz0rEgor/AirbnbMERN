import './menu.scss'

export const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__links">
        <a className="menu__links-item" href="/#">
          <span className="menu__links-text">Сдайте жилье</span>
        </a>
        <div className="menu__links-item">
          <button className="menu__links-btn">
          </button>
        </div>
      </div>
      <div className="menu__burger">
        <div className="menu__burger-btn">
        </div>
        <div className="menu__burger-img">
        </div>
      </div>
  </nav>
  )
  
}