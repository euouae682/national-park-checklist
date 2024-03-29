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

    onSubmitEdit({"name": pname, "location": ploc, "status": 0});

    setPname('');
    setPloc('');
  }

  return (
    <aside className="editlist">
      <h2>Edit List</h2>
      <form onSubmit={onSubmit}>
        <h2>Add a New Park</h2>
        <label htmlFor="pname">Park Name</label>
        <input type="text" id="pname" name="pname" value={pname} onChange={(e) => setPname(e.target.value)} /><br />
        <label htmlFor="ploc">Park Location</label>
        <input type="text" id="ploc" name="ploc" value={ploc} onChange={(e) => setPloc(e.target.value)} /><br />
        <input type="submit" value="Add" />
      </form>
      <br />
    </aside>
  )
}

export default EditList;