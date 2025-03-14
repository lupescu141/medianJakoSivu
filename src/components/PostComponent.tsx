import { useState } from "react"
import Button from "./Button"

interface userProps {

    userName: string,
    url: string,
    pictureData: string 
}

interface commentProps {
    sender: userProps,
    content: string,
    timestamp: string // unix timestamp
}

interface postProps {
    user: userProps,
    img: string,
    title: string,
    text: string,
    filters: string[],
    comments: commentProps[]

}

const PostComponent = ({ user, img, title, text, filters, comments }: postProps ) => {
    const [showFullPost, setShowFullPost] = useState(false)

    const renderPostText = () => {
        const postLength = text.length
        const isTruncated = postLength > 300 && !showFullPost
        const textToRender = isTruncated
          ? text.substring(0, 300) + "..."
          : text
        
          const renderButton = (postLength: number) => {
            if (postLength < 300) {
                return null
            } else {
                return (
                  <Button
                    text={showFullPost ? "Show less" : "Show more"}
                    onClick={() => setShowFullPost(!showFullPost)}
                  />
                )
            }
          }

        return (
        <div>
          {textToRender}
          <div>
            {renderButton(postLength)}
          </div>
        </div>
        )
    
    }

    const renderFilters = () => {
        const filterMapping = filters && filters.map((filter) => {
            return <div className="filter-item">{filter}</div>
        })
        return (
            <div className="filters">
                {filterMapping}
            </div>
        )
    }

    const renderComments = () => {}

    return (
        <div>
            Posted by: {user.userName}
            <div>
              <img 
                src={img}
              />
            </div>
            {renderPostText()}
            {renderFilters()}
            {/* {renderComments()} */}
        </div>
    )
}

export default PostComponent