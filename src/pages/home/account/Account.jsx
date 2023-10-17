import "./account.css"

export default function Account() {
  return (
    <div className="account">
      <form className="accountForm">
        <div className="accountFormGroup">
           <label htmlFor="fileInput">
            <i className="accountIcon fas fa-plus"></i>
           </label>
           <input type="file" id="fileInput" style={{display: "none"}} />
           <input 
                type="text" 
                placeholder="Title" 
                className="accountInput" 
                autoFocus={true}
        />
        </div>
        <div className="accountFormGroup">
            <textarea 
                placeholder="Leave a tip" 
                type="text" 
                className="accountInput accountText"
            ></textarea>
        </div>
        <button className="accountSubmit">Publish</button>
      </form>
    </div>
  )
}
