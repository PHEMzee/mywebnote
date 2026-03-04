import React from "react";

function Note(props) {
  const handleDelete = (e) => {
    props.deleteNote(props.id)
e.preventDefault();
  }
  return (
    <div className="note">
      <table>
        <tr>
          <th>{props.title}</th>
        </tr>
        <tr>
          <td><h3>{props.keyPoint}</h3></td>
          <td><p>{props.content}</p></td>
        </tr>
      </table>
      <button type="button" className="delete-button" onClick={handleDelete}>🗑️</button>
    </div>
  );
}

export default Note;
