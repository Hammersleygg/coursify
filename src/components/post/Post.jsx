import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
      className="postImg"
        src="https://250.cofc.edu/wp-content/uploads/2019/08/cofc-campus-banner.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">ABOUT</span>
            <span className="postCat">US</span>
        </div>
        <span className="postTitle">
            Gavin 
        </span>
        <hr/>
        <span className="postDate">10/10/2023</span>
      </div>
      <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sunt eum suscipit esse! Modi nobis, dolores omnis earum dolore 
            sed eius incidunt ab tenetur necessitatibus ipsam, cupiditate velit, 
            quod aliquid illum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sunt eum suscipit esse! Modi nobis, dolores omnis earum dolore 
            sed eius incidunt ab tenetur necessitatibus ipsam, cupiditate velit, 
            quod aliquid illum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sunt eum suscipit esse! Modi nobis, dolores omnis earum dolore 
            sed eius incidunt ab tenetur necessitatibus ipsam, cupiditate velit, 
            quod aliquid illum.
      </p>
    </div>
  )
}
