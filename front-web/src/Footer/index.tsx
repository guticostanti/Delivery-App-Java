import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Gustavo Costanti Lara
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/guticostanti/" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/guticostanti/" target="_new">
                    <LinkedInIcon />
                </a>
                <a href="https://www.linkedin.com/in/guticostanti/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;