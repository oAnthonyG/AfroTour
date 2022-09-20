import styles from './Footer.module.scss';

import InstagramSvg from '../assets/icon-instagram.svg';
import FacebookSvg from '../assets/icon-facebook.svg';
import YoutubeSvg from '../assets/icon-youtube.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Todos os direitos reservados © 2022 - AfroTour</p>
        <nav>
          <a href="https://www.instagram.com/anthony_guillherme/">
            <img src={InstagramSvg} alt="link para o instagram" />
          </a>
          <a href="https://www.linkedin.com/in/antthonyg/">
            <img src={FacebookSvg} alt="link para o  facebook" />
          </a>
          <a href="https://github.com/oAnthonyG">
            <img src={YoutubeSvg} alt="link para o youtube" />
          </a>
        </nav>
      </div>
    </footer>
  )
}