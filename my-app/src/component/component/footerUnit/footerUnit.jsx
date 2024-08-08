export function  FooterUnit ({title, t1, t2, t3, t4, t5}) {
  return (
    <div className="footer-container">
      <h3>{title}</h3>
      <div className="t">
        <a href="/">
          <div className="t3-accent">{t1}</div>
        </a>
        <a href="/">
          <div className="t3-accent">{t2}</div>
        </a>
        <a href="/">
          <div className="t3-accent">{t3}</div>
        </a>
        <a href="/">
          <div className="t3-accent">{t4}</div>
        </a>
        <a href="/">
          <div className="t3-accent">{t5}</div>
        </a>
      </div>
    </div>
  )
}