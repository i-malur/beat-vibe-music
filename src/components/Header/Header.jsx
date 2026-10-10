import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navGroup}>
          <a className={styles.brandGroup} href="#">
            <div className={styles.logoIcon}>
              <div className={styles.logoInner}>
                <span className={`material-symbols-outlined ${styles.icon}`}>graphic_eq</span>
              </div>
            </div>
            <div className={styles.brandTextGroup}>
              <span className={styles.brandTitle}>BeatVibe</span>
              <span className={styles.brandSubtitle}>Dark Sonic Pulse</span>
            </div>
          </a>
          <nav className={styles.nav}>
            <a href="#rankings" className={styles.navLink}>Top Paradas</a>
            <a href="#artistas-pais" className={styles.navLink}>Artistas por País</a>
            <a href="#generos" className={styles.navLink}>Gêneros</a>
            <a href="#quiz" className={styles.navLink}>Quiz Musical</a>
          </nav>
        </div>
        <div className={styles.actionGroup}>
          <a href="#quiz" className={styles.ctaButton}>Iniciar Quiz</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
