import './chevron.css'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Chevron = () => {
  return (
    <div className="chevrons">
    <FiChevronLeft className="chevron" />
    <FiChevronRight className="chevron" />
</div>
  )
}

export default Chevron