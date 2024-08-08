export function Menu ({t1, t2, t3, t4}) {
  return (
    <div className="menu">
      <a href="/">
        <div className="t2">{t1}</div>
      </a>
      <a href="/">
        <div className="t2">{t2}</div>
      </a>
      <a href="/">
        <div className="t2">{t3}</div>
      </a>
      <a href="/">
        <div className="t2">{t4}</div>
      </a>
    </div>
  )
}