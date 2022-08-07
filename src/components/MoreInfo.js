export const MoreInfo = ({ onDelete }) => {
  return (
    <div className="moreInfo">
      <h1>More Info</h1>
      <button onClick={onDelete}>
        Delete Park from List
      </button>
    </div>
  )
}

export default MoreInfo;
