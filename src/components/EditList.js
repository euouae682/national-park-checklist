import { useState } from 'react';

export const EditList = ({ onSubmitEdit }) => {
  const [pname, setPname] = useState('')
  const [ploc, setPloc] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if (!pname) {
      alert('Please add a name');
      return
    }
    if (!ploc) {
      alert('Please add a location');
      return
    }

    onSubmitEdit(pname, ploc);

    setPname('');
    setPloc('');
  }

  return (
    <aside className="editlist">
      <h2>
        Edit List
      </h2> 
      <h3>
        Add a New Park
      </h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="pname">Park Name</label>
        <input type="text" id="pname" name="pname" value={pname} onChange={(e) => setPname(e.target.value)} /><br />
        <label htmlFor="ploc">Park Location</label>
        <input type="text" id="ploc" name="ploc" value={ploc} onChange={(e) => setPloc(e.target.value)} /><br />
        <input type="submit" value="Submit" />
      </form>
    </aside>
  )
}

export default EditList;