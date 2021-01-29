import './headerTitle.scss';

interface ITitle {
  title: string,
  subTitle: string
}


interface IProps {
  text: ITitle
}


export const HeaderTitle = ({text}: IProps) => {
  return (
    <div className="header__title">
      <h1 className="title">{text.title}</h1>
      <div className="btn-wrap">
        <button className="button">
          {text.subTitle}
        </button>
      </div>
    </div>
  )
}