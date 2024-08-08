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
          <a href="/">
            <div className="t2">About us</div>
          </a>
          <a href="/">
            <div className="t2">Features</div>
          </a>
          <a href="/">
            <div className="t2">Blog</div>
          </a>
          <a href="/">
            <div className="t2">Contact</div>
          </a>
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
