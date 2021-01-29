interface IProps {
  title: string
}

export const FormTime = ({title}: IProps) => {
  return (
    <div className="form__location">
      <div className="form__label">
        <div className="form__label-title">{title}</div>
        <input className="form__input" type="text" placeholder="Куда едете?" />
      </div>
    </div>
  )
}