const img = {
  play: 'img/play.png',
  app: 'img/AppStore.png'
}

export function LeftPanel () {
  return (
    <div className="footer-leftPanel">
      <div className="logo">
        <div className="rightCircle"></div>
        <div className="leftCircle"></div>
      </div>
      <div className="badges">
        <img src={img.play} alt="play" />
        <img src={img.app} alt="play" />
      </div>
      <div className="t3-accent"> 2018 © Copyrights, All rights reserved. </div>
    </div>
  )
}