import "./singlePost.css"

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
        src="https://250.cofc.edu/wp-content/uploads/2019/08/cofc-campus-banner.jpg" 
        alt="" 
        className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
            Lorem ipsum.
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Gavin</b>
          </span>  
          <span className="singlePostDate">10/10/2023</span>
        </div>
        <p className="singlePostDesc">
            description of this
        </p>
      </div>
    </div>
  )
}
