import styles from './Header.module.css';

import RFLogo from '../assets/RF-logo.svg';    

export function Header() //funçoes com PascalCase para nao confundir com elementos html (<header>)
{
    return (
        <header className={styles.header}>
            <img src={RFLogo} alt="Logotipo da Red Faction" />
        </header>
    );
}