import React, {useState} from "react";


function CreateArea(props) {
  const [showButton, setShowButton] = useState(false);
  const [note, setNote] = useState({
    title: "",
    keyPoint: "",
    content: "",
    summary: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
     (!value) ? 
      setShowButton(false)
     : 
      setShowButton(true);
    
  }


function handleSubmit(event) { 
  props.addNote(note);
  event.preventDefault();
  setNote({
    title: "",
    keyPoint: "",
    content: "",
    summary: ""
  });
  setShowButton(false);
}
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <input type="text" name="keyPoint"
          placeholder="Key Points" 
        value={note.keyPoint} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <textarea name="summary" placeholder="Summary" rows="2" value={note.summary} onChange={handleChange} />
        {showButton && <button type="button" className={showButton ? "fly-in" : "fly-out"} onClick={handleSubmit}>Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;
