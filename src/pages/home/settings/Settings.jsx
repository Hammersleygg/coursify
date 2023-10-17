import "./settings.css"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label> Profile Picture</label>
            <div className="settingsPP">
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-house-chimney-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label >Username</label>
            <input type="text" placeholder="Gavin"/>
            <label >Email</label>
            <input type="text" placeholder="hammersleygg@g.cofc.edu"/>
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  )
}
