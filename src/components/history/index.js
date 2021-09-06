import './index.css'

const HistoryList = props => {
  const {Details, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Details

  const Delete = () => {
    onDelete(id)
  }

  return (
    <li className="li">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <img alt="domain logo" className="img" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-button"
        onClick={Delete}
      >
        <img
          className="img2"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryList
