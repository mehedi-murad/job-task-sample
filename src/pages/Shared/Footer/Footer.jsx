import { Link } from "react-router-dom";
import logoIcon from "../../../../public/task.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#7828C8] text-primary-content">
      <aside>
        <img className="w-20" src={logoIcon} alt="" />
        <p className="text-2xl font-bold">
          JOB TASK
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.linkedin.com/in/mehedi-murad/">
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link to="https://github.com/mehedi-murad">
            <FaGithub></FaGithub>
          </Link>
        </div>
      </nav>
      <div>
      <p>Copyright © 2024 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
