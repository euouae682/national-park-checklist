export const MoreInfo = ({ deletePark }) => {
  return (
    <div className="moreInfo">
      <h1>More Info</h1>
      <button onClick={deletePark}>
        Delete Park from List
      </button>
    </div>
  )
}

export default MoreInfo;
