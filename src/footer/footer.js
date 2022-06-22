import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <footer class="bg-dark text-center text-lg-start ">

        <div className="text-center text-light p-3 bg-dark" >
          © 2022 Copyright :
          <a className="text-light" href="#">&nbsp; Movies</a>
        </div>
      </footer>
    </>
  );
}
