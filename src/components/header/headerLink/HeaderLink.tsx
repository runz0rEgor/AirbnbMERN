import './headerLink.scss'

interface ILink{
  title: string
}

export const HeaderLink = ({title}:ILink) => {
  return (
    <a href='/#' className="header__about-link">
      <span className="header__about-item">{title}</span>
    </a>
  )
}