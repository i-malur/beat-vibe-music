import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandGroup}>
            <div className={styles.brandTitleGroup}>
              <span className={styles.brandTitle}>BeatVibe</span>
            </div>
            <p className={styles.brandDesc}>
              Plataforma de mapeamento sonoro transcontinental. Conectando ouvintes às paradas mundiais e brasileiras com estética dark retro-moderna.
            </p>
          </div>
          
          <div>
            <h4 className={styles.navTitle}>Navegação Rápida</h4>
            <ul className={styles.navList}>
              <li><a href="#rankings" className={styles.navLink}>Top Músicas Brasil & Mundo</a></li>
              <li><a href="#artistas-pais" className={styles.navLink}>Artistas por País 🌐</a></li>
              <li><a href="#generos" className={styles.navLink}>Explorador de Gêneros</a></li>
              <li><a href="#quiz" className={styles.navLink}>Quiz de Recomendação</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.newsTitle}>Newsletter Semanal</h4>
            <p className={styles.newsDesc}>Drops semanais com 5 faixas globais e nacionais.</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Seu e-mail..." className={styles.input} />
              <button className={styles.btnSubscribe}>Assinar</button>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>© 2026 BeatVibe Audio Discovery. Dark Mode Imersivo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
