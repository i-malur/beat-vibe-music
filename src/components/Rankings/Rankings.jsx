import { useState } from 'react';
import styles from './Rankings.module.css';

const MOCK_GLOBAL_SONGS = [
  { id: 1, title: 'Blinding Lights (Remix)', artist: 'The Weeknd', country: '🇨🇦 Canadá / 🇺🇸 EUA', tag: 'Pop Cósmico', streams: '142.8M streams / sem', textThumb: 'TW', topSpot: true },
  { id: 2, title: 'Espresso', artist: 'Sabrina Carpenter', country: '🇺🇸 EUA', textThumb: 'SC', streams: '125.4M streams', change: '+1 posição' },
  { id: 3, title: 'Birds of a Feather', artist: 'Billie Eilish', country: '🇺🇸 EUA', textThumb: 'BE', streams: '114.2M streams', change: 'Estável' },
  { id: 4, title: 'Monaco', artist: 'Bad Bunny', country: '🇵🇷 Porto Rico', textThumb: 'BB', streams: '98.7M streams', change: '4:27 min' },
  { id: 5, title: 'City Boys', artist: 'Burna Boy', country: '🇳🇬 Nigéria', textThumb: 'BN', streams: '88.9M streams', change: '+3 posições' },
];

const MOCK_BRASIL_SONGS = [
  { id: 1, title: 'Caju (Faixa Título)', artist: 'Liniker', country: '🇧🇷 Brasil', tag: 'MPB Neo-Soul', streams: 'Fenômeno Crítico & Popular', textThumb: 'LK', topSpot: true },
  { id: 2, title: 'Nosso Primeiro Beijo', artist: 'Gloria Groove & Ludmilla', country: '🇧🇷 Brasil', textThumb: 'LM', streams: '58.3M streams', change: 'Top Pagode' },
  { id: 3, title: 'Crack com Mussilon', artist: 'Matuê', country: '🇧🇷 Brasil', textThumb: 'MT', streams: '52.1M streams', change: 'Top Trap Br' },
  { id: 4, title: 'Amor de Fim de Noite', artist: 'Jorge & Mateus', country: '🇧🇷 Brasil', textThumb: 'JM', streams: '49.4M streams', change: 'Sertanejo' },
  { id: 5, title: 'Joga Pra Lua', artist: 'Anitta', country: '🇧🇷 Brasil', textThumb: 'AN', streams: '44.0M streams', change: 'Funk Brasil' },
];
const MOCK_GLOBAL_ARTISTS = [
  { id: 1, name: 'The Weeknd', thumb: 'TW', listeners: '112.5M ouvintes/mês', desc: '🇨🇦 Canadá • R&B/Pop', hit: 'Blinding Lights' },
  { id: 2, name: 'Taylor Swift', thumb: 'TS', listeners: '104.1M ouvintes/mês', desc: '🇺🇸 EUA • Pop Country', hit: 'Cruel Summer' },
  { id: 3, name: 'Bad Bunny', thumb: 'BB', listeners: '89.4M ouvintes/mês', desc: '🇵🇷 Porto Rico • Urbano', hit: 'Monaco' },
  { id: 4, name: 'Billie Eilish', thumb: 'BE', listeners: '82.3M ouvintes/mês', desc: '🇺🇸 EUA • Alt-Pop', hit: 'Birds of a Feather' },
  { id: 5, name: 'Burna Boy', thumb: 'BN', listeners: '45.8M ouvintes/mês', desc: '🇳🇬 Nigéria • Afrobeats', hit: 'City Boys' },
];

const MOCK_BRASIL_ARTISTS = [
  { id: 1, name: 'Liniker', thumb: 'LK', listeners: '7.9M ouvintes no Brasil', desc: 'MPB Contemporânea / Soul', hit: 'Caju' },
  { id: 2, name: 'Matuê', thumb: 'MT', listeners: '11.8M ouvintes mensais', desc: 'Trap Brasileiro / 333', hit: 'Crack com Mussilon' },
  { id: 3, name: 'Ludmilla', thumb: 'LD', listeners: '16.5M ouvintes mensais', desc: 'Pagode & Pop Urbano', hit: 'Nosso Primeiro Beijo' },
  { id: 4, name: 'Anitta', thumb: 'AN', listeners: '38.9M ouvintes mundiais', desc: 'Funk Carioca & Global Pop', hit: 'Joga Pra Lua' },
  { id: 5, name: 'Jorge & Mateus', thumb: 'JM', listeners: '14.3M ouvintes mensais', desc: 'Sertanejo Universitário', hit: 'Amor de Fim de Noite' },
];

const Rankings = () => {
  const [scope, setScope] = useState('global'); // 'global' | 'brasil'
  const [category, setCategory] = useState('musicas'); // 'musicas' | 'artistas'

  const currentSongs = scope === 'global' ? MOCK_GLOBAL_SONGS : MOCK_BRASIL_SONGS;

  return (
    <section id="rankings" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={styles.badgeGroup}>
            <span className={styles.sectionBadge}>Paradas Oficiais</span>
            <span className={styles.updateBadge}>Atualização Diária</span>
          </div>
          <h2 className={styles.title}>Top Músicas & Top Artistas</h2>
          <p className={styles.description}>
            Navegue pelos charts mundiais e brasileiros. Compare os sons que movimentam o planeta com os hits que dominam o Brasil.
          </p>
        </div>
        
        <div className={styles.controls}>
          <div className={styles.toggleGroup}>
            <button 
              className={`${styles.toggleBtn} ${scope === 'global' ? styles.toggleBtnActive : ''}`}
              onClick={() => setScope('global')}
            >
              Mundial 🌍
            </button>
            <button 
              className={`${styles.toggleBtn} ${scope === 'brasil' ? styles.toggleBtnActive : ''}`}
              onClick={() => setScope('brasil')}
            >
              Brasil 🇧🇷
            </button>
          </div>
          <div className={styles.toggleGroup}>
            <button 
              className={`${styles.toggleBtn} ${category === 'musicas' ? styles.toggleBtnActive : ''}`}
              onClick={() => setCategory('musicas')}
            >
              Top Músicas
            </button>
            <button 
              className={`${styles.toggleBtn} ${category === 'artistas' ? styles.toggleBtnActive : ''}`}
              onClick={() => setCategory('artistas')}
            >
              Top Artistas
            </button>
          </div>
        </div>
      </div>

      <div className={styles.contentArea}>
        {category === 'musicas' ? (
          <div className={styles.grid}>
            {/* Spotlight (Top 1) */}
            <div className={styles.spotlight}>
              <div>
                <div className={styles.spotlightHeader}>
                  <span className={styles.spotlightBadge}>
                    <span className="material-symbols-outlined">local_fire_department</span>
                    #{currentSongs[0].id} {scope === 'global' ? 'Top Mundial' : 'Viral Brasil'}
                  </span>
                  <span className={styles.spotlightStreams}>{currentSongs[0].streams}</span>
                </div>
                
                <div className={styles.spotlightImageContainer}>
                  {currentSongs[0].img ? (
                    <img src={currentSongs[0].img} alt={currentSongs[0].artist} className={styles.spotlightImage} />
                  ) : (
                    <div className={styles.spotlightFallback}>
                      {currentSongs[0].textThumb}
                    </div>
                  )}
                  <div className={styles.spotlightOverlay}></div>
                  <div className={styles.spotlightTagBadge}>
                    <span>{currentSongs[0].tag}</span>
                  </div>
                </div>
                
                <span className={styles.spotlightArtist}>{currentSongs[0].artist}</span>
                <h3 className={styles.spotlightTitle}>{currentSongs[0].title}</h3>
                <p className={styles.spotlightCountry}>{currentSongs[0].country}</p>
              </div>
              
              <div className={styles.spotlightFooter}>
                <button 
                  className={styles.playButton} 
                  onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(currentSongs[0].artist + ' ' + currentSongs[0].title)}`, '_blank')}
                >
                  <span className="material-symbols-outlined">play_arrow</span> Ouvir Prévia
                </button>
                <span className={styles.spotlightDuration}>3:20 min</span>
              </div>
            </div>

            {/* List (Top 2-5) */}
            <div className={styles.list}>
              {currentSongs.slice(1).map((song) => (
                <div key={song.id} className={styles.listItem}>
                  <div className={styles.listLeft}>
                    <span className={styles.listRank}>{song.id}</span>
                    <div className={styles.listThumb}>
                      {song.img ? (
                        <img src={song.img} alt={song.artist} className={styles.listThumbImg} />
                      ) : (
                        <div className={styles.listThumbText}>{song.textThumb}</div>
                      )}
                    </div>
                    <div>
                      <h4 className={styles.listTitle}>{song.title}</h4>
                      <p className={styles.listArtist}>{song.artist} • {song.country}</p>
                    </div>
                  </div>
                  <div className={styles.listRight}>
                    <div className={styles.listStats}>
                      <p className={styles.listStreams}>{song.streams}</p>
                      <p className={styles.listChange}>{song.change}</p>
                    </div>
                    <button 
                      className={styles.listPlayBtn}
                      onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(song.artist + ' ' + song.title)}`, '_blank')}
                    >
                      <span className="material-symbols-outlined">play_arrow</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.artistasGrid}>
            {(scope === 'global' ? MOCK_GLOBAL_ARTISTS : MOCK_BRASIL_ARTISTS).map((artist) => {
              const prefix = scope === 'global' ? '' : 'BR';
              return (
                <div key={artist.id} className={`${styles.artistaCard} ${styles[`artistaCardRank${artist.id}`]}`}>
                  <div className={`${styles.artistaAvatarWrapper} ${styles[`avatarGradient${artist.id}`]}`}>
                    <div className={`${styles.artistaAvatarInner} ${styles[`artistaAvatarInner${prefix}${artist.id}`]}`}>
                      {artist.thumb}
                    </div>
                    <span className={`${styles.artistaRankBadge} ${artist.id === 1 ? styles[`artistaRankBadge${prefix}1`] : styles.artistaRankBadgeOther}`}>
                      #{artist.id}
                    </span>
                  </div>
                  <span className={`${styles.artistaPichella} ${styles[`artistaPichella${prefix}${artist.id}`]}`}>
                    {artist.name}
                  </span>
                  <h4 className={styles.artistaName}>{artist.name}</h4>
                  <p className={`${styles.artistaListeners} ${styles[`artistaListeners${prefix}${artist.id}`]}`}>
                    {artist.listeners}
                  </p>
                  <span className={styles.artistaDesc}>{artist.desc}</span>
                  <div className={styles.artistaHit}>Hit: “{artist.hit}”</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Rankings;
