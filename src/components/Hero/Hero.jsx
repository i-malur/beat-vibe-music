import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.blurCirclePrimary}></div>
      <div className={styles.blurCircleSecondary}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>radar</span>
            <span className={styles.badgeText}>Mapeamento Transcontinental 2025</span>
          </div>
          
          <div className={styles.titleGroup}>
            <span className={styles.subtitle}>Ritmos sem fronteiras &</span>
            <h1 className={styles.title}>
              O Som do Mundo e do <span className={styles.gradientText}>Brasil em Dark Mode.</span>
            </h1>
          </div>
          
          <p className={styles.description}>
            Descubra quem domina os streamings no planeta e no Brasil. Das batidas do funk carioca e MPB contemporânea ao pulsar dos Afrobeats de Lagos e o pop de arena global.
          </p>
          
          <div className={styles.actions}>
            <a href="#rankings" className={styles.primaryButton}>
              <span className="material-symbols-outlined">leaderboard</span>
              Ver Tops Brasil & Mundo
            </a>
            <a href="#artistas-pais" className={styles.secondaryButton}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>public</span>
              Artistas por País
            </a>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={`${styles.statValue} ${styles.colorPrimary}`}>+190</span>
              <p className={styles.statLabel}>Países Conectados</p>
            </div>
            <div className={`${styles.statItem} ${styles.statDivider}`}>
              <span className={`${styles.statValue} ${styles.colorSecondary}`}>Top 50</span>
              <p className={styles.statLabel}>Mundial & Brasil</p>
            </div>
            <div className={styles.statItem}>
              <span className={`${styles.statValue} ${styles.colorAccent}`}>2.5k</span>
              <p className={styles.statLabel}>Vertentes Sonoras</p>
            </div>
          </div>
        </div>
        
        <div className={styles.interactiveCardWrapper}>
          <div className={styles.interactiveCard}>
            <div className={styles.imageContainer}>
              <div className={styles.heroFallback}>LK</div>
              <div className={styles.imageOverlay}></div>
              <div className={styles.curationBadge}>
                <span className={styles.pulsingDot}></span>
                <span className={styles.curationText}>Curadoria em Destaque</span>
              </div>
              <div className={styles.imageBottomContent}>
                <div>
                  <span className={styles.trendingText}>Em Alta Hoje</span>
                  <h3 className={styles.cardTitle}>Neo-Tropicália & Afropop</h3>
                  <p className={styles.cardSubtitle}>Liniker & Burna Boy • Mix Curado</p>
                </div>
                <button className={styles.playButton} type="button">
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>play_arrow</span>
                </button>
              </div>
            </div>
            
            <div className={styles.miniPlayer}>
              <div className={styles.playerInfo}>
                <div className={styles.playerThumb}>
                  <div className={styles.playerFallback}>LK</div>
                </div>
                <div>
                  <p className={styles.trackTitle}>Caju (Faixa Título)</p>
                  <p className={styles.trackArtist}>Liniker • 🇧🇷 Brasil</p>
                </div>
              </div>
              <div className={styles.playerControls}>
                <button className={styles.controlBtnSecondary}><span className="material-symbols-outlined">skip_previous</span></button>
                <button className={styles.controlBtnPrimary}><span className="material-symbols-outlined">pause</span></button>
                <button className={styles.controlBtnSecondary}><span className="material-symbols-outlined">skip_next</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
