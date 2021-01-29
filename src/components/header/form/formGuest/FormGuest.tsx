interface IProps {
  title: string
}

export const FormGuest = ({title}: IProps) => {
  return (
    <div className="form__guests">
      <div className="form__label">
        <div className="form__label-title">{title}</div>
        <input className="form__input" type="text" placeholder="Сколько гостей?" />
      </div>
      <div className="icon-wrap"></div>
    </div>
  )
}