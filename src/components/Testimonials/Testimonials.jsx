import styles from "./testimonials.module.scss"

import image1 from '/src/assets/images/galery/photo1.png'
import image3 from '/src/assets/images/galery/photo3.png'

import openQuote from '/src/assets/svgs/open-quotation.svg'
import closeQuote from '/src/assets/svgs/close-quotation.svg'

function TestimonialsSection() {
    return ( 

        <section className={styles.section} id="recenzii">

        <h2>Ce Spun Clienții Noștrii</h2>

            <section className={styles.contentWrapper}>
                <article className={styles.testimonial}>
                    <img src={image1}/>
                    <span><img src={openQuote}/></span>
                    <p>Bună seara! Vreau să vă mulțumesc pentru lumânările minunate. Au avut un efect nemaipomenit! Mă bucur că am apelat la Dvs. Cu siguranță apelăm pentru alte evenimente!</p>
                    <span><img src={closeQuote}/></span>

                </article>
                <article className={styles.testimonial}>
                    <img src={image3}/>
                    <span><img src={openQuote}/></span>
                    <p>Bună seara! Vreau să vă mulțumesc pentru lumânările minunate. Au avut un efect nemaipomenit! Mă bucur că am apelat la Dvs. Cu siguranță apelăm pentru alte evenimente!</p>
                    <span><img src={closeQuote}/></span>

                </article>
                <article className={styles.testimonial}>
                    <img src={image1}/>
                    <span><img src={openQuote}/></span>
                    <p>Bună seara! Vreau să vă mulțumesc pentru lumânările minunate. Au avut un efect nemaipomenit! Mă bucur că am apelat la Dvs. Cu siguranță apelăm pentru alte evenimente!</p>
                    <span><img src={closeQuote}/></span>

                </article>
            </section>


        </section>


    );
}

export default TestimonialsSection;