import "./dashboard.css"

export default function DashBoard() {
  return (
    <div className="dashboard">
      <form className="dashboardForm">
        <div className="dashboardFormGroup">
           <label htmlFor="fileInput">
            <i className="dashboardIcon fas fa-plus"></i>
           </label>
           <input type="file" id="fileInput" style={{display: "none"}} />
           <input 
                type="text" 
                placeholder="Title" 
                className="dashboardInput" 
                autoFocus={true}
        />
        </div>
        <div className="dashboardFormGroup">
            <textarea 
                placeholder="Leave a tip" 
                type="text" 
                className="dashboardInput dashboardText"
            ></textarea>
        </div>
        <button className="dashboardSubmit">Publish</button>
      </form>
    </div>
  )
}
