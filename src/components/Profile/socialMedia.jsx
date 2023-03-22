import "./../../App.css";
import {FaGithub} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Social = () => {
  return (
    <div className="icons">
     <FaGithub className="icon"/> 
     <FaFacebook className="icon"/>
     <FaLinkedin className="icon"/>
     <FaInstagram className="icon"/>
     </div>
  );
};

export default Social;