import  "./footer.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="footer">
        <div className="copyright">
            <AiOutlineCopyrightCircle  className="icone-copyrigth"/>
            <h1>2022 Pathy Mavuba</h1>
        </div>
        
    </div>
  )
}

export default Footer