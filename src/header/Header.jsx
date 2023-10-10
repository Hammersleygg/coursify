import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className="headerTitleSm">CofC CSCI</span>
        <span className="headerTitleLg">Coursify</span>
      </div>
      <img className="headerImg" 
        src="https://wallpaperaccess.com/full/2560627.jpg"
        alt=""/>
    </div>
  )
}
