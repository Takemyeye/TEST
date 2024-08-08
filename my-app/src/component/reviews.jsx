import { ArrowsUnit } from "./component/reviewsUnit/arrows"
import { ReviewsSvg } from "./component/reviewsUnit/reviewsSVG"
import { Comment } from "./component/reviewsUnit/comment"
import "./styles/reviews.css"

export function Reviews () {
    return(
        <div className="reviews">
            <ReviewsSvg/>
            <div className="reviews-block">
                <div className="reviews-container">
                    <h1>What 400+ reviews say about us</h1>
                    <ArrowsUnit/>
                </div>
                <Comment/>
            </div>
        </div>
    )
}
