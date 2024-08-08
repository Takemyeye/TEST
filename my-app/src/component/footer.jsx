import { LeftPanel } from "./component/footerUnit/leftPanel"
import { RightPanel } from "./component/footerUnit/rightPanel"
import "./styles/footer.css"

export function Footer () {
  return(
    <footer>
      <LeftPanel/>
      <RightPanel/>
    </footer>
  )
}