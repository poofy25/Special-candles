import styles from "./contacts.module.scss"

import call from '/src/assets/svgs/call.svg'
import instagram from '/src/assets/svgs/instagram.svg'
import facebook from '/src/assets/svgs/facebook.svg'
import location from '/src/assets/svgs/location.svg'

function ContactsSection() {
    return ( 

        <section className={styles.section} id="contacte">

        <h2>Contactați-ne acum pentru a plasa o comandă</h2>

            <section className={styles.contentWrapper}>
                <article className={styles.info}>
                    <a target="_blank" href="tel:+373 69 132 001"><img src={call}/>+373 69 132 001</a>
                    <a target="_blank" href="https://www.instagram.com/specialcandles.md/"><img src={instagram}/>@specialcandles.md</a>
                    <a target="_blank" href="https://www.facebook.com/todericamariana"><img src={facebook}/>@specialcandles.md</a>
                    <a target="_blank" href="https://www.google.com/maps/place/Gemeni/@47.0237226,28.8342678,18.04z/data=!4m6!3m5!1s0x40c97c33ff0651ef:0xb1b00870e13839b3!8m2!3d47.0236909!4d28.8344007!16s%2Fg%2F11r8j90qs?entry=ttu"><img src={location}/>CC Gemeni, et.2 Chisinau, Moldova</a>
                </article>
                <article  className={styles.map}> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.2062943403773!2d28.834267773368303!3d47.02372261993787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c33ff0651ef%3A0xb1b00870e13839b3!2sGemeni!5e0!3m2!1sen!2s!4v1705684464181!5m2!1sen!2s"  Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>


        </section>


    );
}

export default ContactsSection;