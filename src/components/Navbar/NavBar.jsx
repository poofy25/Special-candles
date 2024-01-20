import styles from './navBar.module.scss'

import logo from '/src/assets/images/logo_cropped_trans.png'
import NavBarMenu from './NavBarMenu'

import { useState } from 'react'

import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'




function NavBar() {

    const width = window.innerWidth

    const [menuActive , setMenuActive] = useState(false)
  

    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
    


    return ( 
        <nav className={styles.none}>
            <a href='#acasa' className={styles.logoBar}><img alt='Logo' src={logo}/></a>
            <section className={styles.navigationBar}>
                <HashLink smooth to="/#acasa" style={{marginLeft:'auto'}}>Acasă</HashLink>
                <HashLink smooth to="/#produse">Galerie</HashLink>
                <HashLink smooth to="/#comanda">Comandă</HashLink>
                <HashLink smooth to="/#proiecte">Recenzii</HashLink>
                <HashLink smooth to="/#servicii">De ce Noi ?</HashLink>
                <HashLink smooth to="/#parteneri">Contacte</HashLink>

                {width > 992 ? 
                <>
                <HashLink className={styles.orderBtn} smooth to="/#contacte">Comandă acum!</HashLink>
                </>
                :
                <>
                <button aria-label='Menu' onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                    <div className={menuActive && styles.active}></div>
                </button>
                
                </>
                }
                
            </section>
            
            <NavBarMenu  status={menuActive} setStatus={setMenuActive} />
        </nav>
     );
}

export default NavBar;