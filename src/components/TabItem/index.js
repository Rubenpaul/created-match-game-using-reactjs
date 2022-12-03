import './index.css'

const TabItem = props => {
  const {eachTabItem, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachTabItem

  const newBtnClass = isActive ? 'new-active-btn-style' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="submit"
        className={`tab-item-category-btn ${newBtnClass}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
