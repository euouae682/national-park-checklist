export const MoreInfo = ({ deletePark }) => {
  return (
    <div>
      <button onClick={deletePark}>
        Delete Park from List
      </button>
    </div>
  )
}

export default MoreInfo;
