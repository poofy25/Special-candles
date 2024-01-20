import styles from './footer.module.scss'

import facebook from '/src/assets/svgs/facebook.svg'
import instagram from '/src/assets/svgs/instagram.svg'

import { HashLink } from 'react-router-hash-link'

function Footer() {
    return ( 
        <footer>
            
            <section className={styles.content}>
                <article>
                <h3>NAVIGHEZĂ</h3>
                    <HashLink smooth to="/#acasa">Acasă</HashLink>
                    <HashLink smooth to="/#galerie">Galerie</HashLink>
                    <HashLink smooth to="/#comanda">Comandă</HashLink>
                    <HashLink smooth to="/#recenzii">Recenzii</HashLink>
                    <HashLink smooth to="/#decenoi">De ce Noi ?</HashLink>
                    <HashLink smooth to="/#contacte">Contacte</HashLink>

                </article>
                <article>
                <h3>TELEFON</h3>
                    <a target="_blank" href="tel:+373 69 132 001">+373 69 132 001</a>
                </article>
                <article>
                    <h3>ADRESA</h3>
                    <a target="_blank" href="https://www.google.com/maps/place/Gemeni/@47.0237226,28.8342678,18.04z/data=!4m6!3m5!1s0x40c97c33ff0651ef:0xb1b00870e13839b3!8m2!3d47.0236909!4d28.8344007!16s%2Fg%2F11r8j90qs?entry=ttu">CC Gemeni, et.2 Chisinau, Moldova</a>
                </article>
                <article>
                    <h3>REȚELELE SOCIALE</h3>
                    <span>
                        <a target="_blank" href="https://www.instagram.com/specialcandles.md/"><img src={instagram}/></a>
                        <a target="_blank" href="https://www.facebook.com/todericamariana"><img src={facebook}/></a>
                    </span>
                </article>
            </section>
            <section className={styles.bottom}>
                <p>© 2024 Special Candles</p>
                <a>Site elaborat de Buza Cristian</a>
            </section>
        </footer>
     );
}

export default Footer;