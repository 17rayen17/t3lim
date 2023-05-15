import './Header.css'
import logo from "../../assets/img/bader.jpg"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
      <a href="/">
        <h1>هيا بادر</h1>
        <p>Vivons les sciences ensemble</p>
      </a>
      <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header