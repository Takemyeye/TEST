import { Menu } from "./component/headerUnit/menu"
import "./styles/header.css"

export function Header () {
  return (
    <header>
      <div className="logo">
        <div className="rightCircle"></div>
        <div className="leftCircle"></div>
      </div>
      <div className="rightPanel">
        <Menu
        t1="About us"
        t2="Featurs"
        t3="Blog"
        t4="Contact"/>
        <div className="btn">
          <div className=".t3-accent">
            Download App
          </div>
        </div>
      </div>
    </header>
  )
}
