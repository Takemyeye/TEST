export function Card ({title, price, t3, info, btn}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-price">
        <div className="price-price">
          <h1>{price}</h1>
        </div>
        <div className="t3-accent">{t3}</div>
      </div>
      <div className="info">
        <div className="t5">{info}</div>
      </div>
      <div className={btn}>
        <div className="t1">Start Now</div>
       </div>
    </div>
  )
}