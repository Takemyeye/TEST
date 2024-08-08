import { MainIllustration } from "./component/phone"
import { SVG } from "./component/svg"
import "./styles/features.css"

export function Features () {
  return (
    <div className="features">
      <div className="text">
        <div className="t1">
          Introducing Abstract
          App landing page
        </div>
        <div className="t2">
          A perfect landing page to showcase
          your new App
        </div>
      </div>
      <MainIllustration/>
      <SVG/>
    </div>
  )
}
