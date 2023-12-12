import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubscribersBar() {
  
    return (
      <div className="flex flex-row w-[500px] p-3 bg-black bg-opacity-40">
        <FontAwesomeIcon icon={faHeart} size="1x" /> Sub: 25
      </div>
    )
  }
  