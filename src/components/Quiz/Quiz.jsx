import { useState } from 'react';
import styles from './Quiz.module.css';

const QUESTIONS = [
  {
    title: 'Qual a sua vibe agora?',
    options: [
      { id: 'brasil', emoji: '🇧🇷', label: 'Calor & Suingue Solar', desc: 'MPB contemporânea, samba soul, bossa acolhedora e violão suave.' },
      { id: 'cosmico', emoji: '🌌', label: 'Noite & Foco Cósmico', desc: 'Sintetizadores analógicos, alt-pop e texturas cinematográficas 80s.' },
      { id: 'global', emoji: '⚡', label: 'Euforia & Pista Global', desc: 'Afrobeats de arena, trap latino, dembow e batidas clubbing eletrizantes.' }
    ]
  },
  {
    title: 'Como você prefere os vocais?',
    options: [
      { id: 'brasil', emoji: '🎤', label: 'Poéticos e suaves', desc: 'Letras profundas em português com interpretação intimista.' },
      { id: 'cosmico', emoji: '🤖', label: 'Etéreos e processados', desc: 'Vocais com reverb, ecos e efeitos futuristas.' },
      { id: 'global', emoji: '🔥', label: 'Fortes e com atitude', desc: 'Flows rápidos, rimas afiadas e muita energia.' }
    ]
  },
  {
    title: 'Qual ritmo te move?',
    options: [
      { id: 'brasil', emoji: '🥁', label: 'Percussão Orgânica', desc: 'Batucada, pandeiro e ritmos afro-brasileiros.' },
      { id: 'cosmico', emoji: '🎹', label: 'Synth Pop', desc: 'Arpejos eletrônicos e drum machines analógicas.' },
      { id: 'global', emoji: '🔊', label: 'Graves Pesados', desc: '808s estourando, reggaeton e afrobeats pulsantes.' }
    ]
  },
  {
    title: 'Onde você ouviria essa música?',
    options: [
      { id: 'brasil', emoji: '🌅', label: 'Tarde de Sol', desc: 'Na praia ou em um barzinho com amigos.' },
      { id: 'cosmico', emoji: '🌃', label: 'Madrugada', desc: 'Dirigindo sozinho pela cidade iluminada.' },
      { id: 'global', emoji: '🎉', label: 'Festa Lotada', desc: 'No meio da pista de dança pulando muito.' }
    ]
  },
  {
    title: 'Como a música deve te fazer sentir?',
    options: [
      { id: 'brasil', emoji: '😌', label: 'Acolhido e Leve', desc: 'Uma sensação de paz e abraço sonoro.' },
      { id: 'cosmico', emoji: '👁️', label: 'Introspectivo', desc: 'Viagem mental e foco absoluto.' },
      { id: 'global', emoji: '⚡', label: 'Energizado', desc: 'Adrenalina pura e vontade de dançar.' }
    ]
  }
];

const RESULTS = {
  brasil: [
    {
      thumb: 'LK',
      title: 'Liniker — Álbum “Caju” 🇧🇷',
      desc: 'Harmonia da Bossa Nova, samba contemporâneo e arranjos aveludados de soul perfeito para o seu momento.',
      url: 'https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8'
    },
    {
      thumb: 'JN',
      title: 'Jorge Ben Jor — “A Tábua de Esmeralda” 🇧🇷',
      desc: 'Samba-rock clássico, suingue místico e letras poéticas para uma tarde de sol perfeita.',
      url: 'https://open.spotify.com/album/2I4p7o7VpI5QzU7yJ5H88N'
    },
    {
      thumb: 'BS',
      title: 'BaianaSystem — “O Futuro Não Demora” 🇧🇷',
      desc: 'Guitarrada, dub e ritmos afro-brasileiros que formam uma catarse coletiva e libertadora.',
      url: 'https://open.spotify.com/album/2L2G4P3a6l8H2aB8r7xJ4c'
    }
  ],
  cosmico: [
    {
      thumb: 'TW',
      title: 'The Weeknd — “After Hours” 🌍',
      desc: 'Sintetizadores 80s analógicos, baixos potentes e pop cinematográfico global e sombrio.',
      url: 'https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj'
    },
    {
      thumb: 'DP',
      title: 'Daft Punk — “Random Access Memories” 🇫🇷',
      desc: 'Disco e funk retro-futurista com texturas puramente analógicas e perfeição sonora.',
      url: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCQ'
    },
    {
      thumb: 'TI',
      title: 'Tame Impala — “Currents” 🇦🇺',
      desc: 'Rock psicodélico imerso em batidas de pista e camadas etéreas de pura introspecção.',
      url: 'https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv'
    }
  ],
  global: [
    {
      thumb: 'BB',
      title: 'Bad Bunny — “Un Verano Sin Ti” 🇵🇷',
      desc: 'Batidas de reggaeton, dembow e energia de sobra para transformar seu dia em uma festa.',
      url: 'https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5'
    },
    {
      thumb: 'RO',
      title: 'Rosalía — “MOTOMAMI” 🇪🇸',
      desc: 'Vanguarda do reggaeton, flamencos distorcidos e atitude urbana imparável que desafia regras.',
      url: 'https://open.spotify.com/album/6jbtHi5R0jMXoliU2OS0lo'
    },
    {
      thumb: 'BN',
      title: 'Burna Boy — “Love, Damini” 🇳🇬',
      desc: 'Afrobeats contagiante com participações globais, energia pura e baterias irresistíveis.',
      url: 'https://open.spotify.com/album/0O636X2lF906mGzX8YQyq6'
    }
  ]
};

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [scores, setScores] = useState({ brasil: 0, cosmico: 0, global: 0 });
  const [resultType, setResultType] = useState(null);
  const [finalResult, setFinalResult] = useState(null);

  const handleChoice = (type) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (step < 5) {
      setStep(step + 1);
    } else {
      let winner = 'brasil';
      let maxScore = newScores.brasil;
      
      if (newScores.cosmico > maxScore) {
        winner = 'cosmico';
        maxScore = newScores.cosmico;
      }
      if (newScores.global > maxScore) {
        winner = 'global';
        maxScore = newScores.global;
      }
      
      setResultType(winner);
      const options = RESULTS[winner];
      const randomAlbum = options[Math.floor(Math.random() * options.length)];
      setFinalResult(randomAlbum);
      setStep(6); // 6 is result view
    }
  };

  const restartQuiz = () => {
    setStep(1);
    setScores({ brasil: 0, cosmico: 0, global: 0 });
    setResultType(null);
    setFinalResult(null);
  };

  const currentQuestion = QUESTIONS[step - 1];
  const progressPercent = step <= 5 ? ((step - 1) / 5) * 100 : 100;
  const matchPercent = resultType ? Math.floor(75 + (scores[resultType] / 5) * 24.4) : 99; // fun fake math

  const handleListen = () => {
    if (finalResult && finalResult.url) {
      window.open(finalResult.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="quiz" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined">psychology</span>
            Algoritmo de Afinidade Sonora
          </div>
          <span className={styles.subtitle}>Descubra seu próximo som</span>
          <h2 className={styles.title}>Quiz Musical Rápido</h2>
          <p className={styles.description}>
            Responda em segundos e receba a combinação perfeita de artista, álbum e faixa para a sua vibe atual.
          </p>
        </div>

        <div className={styles.quizBox}>
          {step <= 5 ? (
            <div className={styles.questionView}>
              <div className={styles.progressHeader}>
                <div className={styles.progressLeft}>
                  <span className={styles.stepBadge}>Pergunta {step} de 5</span>
                  <span className={styles.stepLabel}>{currentQuestion.title}</span>
                </div>
                <span className={styles.percentLabel}>{progressPercent}% Concluído</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${progressPercent}%` }}></div>
              </div>

              <div className={styles.optionsGrid}>
                {currentQuestion.options.map((opt) => {
                  let themeClass = '';
                  if (opt.id === 'brasil') themeClass = styles.optionBrasil;
                  if (opt.id === 'cosmico') themeClass = styles.optionCosmic;
                  if (opt.id === 'global') themeClass = styles.optionGlobal;

                  return (
                    <button key={opt.id} className={`${styles.optionCard} ${themeClass}`} onClick={() => handleChoice(opt.id)}>
                      <div className={styles.optionHeader}>
                        <span className={styles.emoji}>{opt.emoji}</span>
                        <span className={`material-symbols-outlined ${styles.arrowIcon}`}>arrow_forward</span>
                      </div>
                      <div>
                        <h4 className={styles.optionTitle}>{opt.label}</h4>
                        <p className={styles.optionDesc}>{opt.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={styles.resultView}>
              <div className={styles.resultContainer}>
                <div className={styles.resultImageWrapper}>
                  <div className={styles.resultImageFallback}>
                    {finalResult ? finalResult.thumb : ''}
                  </div>
                </div>
                
                {finalResult && (
                  <div className={styles.resultContent}>
                    <div className={styles.matchBadge}>
                      <span className="material-symbols-outlined">verified</span> Match Calculado: {matchPercent}% de Afinidade
                    </div>
                    
                    <h3 className={styles.resultTitle}>{finalResult.title}</h3>
                    <p className={styles.resultDesc}>{finalResult.desc}</p>
                    
                    <div className={styles.resultActions}>
                      <button className={styles.btnListen} onClick={handleListen}>
                        <span className="material-symbols-outlined">play_circle</span> Ouvir Álbum Recomendado
                      </button>
                      <button className={styles.btnRestart} onClick={restartQuiz}>
                        <span className="material-symbols-outlined">restart_alt</span> Recomeçar Quiz
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
