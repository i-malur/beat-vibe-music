import { useState } from 'react';
import styles from './Community.module.css';

const Community = () => {
  const [submissions, setSubmissions] = useState([]);
  const [type, setType] = useState('artist');
  const [formData, setFormData] = useState({
    name: '',
    sound: '',
    country: '',
    description: '',
    period: '',
    subtitle: '',
    artists: '',
    tracks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    setFormData({
      name: '', sound: '', country: '', description: '',
      period: '', subtitle: '', artists: '', tracks: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      setSubmissions([{ ...formData, type }, ...submissions]);
      setFormData({
        name: '', sound: '', country: '', description: '',
        period: '', subtitle: '', artists: '', tracks: ''
      });
    }
  };

  return (
    <section id="community" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Comunidade: Envie seus Favoritos</h2>
          <p className={styles.description}>Ajude a expandir nosso radar sonoro. Submeta novos artistas ou gêneros que você acha que todos deveriam conhecer.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.typeSelector}>
              <button 
                type="button"
                className={`${styles.typeBtn} ${type === 'artist' ? styles.typeBtnActive : ''}`}
                onClick={() => handleTypeChange('artist')}
              >
                Artista
              </button>
              <button 
                type="button"
                className={`${styles.typeBtn} ${type === 'genre' ? styles.typeBtnActive : ''}`}
                onClick={() => handleTypeChange('genre')}
              >
                Gênero Musical
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              {type === 'artist' ? (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Nome do Artista</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Ex: Chico Science" />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="sound">Sonoridade</label>
                    <input type="text" id="sound" name="sound" value={formData.sound} onChange={handleChange} required placeholder="Ex: Manguebeat" />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="country">País de Origem</label>
                    <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Ex: 🇧🇷 Brasil" />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="description">Breve Descrição</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} required placeholder="Uma breve descrição sobre o artista..." rows="3"></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Nome do Gênero</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Ex: Synthwave / Indie" />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="country">Países de Origem (ou Região)</label>
                      <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Ex: GB FR Europa" />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label htmlFor="period">Período</label>
                      <input type="text" id="period" name="period" value={formData.period} onChange={handleChange} placeholder="Ex: Retro-Futurismo" />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="subtitle">Subtítulo / Estilo</label>
                    <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} required placeholder="Ex: Sintetizadores 80s" />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} required placeholder="Uma breve descrição sobre a sonoridade..." rows="3"></textarea>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="artists">Artistas Essenciais</label>
                    <input type="text" id="artists" name="artists" value={formData.artists} onChange={handleChange} placeholder="Ex: Daft Punk, Dua Lipa" />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="tracks">Faixas Essenciais</label>
                    <input type="text" id="tracks" name="tracks" value={formData.tracks} onChange={handleChange} placeholder="Ex: “One More Time”" />
                  </div>
                </>
              )}

              <button type="submit" className={styles.submitBtn}>Adicionar ao Radar</button>
            </form>
          </div>

          <div className={styles.submissions}>
            <h3 className={styles.submissionsTitle}>Descobertas Recentes da Comunidade</h3>
            {submissions.length === 0 ? (
              <p className={styles.emptyMsg}>Nenhuma submissão ainda. Seja o primeiro a contribuir!</p>
            ) : (
              <div className={styles.grid}>
                {submissions.map((sub, index) => (
                  sub.type === 'artist' ? (
                    <div key={index} className={styles.card}>
                      <div className={styles.cardHeader}>
                        <span className={styles.genreBadge}>{sub.sound}</span>
                        {sub.country && <span className={styles.countryBadge}>{sub.country}</span>}
                      </div>
                      <h4 className={styles.cardTitle}>{sub.name}</h4>
                      {sub.description && <p className={styles.cardDesc}>{sub.description}</p>}
                      <button 
                        className={styles.playBtn}
                        onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(sub.name + ' ' + sub.sound)}`, '_blank')}
                      >
                        <span className="material-symbols-outlined">search</span> Buscar e Ouvir
                      </button>
                    </div>
                  ) : (
                    <div key={index} className={`${styles.card} ${styles.genreCard}`}>
                      <div className={styles.genreCardTop}>
                        <div className={styles.cardHeader}>
                          {sub.country && <span className={styles.countryBadge}>{sub.country}</span>}
                          {sub.period && <span className={styles.periodText}>{sub.period}</span>}
                        </div>
                        {sub.subtitle && <span className={styles.genreSubtitle}>{sub.subtitle}</span>}
                        <h4 className={styles.genreTitle}>{sub.name}</h4>
                        {sub.description && <p className={styles.cardDesc}>{sub.description}</p>}
                      </div>
                      <div className={styles.genreCardBottom}>
                        {sub.artists && <p className={styles.infoRow}><strong className="text-white">Artistas:</strong> {sub.artists}</p>}
                        {sub.tracks && <p className={styles.infoRow}><strong className="text-white">Essenciais:</strong> {sub.tracks}</p>}
                        <button 
                          className={styles.playBtn}
                          onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(sub.name + ' music')}`, '_blank')}
                        >
                          <span className="material-symbols-outlined">play_circle</span> Ouvir {sub.name}
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
