import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <img
                src="https://myfraternitylife.org/wp-content/uploads/2022/10/cofc-logo.png"width={200}
                alt=""
            />
            <p>
                This is what we want to say about coursify or the school
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span> 
        <ul className="sidebarList">
            <li className="sidebarListItem">Campus Life</li>
            <li className="sidebarListItem">Student Life</li>
            <li className="sidebarListItem">City Life</li>
        </ul>
        </div>
    </div>
  )
}
