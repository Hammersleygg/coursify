import { useState } from 'react';
import "./account.css"

export default function Account() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [tip, setTip] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Upload the file and submit the form
    console.log('File:', file);
    console.log('Title:', title);
    console.log('Tip:', tip);
  };

  return (
    <div className="account">
      <form className="accountForm" onSubmit={handleSubmit}>
        <div className="accountFormGroup">
           <label htmlFor="fileInput">
            <i className="accountIcon fas fa-plus"></i>
           </label>
           <input type="file" id="fileInput" style={{display: "none"}} onChange={handleFileChange} />
           <input 
                type="text" 
                placeholder="Title" 
                className="accountInput" 
                autoFocus={true}
                value={title}
                onChange={handleTitleChange}
        />
        </div>
        <div className="accountFormGroup">
            <textarea 
                placeholder="Leave a tip" 
                type="text" 
                className="accountInput accountText"
                value={tip}
                onChange={handleTipChange}
            ></textarea>
        </div>
        <button className="accountSubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}