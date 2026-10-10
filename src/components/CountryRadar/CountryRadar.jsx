import { useState } from 'react';
import styles from './CountryRadar.module.css';

const COUNTRIES = [
  { id: 'todos', label: 'Todos os Países (9)' },
  { id: 'brasil', label: '🇧🇷 Brasil' },
  { id: 'nigeria', label: '🇳🇬 Nigéria' },
  { id: 'coreia', label: '🇰🇷 Coreia do Sul' },
  { id: 'caribe', label: '🇵🇷 Porto Rico / Caribe' },
  { id: 'reino-unido', label: '🇬🇧 Reino Unido' },
  { id: 'japao', label: '🇯🇵 Japão' },
  { id: 'colombia', label: '🇨🇴 Colômbia' },
  { id: 'africa-sul', label: '🇿🇦 África do Sul' },
  { id: 'eua', label: '🇺🇸 EUA' },
];

const MOCK_RADAR_ARTISTS = [
  {
    id: 1,
    countryId: 'brasil',
    countryName: '🇧🇷 Brasil',
    name: 'Liniker',
    tag: 'MPB / Soul Moderno',
    tag2: 'Samba Soul',
    textThumb: 'LK',
    listeners: '7.9M ouvintes',
    highlight: 'Vencedora Grammy Latino',
    desc: 'Com o aclamado álbum "Caju" (2024), Liniker consolidou sua maestria vocal e arranjos orquestrados sublimes, unindo o suingue brasileiro contemporâneo a letras poéticas e premiadas mundialmente.',
    album: 'Caju (2024)',
    tracks: '“Caju”, “Tudo”',
    theme: 'mint',
  },
  {
    id: 2,
    countryId: 'nigeria',
    countryName: '🇳🇬 Nigéria',
    name: 'Burna Boy',
    tag: 'Afrobeats',
    tag2: 'Afro-Fusion',
    textThumb: 'BN',
    listeners: '45.8M ouvintes',
    highlight: 'African Giant',
    desc: 'Pioneiro da revolução sonora de Lagos que invadiu estádios ao redor do mundo. Mescla fuji, dancehall e hip-hop com uma presença cênica hipnotizante e letras de empoderamento pan-africano.',
    album: 'I Told Them...',
    tracks: '“City Boys”, “Last Last”',
    theme: 'primary',
  },
  {
    id: 3,
    countryId: 'coreia',
    countryName: '🇰🇷 Coreia do Sul',
    name: 'NewJeans',
    tag: 'K-Pop',
    tag2: 'UK Garage / R&B',
    textThumb: 'NJ',
    listeners: '22.4M ouvintes',
    highlight: 'Y2K Vibe Leader',
    desc: 'O quinteto remodelou a estética da música asiática mundial integrando batidas nostálgicas de Baltimore Club, UK garage e vocais etéreos em produções minimalistas ultrassofisticadas.',
    album: 'Get Up (EP)',
    tracks: '“Super Shy”, “Ditto”',
    theme: 'mint',
  },
  {
    id: 4,
    countryId: 'caribe',
    countryName: '🇵🇷 Porto Rico / Caribe',
    name: 'Bad Bunny',
    tag: 'Reggaeton',
    tag2: 'Trap Latino',
    textThumb: 'BB',
    listeners: '89.4M ouvintes',
    highlight: '#1 Stream Mundial',
    desc: 'Ícone absoluto da música latina que revolucionou os charts globais inteiramente em espanhol, homenageando as raízes caribenhas da plena, mambo e dembow em arranjos vanguardistas.',
    album: 'Un Verano Sin Ti',
    tracks: '“Monaco”, “Tití Me Preguntó”',
    theme: 'secondary',
  },
  {
    id: 5,
    countryId: 'reino-unido',
    countryName: '🇬🇧 Reino Unido',
    name: 'Dua Lipa',
    tag: 'Electronic Dance',
    tag2: 'Nu-Disco',
    textThumb: 'DL',
    listeners: '78.1M ouvintes',
    highlight: 'Club Culture London',
    desc: 'Herdeira direta das pistas britânicas e da euforia psicodélica de Manchester e Londres, combinando linhas de baixo analógicas energizantes a composições pop irresistíveis.',
    album: 'Radical Optimism',
    tracks: '“Houdini”, “Training Season”',
    theme: 'lilac',
  },
  {
    id: 6,
    countryId: 'japao',
    countryName: '🇯🇵 Japão',
    name: 'Fujii Kaze',
    tag: 'City Pop Revival',
    tag2: 'J-Pop Jazz',
    textThumb: 'FK',
    listeners: '11.6M ouvintes',
    highlight: 'Viral Transcontinental',
    desc: 'O pianista e compositor prodígio de Okayama que revitalizou o City Pop e jazz japonês, alcançando o topo das paradas do Sudeste Asiático e das Américas com baladas introspectivas.',
    album: 'LOVE ALL SERVE ALL',
    tracks: '“Shinunoga E-Wa”, “Matsuri”',
    theme: 'mint',
  },
  {
    id: 7,
    countryId: 'colombia',
    countryName: '🇨🇴 Colômbia',
    name: 'Karol G',
    tag: 'Reggaeton / Pop',
    tag2: 'Bichota Season',
    textThumb: 'KG',
    listeners: '56.2M ouvintes',
    highlight: 'Global Latin Pop',
    desc: 'Levou a força feminina para o topo do reggaeton, misturando ritmos caribenhos com pop envolvente e mensagens de empoderamento que conquistaram o mundo.',
    album: 'Mañana Será Bonito',
    tracks: '“PROVENZA”, “TQG”',
    theme: 'secondary',
  },
  {
    id: 8,
    countryId: 'africa-sul',
    countryName: '🇿🇦 África do Sul',
    name: 'Tyla',
    tag: 'Amapiano',
    tag2: 'R&B / Pop',
    textThumb: 'TL',
    listeners: '32.1M ouvintes',
    highlight: 'Amapiano Global',
    desc: 'O rosto global do Amapiano, gênero que mistura deep house, jazz e log drums intensos. Tyla trouxe essa batida sul-africana para o topo da Billboard.',
    album: 'TYLA',
    tracks: '“Water”, “Truth or Dare”',
    theme: 'primary',
  },
  {
    id: 9,
    countryId: 'eua',
    countryName: '🇺🇸 EUA',
    name: 'Kendrick Lamar',
    tag: 'Hip-Hop',
    tag2: 'Conscious Rap',
    textThumb: 'KL',
    listeners: '68.5M ouvintes',
    highlight: 'Pulitzer de Música',
    desc: 'Um dos letristas mais brilhantes de sua geração, fundindo jazz, funk e hip-hop com narrativas complexas sobre a experiência negra e a sociedade moderna.',
    album: 'To Pimp a Butterfly',
    tracks: '“Alright”, “HUMBLE.”',
    theme: 'lilac',
  }
];

const CountryRadar = () => {
  const [activeCountry, setActiveCountry] = useState('todos');

  const filteredArtists = activeCountry === 'todos' 
    ? MOCK_RADAR_ARTISTS 
    : MOCK_RADAR_ARTISTS.filter(a => a.countryId === activeCountry);

  return (
    <section id="artistas-pais" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.badge}>
              <span className="material-symbols-outlined">public</span>
              <span className={styles.badgeText}>Curadoria Geográfica</span>
            </div>
            <h2 className={styles.title}>Radar Global: Artistas Recomendados por País</h2>
            <p className={styles.description}>
              Mergulhe nas vozes que definem identidades ao redor do globo. Filtre por país e descubra novas referências sonoras.
            </p>
          </div>
          
          <div className={styles.statsBadge}>
            <span className={styles.statsDot}></span>
            <span>9 Culturas Sonoras Mapeadas</span>
          </div>
        </div>
        
        <div className={styles.filterBar}>
          {COUNTRIES.map(country => (
            <button 
              key={country.id}
              className={`${styles.filterBtn} ${activeCountry === country.id ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCountry(country.id)}
            >
              {country.label}
            </button>
          ))}
        </div>
        
        <div className={styles.grid}>
          {filteredArtists.map(artist => (
            <div key={artist.id} className={`${styles.card} ${styles[`cardTheme_${artist.theme}`]}`}>
              <div className={styles.imageContainer}>
                {artist.img ? (
                  <img src={artist.img} alt={artist.name} className={styles.artistImage} />
                ) : (
                  <div className={styles.artistFallback}>
                    <div className={styles.artistFallbackInner}>
                      {artist.textThumb}
                    </div>
                  </div>
                )}
                <div className={styles.imageOverlay}></div>
                <span className={styles.countryBadge}>{artist.countryName}</span>
                <span className={styles.highlightBadgeOverlay}>{artist.highlight}</span>
              </div>
              
              <div className={styles.tagGroup}>
                <span className={styles.tagPrimary}>{artist.tag}</span>
                <span className={styles.tagSecondary}>{artist.tag2}</span>
              </div>
              
              <span className={styles.artistNameSmall}>{artist.name}</span>
              <h3 className={styles.artistNameLarge}>{artist.name}</h3>
              <p className={styles.artistDesc}>{artist.desc}</p>
              
              <div className={styles.albumInfo}>
                <div className={styles.albumRow}>
                  <span className={styles.albumLabel}>Álbum Indicado:</span>
                  <span className={styles.albumValue}>{artist.album}</span>
                </div>
                <div className={styles.albumRow}>
                  <span className={styles.albumLabel}>Faixas Chave:</span>
                  <span className={styles.tracksValue}>{artist.tracks}</span>
                </div>
              </div>
              
              <div className={styles.cardFooter}>
                <div>
                  <p className={styles.footerLabel}>Streams Mensais</p>
                  <p className={styles.footerValue}>{artist.listeners}</p>
                </div>
                <button 
                  className={styles.playBtn} 
                  onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(artist.name + ' music')}`, '_blank')}
                >
                  <span className="material-symbols-outlined">play_arrow</span> Ouvir Artista
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryRadar;
