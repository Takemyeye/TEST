import { LeftPanel } from "./component/footerUnit/leftPanel"
import { RigthPanel } from "./component/footerUnit/rightPanel"
import "./styles/footer.css"

export function Footer () {
  return(
    <footer>
      <LeftPanel/>
      <RigthPanel/>
    </footer>
  )
}