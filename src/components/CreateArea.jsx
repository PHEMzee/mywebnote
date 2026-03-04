import React, {useState} from "react";


function CreateArea(props) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [note, setNote] = useState([
    {
      title: "",
      keyPoint: "",
      content: ""
    }
  ]);

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    if (!value) {
      setIsButtonClicked(false);
    } else {
      setIsButtonClicked(true);
    }
  }


function handleSubmit(event) { 
  props.addNote(note);
  setNote({
    title: "",
    keyPoint: "",
    content: ""
  });
  event.preventDefault();
  
}
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <input type="text" name="keyPoint"
          placeholder="Key Points" 
        value={note.keyPoint} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />{isButtonClicked && <button type="button" className={isButtonClicked ? "fly-in" : "fly-out"} onClick={handleSubmit}>Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;
