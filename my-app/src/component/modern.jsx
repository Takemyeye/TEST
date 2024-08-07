import { ModernSvg } from "./component/modernsvg"
import { Back } from "./component/back"
import { Text } from "./component/text"
import "./styles/modern.css"

export function Modern () {
  return (
    <div className="modern">
      <Back/>
      <Text/>
      <div className="modern-img">
        <ModernSvg/>
      </div>
    </div>
  )
}