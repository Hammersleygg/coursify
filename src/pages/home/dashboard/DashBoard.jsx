import "./dashboard.css"

export default function DashBoard() {
  return (
    <div className="dashboard">
        <img 
            className="dashboardImg"
            src="https://250.cofc.edu/wp-content/uploads/2019/08/cofc-campus-banner.jpg" 
            alt="" />
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
        <div className="dashboardFromGroup">
            <textarea 
                placeholder="Leave a tip" 
                type="text" 
                className="dashbaordInput dashboardText"
            ></textarea>
        </div>
        <button className="dashboardSubmit">Publish</button>
      </form>
    </div>
  )
}
