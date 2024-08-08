import { Stars } from "./stars";

export function CommentUnit ({user, name, work, t2}) {
  return (
    <div className="comment-ellement">
      <div className="user">
        <img src={user} alt="user" />
      </div>
      <div className="blockUnit">
        <div className="block-name">
          <div className="name">
            <h3>{name}</h3>
          </div>
          <div className="work">
          <div className="t4">{work}</div>
          </div>
        </div>
        <Stars/>
      </div>
      <div className="description">
        <div className="t2">{t2}</div>
      </div>
    </div>
  )
}