import styles from './Generos.module.css';

const GENEROS = [
  {
    id: 1,
    country: '🇧🇷 Brasil',
    period: '1950s - Presente',
    subtitle: 'Balanço Intimista',
    title: 'Bossa Nova',
    desc: 'Nascida no Rio de Janeiro, uniu a sofisticação harmônica do jazz à ginga do samba em voz e violão intimistas, encantando o planeta.',
    artists: 'Tom Jobim, João Gilberto, Liniker',
    tracks: '“Garota de Ipanema”, “Wave”',
    theme: 'mint',
  },
  {
    id: 2,
    country: '🇳🇬 Nigéria',
    period: 'Potência Global',
    subtitle: 'Groove Iorubá',
    title: 'Afrobeats',
    desc: 'Movimento que transformou Lagos na capital rítmica do mundo, unindo fuji, highlife e jazz com percussões eletrônicas hipnóticas.',
    artists: 'Burna Boy, Wizkid, Tems, Rema',
    tracks: '“Last Last”, “City Boys”, “Calm Down”',
    theme: 'primary',
  },
  {
    id: 3,
    country: '🇰🇷 Coreia do Sul',
    period: 'Futurismo Pop',
    subtitle: 'Garage & Sintetizadores',
    title: 'K-Pop',
    desc: 'Fenômeno global que combina engenharia musical arrojada, UK garage dos anos 2000, batidas de trap e melodias hiper-cativantes.',
    artists: 'NewJeans, BTS, Stray Kids, BLACKPINK',
    tracks: '“Super Shy”, “Dynamite”, “Hype Boy”',
    theme: 'lilac',
  },
  {
    id: 4,
    country: '🇬🇧 🇫🇷 Europa',
    period: 'Retro-Futurismo',
    subtitle: 'Sintetizadores 80s',
    title: 'Synthwave / Indie',
    desc: 'Linhas de baixo analógicas e reverbs épicos criando paisagens noturnas nostálgicas e cheias de adrenalina cinematográfica.',
    artists: 'Daft Punk, Dua Lipa, Phoenix, Kavinsky',
    tracks: '“One More Time”, “Nightcall”, “Levitating”',
    theme: 'primary',
  },
  {
    id: 5,
    country: '🇵🇷 🇨🇴 Caribe & Andes',
    period: 'Dem Bow Pulsante',
    subtitle: 'Urbano Latino',
    title: 'Reggaeton / Trap',
    desc: 'Bateria sincopada, rimas afiadas e batidas que dominam pistas do mundo inteiro desde San Juan e Medellín.',
    artists: 'Bad Bunny, Rosalía, J Balvin, Feid',
    tracks: '“Monaco”, “Despechá”, “Dakiti”',
    theme: 'mint',
  },
  {
    id: 6,
    country: '🇿🇦 África do Sul',
    period: '2010s - Presente',
    subtitle: 'Log Drums & Deep House',
    title: 'Amapiano',
    desc: 'Uma evolução pulsante do kwaito e house sul-africano, definida por sintetizadores aéreos, linhas de baixo percussivas (log drums) e andamentos mais relaxados.',
    artists: 'Kabza De Small, Tyla, DJ Maphorisa',
    tracks: '“Water”, “Mnike”',
    theme: 'primary',
  },
  {
    id: 7,
    country: '🇯🇵 Japão',
    period: '1970s - 1980s',
    subtitle: 'Nostalgia de Néon',
    title: 'City Pop',
    desc: 'A trilha sonora do milagre econômico japonês, combinando funk americano, disco e jazz-fusion em produções impecáveis que ressurgiram na era da internet.',
    artists: 'Mariya Takeuchi, Tatsuro Yamashita, Miki Matsubara',
    tracks: '“Plastic Love”, “Stay With Me”',
    theme: 'lilac',
  },
  {
    id: 8,
    country: '🇲🇽 México',
    period: 'Explosão Atual',
    subtitle: 'Tradição & Trap',
    title: 'Corridos Tumbados',
    desc: 'A revolução da música regional mexicana que mescla a instrumentação tradicional (como o requinto) com a atitude, os flows e o estilo visual do hip-hop/trap.',
    artists: 'Peso Pluma, Natanael Cano, Fuerza Regida',
    tracks: '“Ella Baila Sola”, “PRC”',
    theme: 'secondary',
  }
];

const Generos = () => {
  return (
    <section id="generos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Atlas Rítmico</span>
          <h2 className={styles.title}>Gêneros do Mundo: História & Artistas</h2>
          <p className={styles.description}>
            Conheça as raízes, os artistas pilares e as faixas essenciais que moldam a identidade sonora de cada nação.
          </p>
        </div>
        
        <div className={styles.grid}>
          {GENEROS.map(gen => (
            <div key={gen.id} className={`${styles.card} ${styles[`theme_${gen.theme}`]}`}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <span className={styles.badge}>{gen.country}</span>
                  <span className={styles.period}>{gen.period}</span>
                </div>
                <span className={styles.cardSubtitle}>{gen.subtitle}</span>
                <h3 className={styles.cardTitle}>{gen.title}</h3>
                <p className={styles.cardDesc}>{gen.desc}</p>
              </div>
              <div className={styles.cardBottom}>
                <p className={styles.infoRow}><strong className="text-white">Artistas:</strong> {gen.artists}</p>
                <p className={styles.infoRow}><strong className="text-white">Essenciais:</strong> {gen.tracks}</p>
                <button 
                  className={styles.playBtn}
                  onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(gen.title + ' music')}`, '_blank')}
                >
                  <span className="material-symbols-outlined">play_circle</span> Ouvir {gen.title}
                </button>
              </div>
            </div>
          ))}
          
          <div className={styles.addCard}>
            <div className={styles.addCardTop}>
              <div className={styles.iconWrapper}>
                <span className="material-symbols-outlined">travel_explore</span>
              </div>
              <span className={styles.addSubtitle}>Radar Comunitário</span>
              <h3 className={styles.addTitle}>Indique um Ritmo Regional</h3>
              <p className={styles.cardDesc}>
                Do Forró de Rabeca ao Kuduro e Amapiano: colabore com a curadoria BeatVibe para destacar manifestações sonoras periféricas.
              </p>
            </div>
            <button 
              className={styles.addBtn}
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Submeter Gênero Musical
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generos;
