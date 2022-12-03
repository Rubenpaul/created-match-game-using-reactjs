import './index.css'

const MatchThumbnail = props => {
  const {eachImage, checkMatch} = props
  const {id, thumbnailUrl} = eachImage

  const onClickMatchItem = () => {
    checkMatch(id)
  }

  return (
    <li className="match-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickMatchItem}
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="match-thumbnail-image"
        />
      </button>
    </li>
  )
}

export default MatchThumbnail
