import "./styles/header.css"

export function Header () {
  return (
    <header>
      <div className="logo">
        <div className="rightCircle"></div>
        <div className="leftCircle"></div>
      </div>
      <div className="rightPanel">
        <div className="menu">
          <div className="t2">About us</div>
          <div className="t2">Features</div>
          <div className="t2">Blog</div>
          <div className="t2">Contact</div>
        </div>
        <div className="btn">
          <div className=".t3-accent">
            Download App
          </div>
        </div>
      </div>
    </header>
  )
}
