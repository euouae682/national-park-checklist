export const MoreInfo = ({ deletePark }) => {
  return (
    <div className="moreInfo">
      <button onClick={deletePark}>
        Delete Park from List
      </button>
    </div>
  )
}

export default MoreInfo;
