/* ============================================================
   GAMEZONE — Modal de Juego
   Agrega este archivo como: <script src="src/js/game-modal.js"></script>
   (Colocarlo ANTES del cierre de </body>, después de los otros scripts)
   ============================================================ */

(function () {
  /* ----------------------------------------------------------
     DATA — Información completa de cada juego
     Actualiza los nombres, fotos y roles de cada integrante
  ---------------------------------------------------------- */
  const GAMES_DATA = [
    {
      id: 1,
      number: "01",
      title: "Crucigrama",
      emoji: "✏️",
      accent: "#FFD700",
      accentBg: "rgba(255,215,0,0.12)",
      tags: ["PHP", "JS", "SQL"],
      shortDesc: "Completa el crucigrama con palabrs temáticas.",
      howToPlay: `
        <p>El Crucigrama es un juego de palabras donde debes rellenar una cuadrícula con letras para formar palabras correctas, tanto en horizontal como en vertical.</p>
        <ul>
          <li>📋 Se presentan pistas numeradas para cada palabra (horizontal y vertical).</li>
          <li>🖱️ Haz clic en una celda de la cuadrícula para seleccionarla y escribe la letra correspondiente.</li>
          <li>🔄 Las palabras cambian cada día: el tablero se genera dinámicamente desde la base de datos.</li>
          <li>✅ Completa todas las palabras antes de que se acabe el tiempo para obtener el puntaje máximo.</li>
          <li>💡 Si te atascas, puedes usar la pista adicional (penaliza puntos).</li>
        </ul>
      `,
      difficulty: 3,
      players: "1 jugador",
      team: [
        {
          initials: "AA",
          name: "Nombre Apellido",
          role: "Programador principal",
          photo: "",
        },
        {
          initials: "BB",
          name: "Nombre Apellido",
          role: "Diseño y UI",
          photo: "",
        },
        {
          initials: "CC",
          name: "Nombre Apellido",
          role: "Base de datos",
          photo: "",
        },
      ],
    },
    {
      id: 2,
      number: "02",
      title: "¿Quién Quiere Ser Millonario?",
      emoji: "💰",
      accent: "#FF9F00",
      accentBg: "rgba(255,159,0,0.12)",
      tags: ["PHP", "JS", "CSS", "SQL"],
      shortDesc: "15 preguntas, 4 comodines y la presión del tiempo.",
      howToPlay: `
        <p>Inspirado en el famoso concurso de televisión. Responde preguntas de opción múltiple con dificultad creciente y llega al millón de puntos.</p>
        <ul>
          <li>❓ Hay <strong>15 preguntas</strong> con 4 opciones de respuesta cada una.</li>
          <li>📈 La dificultad y el valor de las preguntas aumenta progresivamente.</li>
          <li>🆘 Tienes <strong>4 comodines</strong>: 50/50, Llamada a un amigo, Ayuda del público y Cambiar pregunta.</li>
          <li>⏱️ Cada pregunta tiene un límite de tiempo — ¡no te confíes!</li>
          <li>🏦 Hay puntos de "seguro" en las preguntas 5 y 10: si fallas, no bajas de ahí.</li>
          <li>🏆 Tu puntuación final se guarda en el ranking global.</li>
        </ul>
      `,
      difficulty: 4,
      players: "1 jugador",
      team: [
        {
          initials: "AA",
          name: "Nombre Apellido",
          role: "Programador principal",
          photo: "",
        },
        {
          initials: "BB",
          name: "Nombre Apellido",
          role: "Diseño y UI",
          photo: "",
        },
        {
          initials: "CC",
          name: "Nombre Apellido",
          role: "Base de datos",
          photo: "",
        },
      ],
    },
    {
      id: 3,
      number: "03",
      title: "El Ahorcado",
      emoji: "🪢",
      accent: "#FF00A0",
      accentBg: "rgba(255,0,160,0.12)",
      tags: ["PHP", "JS", "SQL"],
      shortDesc:
        "Adivina la palabra letra por letra antes de quedarte sin intentos.",
      howToPlay: `
        <p>El clásico juego del ahorcado: descifra la palabra oculta antes de que el dibujo se complete.</p>
        <ul>
          <li>🔡 Se muestra una serie de guiones que representan las letras de la palabra secreta.</li>
          <li>⌨️ Selecciona letras del abecedario para intentar adivinar la palabra.</li>
          <li>✅ Si la letra está en la palabra, se revela en su posición correcta.</li>
          <li>❌ Si la letra no está, se dibuja una parte del ahorcado — tienes <strong>6 errores</strong> máximo.</li>
          <li>🗃️ Las palabras son aleatorias y se obtienen desde la base de datos, con categorías variadas.</li>
          <li>🏅 Cuantas menos pistas uses, mayor será tu puntuación.</li>
        </ul>
      `,
      difficulty: 2,
      players: "1 jugador",
      team: [
        {
          initials: "AA",
          name: "Nombre Apellido",
          role: "Programador principal",
          photo: "",
        },
        {
          initials: "BB",
          name: "Nombre Apellido",
          role: "Diseño y UI",
          photo: "",
        },
        {
          initials: "CC",
          name: "Nombre Apellido",
          role: "Base de datos",
          photo: "",
        },
      ],
    },
    {
      id: 4,
      number: "04",
      title: "EduBingo",
      emoji: "📚",
      accent: "#00F5FF",
      accentBg: "rgba(0,245,255,0.1)",
      tags: ["PHP", "JS", "SQL"],
      shortDesc: "Estrategia didáctica para fortalecer la comprensión lectora.",
      howToPlay: `
        <p>EduBingo es un bingo literario digital donde cada jugador recibe un tablero de <strong>5×5 casillas</strong>. En lugar de números, cada casilla contiene un <strong>título de obra, nombre de autor o frase literaria</strong>. El administrador genera balotas al azar y tú debes marcar las casillas que coincidan en tu tablero — el primero en completar una línea o el tablero completo, ¡gana!</p>

        <div id="edubingo-board" style="margin:1.4rem 0; font-family:'Exo 2',sans-serif; user-select:none;">
          <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:5px; margin-bottom:5px;">
            ${["B", "I", "N", "G", "O"].map((l) => `<div style="text-align:center; font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:900; color:var(--m-accent,#00F5FF); text-shadow:0 0 14px var(--m-accent,#00F5FF); padding:4px 0; letter-spacing:0.1em;">${l}</div>`).join("")}
          </div>
          <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:5px;">
            ${[
              "Don Quijote",
              "García Márquez",
              "El Principito",
              "Neruda",
              "Cien Años",
              "Isabel Allende",
              "La Odisea",
              "Borges",
              "Cortázar",
              "Romeo y Julieta",
              "Kafka",
              "Anna Karenina",
              "FREE",
              "Cervantes",
              "Hamlet",
              "Vargas Llosa",
              "El Túnel",
              "Paz",
              "Dostoievski",
              "La Ilíada",
              "Rulfo",
              "Lorca",
              "Poe",
              "Woolf",
              "Benedetti",
            ]
              .map(
                (t, i) => `<div
              class="eb-cell${i === 12 ? " eb-marked" : ""}"
              data-idx="${i}"
              style="background:${i === 12 ? "var(--m-accent,#00F5FF)" : "rgba(255,255,255,0.04)"}; border:1px solid ${i === 12 ? "var(--m-accent,#00F5FF)" : "rgba(255,255,255,0.08)"}; border-radius:8px; padding:7px 4px; text-align:center; font-size:0.52rem; color:${i === 12 ? "#000" : "rgba(255,255,255,0.6)"}; font-weight:${i === 12 ? "700" : "400"}; line-height:1.4; cursor:pointer; transition:all 0.18s ease; min-height:44px; display:flex; align-items:center; justify-content:center;"
            >${t}</div>`,
              )
              .join("")}
          </div>
          <p style="font-size:0.65rem; color:rgba(255,255,255,0.25); text-align:center; margin-top:0.6rem; font-family:'Orbitron',sans-serif; letter-spacing:0.08em;">HAZ CLIC EN LAS CASILLAS PARA MARCARLAS</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.4rem;">
          <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid var(--m-accent,#00F5FF); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
            <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:var(--m-accent,#00F5FF); font-weight:700; white-space:nowrap; padding-top:1px;">ADMIN</span>
            <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">Define los jugadores, elige si se juega por <strong>categorías</strong> o en modo <strong>general</strong>, genera el código de sala, visualiza quién está conectado, inicia la partida y lanza las balotas.</span>
          </div>
          <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid rgba(255,255,255,0.2); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
            <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:rgba(255,255,255,0.4); font-weight:700; white-space:nowrap; padding-top:1px;">JUGADOR</span>
            <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">Ingresa con el código, recibe su tablero literario y marca las casillas en tiempo real conforme se anuncian las balotas.</span>
          </div>
        </div>
      `,
      difficulty: 3,
      players: "Multijugador",
      team: [
        {
          initials: "DR",
          name: "Daniel Felipe Ramírez Navarro",
          role: "Integrante del equipo",
          photo: "./src/img/bingo-literario/dr.jpg",
        },
        {
          initials: "SG",
          name: "Santiago Gaviria Acevedo",
          role: "Integrante del equipo",
          photo: "./src/img/bingo-literario/sg.jpg",
        },
        {
          initials: "BM",
          name: "Brahian Stiven Monsalve Idarraga",
          role: "Integrante del equipo",
          photo: "./src/img/bingo-literario/sm.jpg",
        },
      ],
    },
    {
      id: 5,
      number: "05",
      title: "Y esa pregunta?",
      emoji: "🤔❓",
      accent: "#7C3AED",
      accentBg: "rgba(124,58,237,0.12)",
      tags: ["PHP", "JS", "CSS", "SQL"],
      shortDesc:
        "Trivia competitiva por fichas: responde rápido, gana más puntos y lleva tu ficha al top.",
      howToPlay: `
    <p>Un juego de preguntas al estilo Kahoot. Compite en equipo según tu ficha respondiendo preguntas de opción múltiple antes de que se acabe el tiempo. ¡La velocidad importa!</p>
    <ul>
      <li>🎮 El administrador crea la sala y comparte un <strong>PIN único</strong> para unirse.</li>
      <li>🔑 Ingresa el PIN, escoge tu <strong>nombre de usuario</strong> y selecciona la <strong>ficha</strong> a la que perteneces.</li>
      <li>❓ Se mostrará una pregunta con varias opciones de respuesta.</li>
      <li>⚡ <strong>Responde lo más rápido posible</strong>: entre más rápido respondas, más puntos obtienes.</li>
      <li>✅ Solo las respuestas correctas suman puntos, la velocidad define cuántos.</li>
      <li>❌ Una respuesta incorrecta no suma puntos, sin importar la velocidad.</li>
      <li>🏆 Al final, el jugador con más puntos acumulados gana la partida.</li>
    </ul>
  `,
      difficulty: 3,
      players: "Multijugador",
      team: [
        {
          initials: "CR",
          name: "Cesar Augusto Rodas",
          role: "Integrante",
          photo: "",
        },
        {
          initials: "MH",
          name: "Mateo Hoyos Hernandez",
          role: "Integrante",
          photo: "",
        },
      ],
    },
    {
      id: 6,
      number: "06",
      title: "CardMatch",
      emoji: "🃏",
      accent: "#10B981",
      accentBg: "rgba(16,185,129,0.10)",
      tags: ["JS", "CSS", "PHP"],
      shortDesc: "Encuentra pares de cartas y mejora tu memoria.",
      howToPlay: `
        <p>El clásico juego de memoria con un toque moderno. Pon a prueba tu capacidad de recordar la posición de las cartas.</p>
        <ul>
  <li>🎴 Se muestra una cuadrícula de cartas boca abajo.</li>
  <li>👆 El jugador debe seleccionar dos cartas para voltearlas.</li>
  <li>✅ Si las cartas son iguales, permanecen visibles y el jugador gana <strong>20 puntos</strong>.</li>
  <li>❌ Si no coinciden, se vuelven a ocultar y el jugador pierde <strong>5 puntos</strong>.</li>
  <li>🎯 El objetivo es encontrar todas las parejas con la mayor cantidad de puntos posible.</li>
  <li>📊 Se registran los movimientos, las parejas encontradas y el puntaje obtenido.</li>
</ul>

<div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.6rem;">

  <div style="display:flex; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid var(--m-accent,#10B981); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
    <span style="font-family:'Orbitron'; font-size:0.6rem; color:var(--m-accent,#10B981); font-weight:700;">ADMINISTRADOR</span>
    <span style="font-size:0.83rem; color:rgba(255,255,255,0.65);">
      Gestiona los mazos de cartas, crea nuevos, edita su información y agrega o elimina cartas. 
      También puede administrar jugadores y consultar estadísticas generales del sistema.
    </span>
  </div>

  <div style="display:flex; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid rgba(255,255,255,0.2); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
    <span style="font-family:'Orbitron'; font-size:0.6rem; color:rgba(255,255,255,0.4); font-weight:700;">JUGADOR</span>
    <span style="font-size:0.83rem; color:rgba(255,255,255,0.65);">
      Inicia sesión, selecciona un mazo y una dificultad, juega para obtener puntos y puede consultar sus estadísticas, ranking y partidas realizadas.
    </span>
  </div>

</div>
      `,
      difficulty: 2,
      players: "1 jugador",
      team: [
        {
          initials: "AA",
          name: "Jerson Estiven Bedoya",
          role: "Integrante del equipo",
          photo: "",
        },
        {
          initials: "BB",
          name: "Cristoffer Arley Jaramillo",
          role: "Integrante del equipo",
          photo: "",
        },
        {
          initials: "CC",
          name: "Diego Fernando Aponte",
          role: "Integrante del equipo",
          photo: "",
        },
      ],
    },
  ];

  /* ----------------------------------------------------------
     INYECTAR ESTILOS
  ---------------------------------------------------------- */
  const style = document.createElement("style");
  style.textContent = `

  /* === OVERLAY === */
  .gz-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px) saturate(1.4);
    -webkit-backdrop-filter: blur(12px) saturate(1.4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    cursor: auto;
  }
  .gz-modal-overlay.gz-open {
    opacity: 1;
    pointer-events: all;
    cursor: auto;
  }

  /* === MODAL BOX === */
  .gz-modal {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 88vh;
    overflow-y: auto;
    overflow-x: hidden;
    background: #0a0a12;
    border: 1px solid var(--m-accent, #00F5FF);
    border-radius: 18px;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.04) inset,
      0 0 60px var(--m-accent-glow, rgba(0,245,255,0.15)),
      0 30px 80px rgba(0,0,0,0.8);
    transform: translateY(30px) scale(0.97);
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease;
    opacity: 0;
    scrollbar-width: thin;
    scrollbar-color: var(--m-accent, #00F5FF) transparent;
    cursor: auto;
  }
  .gz-modal, .gz-modal * { cursor: auto; }
  .gz-modal a, .gz-modal button, .gz-modal .gz-member-card { cursor: pointer; }
  .gz-modal::-webkit-scrollbar { width: 4px; }
  .gz-modal::-webkit-scrollbar-thumb { background: var(--m-accent, #00F5FF); border-radius: 99px; }
  .gz-modal-overlay.gz-open .gz-modal {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  /* noise grain overlay */
  .gz-modal::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }
  .gz-modal > * { position: relative; z-index: 1; }

  /* === HEADER BAND === */
  .gz-modal-header {
    position: relative;
    padding: 2rem 2rem 1.5rem;
    background: var(--m-accent-bg, rgba(0,245,255,0.07));
    border-bottom: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
  }
  .gz-modal-header::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--m-accent, #00F5FF), transparent);
  }

  /* big decorative number */
  .gz-modal-bg-num {
    position: absolute;
    right: -0.2em;
    top: -0.25em;
    font-family: 'Orbitron', sans-serif;
    font-size: 9rem;
    font-weight: 900;
    color: var(--m-accent, #00F5FF);
    opacity: 0.05;
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .gz-modal-emoji {
    font-size: 3rem;
    line-height: 1;
    display: block;
    margin-bottom: 0.6rem;
    filter: drop-shadow(0 0 16px var(--m-accent, #00F5FF));
  }

  .gz-modal-num-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    color: var(--m-accent, #00F5FF);
    opacity: 0.7;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }

  .gz-modal-title {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(1.3rem, 4vw, 2rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.01em;
    text-shadow: 0 0 30px var(--m-accent, #00F5FF);
    margin-bottom: 0.8rem;
  }

  .gz-modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .gz-modal-tag {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    padding: 3px 10px;
    border-radius: 99px;
    border: 1px solid var(--m-accent, #00F5FF);
    color: var(--m-accent, #00F5FF);
    background: rgba(0,0,0,0.3);
    text-transform: uppercase;
  }

  /* close btn */
  .gz-modal-close {
    position: absolute;
    top: 1.1rem;
    right: 1.1rem;
    width: 36px; height: 36px;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.6);
    font-size: 1rem;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s;
    z-index: 10;
  }
  .gz-modal-close:hover {
    border-color: var(--m-accent, #00F5FF);
    color: var(--m-accent, #00F5FF);
    box-shadow: 0 0 14px var(--m-accent, #00F5FF);
    background: rgba(0,0,0,0.4);
  }

  /* === BODY CONTENT === */
  .gz-modal-body {
    padding: 1.8rem 2rem;
  }

  /* section headings inside modal */
  .gz-section-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.58rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--m-accent, #00F5FF);
    opacity: 0.7;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .gz-section-label::before {
    content: "//";
    opacity: 0.5;
  }

  .gz-section-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  /* divider */
  .gz-divider {
    height: 1px;
    background: linear-gradient(90deg, var(--m-accent, #00F5FF), transparent);
    opacity: 0.2;
    margin: 1.6rem 0;
  }

  /* how to play text */
  .gz-howtoplay {
    color: rgba(255,255,255,0.65);
    font-family: 'Exo 2', sans-serif;
    font-size: 0.88rem;
    line-height: 1.75;
  }
  .gz-howtoplay p { margin-bottom: 0.8rem; color: rgba(255,255,255,0.75); }
  .gz-howtoplay ul {
    list-style: none;
    padding: 0; margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .gz-howtoplay ul li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.05);
    border-left: 2px solid var(--m-accent, #00F5FF);
    border-radius: 0 8px 8px 0;
    padding: 0.5rem 0.8rem;
    font-size: 0.84rem;
  }

  /* difficulty */
  .gz-meta-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .gz-meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Exo 2', sans-serif;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.5);
  }
  .gz-meta-item .gz-dots {
    display: flex;
    gap: 3px;
  }
  .gz-meta-item .gz-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .gz-meta-item .gz-dot.on {
    background: var(--m-accent, #00F5FF);
    box-shadow: 0 0 8px var(--m-accent, #00F5FF);
    border-color: transparent;
  }

  /* === TEAM SECTION === */
  .gz-team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    margin-top: 0.8rem;
  }

  .gz-member-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .gz-member-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--m-accent, #00F5FF), transparent);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }
  .gz-member-card:hover::before { opacity: 1; }
  .gz-member-card:hover {
    border-color: var(--m-accent, #00F5FF);
    box-shadow:
      0 0 0 1px var(--m-accent, #00F5FF),
      0 0 40px var(--m-accent-glow, rgba(0,245,255,0.2)),
      0 16px 48px rgba(0,0,0,0.6);
    transform: translateY(-6px);
  }

  /* photo — fills full card width, tall portrait */
  .gz-member-photo {
    width: 100%;
    aspect-ratio: 3 / 4;
    border-radius: 18px 18px 0 0;
    border: none;
    border-bottom: 2px solid var(--m-accent, #00F5FF);
    overflow: hidden;
    position: relative;
    background: #0d0d1a;
    flex-shrink: 0;
    transition: filter 0.3s;
  }

  /* color-tint overlay — works on white-bg photos too */
  .gz-member-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--m-accent, #00F5FF);
    mix-blend-mode: color;
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 1;
  }
  /* bottom gradient — name reveal on hover */
  .gz-member-photo::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.72) 0%,
      rgba(0,0,0,0.2) 40%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 2;
  }
  .gz-member-card:hover .gz-member-photo::after { opacity: 0.28; }
  .gz-member-card:hover .gz-member-photo::before { opacity: 1; }

  .gz-member-photo img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.45s ease;
  }
  .gz-member-card:hover .gz-member-photo img {
    transform: scale(1.06);
  }

  /* fallback initials */
  .gz-member-photo .gz-initials {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'Orbitron', sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--m-accent, #00F5FF);
    background:
      radial-gradient(ellipse at 50% 60%, var(--m-accent-bg, rgba(0,245,255,0.1)) 0%, transparent 70%),
      repeating-linear-gradient(
        -45deg,
        rgba(255,255,255,0.01) 0px,
        rgba(255,255,255,0.01) 1px,
        transparent 1px,
        transparent 8px
      );
  }


  /* dashed border when no photo */
  .gz-member-photo.gz-no-photo {
    border: 2px dashed rgba(255,255,255,0.15);
    border-bottom: 2px dashed rgba(255,255,255,0.15);
    border-radius: 18px 18px 0 0;
  }
  .gz-member-card:hover .gz-member-photo.gz-no-photo {
    border-color: var(--m-accent, #00F5FF);
    border-style: dashed;
  }
  .gz-member-photo.gz-no-photo .gz-initials {
    color: rgba(255,255,255,0.25);
  }

  /* photo hint hidden — no overlay */
  .gz-photo-hint { display: none; }

  /* === INTERACTIVE BINGO BOARD === */
  .eb-cell {
    position: relative;
    overflow: hidden;
  }
  .eb-cell:hover:not(.eb-free) {
    border-color: var(--m-accent, #00F5FF) !important;
    color: #fff !important;
    background: rgba(255,255,255,0.08) !important;
    transform: scale(1.04);
    box-shadow: 0 0 12px var(--m-accent-glow, rgba(0,245,255,0.2));
  }
  .eb-cell.eb-marked:not(.eb-free) {
    background: var(--m-accent, #00F5FF) !important;
    border-color: var(--m-accent, #00F5FF) !important;
    color: #000 !important;
    font-weight: 700 !important;
    box-shadow: 0 0 18px var(--m-accent-glow, rgba(0,245,255,0.45));
  }
  /* ripple on mark */
  .eb-cell::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--m-accent, #00F5FF);
    border-radius: 8px;
    opacity: 0;
    transform: scale(0);
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: none;
  }
  .eb-cell.eb-pop::after {
    opacity: 0.25;
    transform: scale(1.6);
  }
  .eb-free {
    cursor: default !important;
  }

  /* info below photo */
  .gz-member-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.9rem 0.8rem 1rem;
    background: rgba(0,0,0,0.2);
    transition: background 0.3s;
  }
  .gz-member-card:hover .gz-member-info {
    background: rgba(0,0,0,0.45);
  }

  .gz-member-name {
    font-family: 'Exo 2', sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    transition: color 0.3s;
  }
  .gz-member-card:hover .gz-member-name {
    color: var(--m-accent, #00F5FF);
  }
  .gz-member-role {
    font-family: 'Exo 2', sans-serif;
    font-size: 0.71rem;
    color: var(--m-accent, #00F5FF);
    opacity: 0.8;
    font-weight: 400;
    letter-spacing: 0.04em;
    transition: opacity 0.3s;
  }
  .gz-member-card:hover .gz-member-role {
    opacity: 1;
  }

  /* === PLAY BUTTON === */
  .gz-play-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 0.5rem;
    padding: 0.7rem 1.8rem;
    background: var(--m-accent, #00F5FF);
    color: #000;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: none;
    border-radius: 99px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 0 24px var(--m-accent-glow, rgba(0,245,255,0.4));
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .gz-play-btn:hover {
    transform: scale(1.04);
    box-shadow: 0 0 40px var(--m-accent-glow, rgba(0,245,255,0.6));
  }
  .gz-play-disabled {
    opacity: 0.35;
    cursor: not-allowed !important;
    pointer-events: none;
    filter: grayscale(0.5);
  }
  .gz-play-disabled:hover {
    transform: none;
    box-shadow: 0 0 24px var(--m-accent-glow, rgba(0,245,255,0.4));
  }

  .gz-modal-footer {
    padding: 0 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .gz-footer-note {
    font-family: 'Exo 2', sans-serif;
    font-size: 0.72rem;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.05em;
  }

  /* scrollbar for webkit inside modal */
  @media (max-width: 600px) {
    .gz-modal-body, .gz-modal-footer { padding-left: 1.2rem; padding-right: 1.2rem; }
    .gz-modal-header { padding: 1.5rem 1.2rem 1.2rem; }
    .gz-modal-bg-num { font-size: 6rem; }
    .gz-team-grid { grid-template-columns: repeat(3, 1fr); gap: 0.7rem; }
  }

  `;
  document.head.appendChild(style);

  /* ----------------------------------------------------------
     BINGO BOARD — interactivity (mark / unmark cells)
  ---------------------------------------------------------- */
  function initBingoBoard() {
    const board = document.getElementById("edubingo-board");
    if (!board) return;

    const cells = board.querySelectorAll(".eb-cell");
    const accent =
      getComputedStyle(document.getElementById("gzModal"))
        .getPropertyValue("--m-accent")
        .trim() || "#00F5FF";

    cells.forEach((cell, i) => {
      if (i === 12) {
        cell.classList.add("eb-free");
        return; // FREE center — always marked, not togglable
      }
      cell.addEventListener("click", () => {
        const isMarked = cell.classList.toggle("eb-marked");

        // apply/remove inline styles that the template set
        if (isMarked) {
          cell.style.background = accent;
          cell.style.borderColor = accent;
          cell.style.color = "#000";
          cell.style.fontWeight = "700";
        } else {
          cell.style.background = "rgba(255,255,255,0.04)";
          cell.style.borderColor = "rgba(255,255,255,0.08)";
          cell.style.color = "rgba(255,255,255,0.6)";
          cell.style.fontWeight = "400";
        }

        // brief pop ripple
        cell.classList.add("eb-pop");
        setTimeout(() => cell.classList.remove("eb-pop"), 320);
      });
    });
  }
  const overlay = document.createElement("div");
  overlay.className = "gz-modal-overlay";
  overlay.id = "gzModalOverlay";
  overlay.innerHTML = `<div class="gz-modal" id="gzModal" role="dialog" aria-modal="true"></div>`;
  document.body.appendChild(overlay);

  const modal = document.getElementById("gzModal");

  /* ----------------------------------------------------------
     HELPERS
  ---------------------------------------------------------- */
  function buildDots(difficulty) {
    let html = "";
    for (let i = 0; i < 4; i++) {
      html += `<div class="gz-dot${i < difficulty ? " on" : ""}"></div>`;
    }
    return html;
  }

  function buildTagHtml(tags) {
    return tags.map((t) => `<span class="gz-modal-tag">${t}</span>`).join("");
  }

  function buildMemberCard(m) {
    const hasPhoto = !!m.photo;
    return `
      <div class="gz-member-card">
        <div class="gz-member-photo${hasPhoto ? "" : " gz-no-photo"}">
          ${
            hasPhoto
              ? `<img src="${m.photo}" alt="${m.name}" loading="lazy">`
              : `<div class="gz-initials">${m.initials}</div>`
          }
          <div class="gz-photo-hint">
            <div class="gz-hint-icon">📷</div>
            <span>Foto del integrante</span>
          </div>
        </div>
        <div class="gz-member-info">
          <div class="gz-member-name">${m.name}</div>
          <div class="gz-member-role">${m.role}</div>
        </div>
      </div>
    `;
  }

  function openModal(game) {
    /* set CSS variables for theming */
    modal.style.setProperty("--m-accent", game.accent);
    modal.style.setProperty("--m-accent-bg", game.accentBg);
    /* derive a soft glow from the accent */
    modal.style.setProperty("--m-accent-glow", game.accent + "44");

    modal.innerHTML = `
      <!-- HEADER -->
      <div class="gz-modal-header">
        <div class="gz-modal-bg-num">${game.number}</div>
        <button class="gz-modal-close" id="gzModalClose" aria-label="Cerrar">✕</button>
        <span class="gz-modal-emoji">${game.emoji}</span>
        <div class="gz-modal-num-label">Juego ${game.number}</div>
        <h2 class="gz-modal-title">${game.title}</h2>
        <div class="gz-modal-tags">${buildTagHtml(game.tags)}</div>
      </div>

      <!-- BODY -->
      <div class="gz-modal-body">

        <!-- META -->
        <div class="gz-meta-row">
          <div class="gz-meta-item">
            <span>Dificultad</span>
            <div class="gz-dots">${buildDots(game.difficulty)}</div>
          </div>
          <div class="gz-meta-item">👤 ${game.players}</div>
        </div>

        <div class="gz-divider"></div>

        <!-- HOW TO PLAY -->
        <div class="gz-section-label">cómo se juega</div>
        <div class="gz-section-title">Mecánica del Juego</div>
        <div class="gz-howtoplay">${game.howToPlay}</div>

        <div class="gz-divider"></div>

        <!-- TEAM -->
        <div class="gz-section-label">equipo desarrollador</div>
        <div class="gz-section-title">Quiénes lo Construyeron</div>
        <div class="gz-team-grid" style="grid-template-columns: repeat(${game.team.length}, minmax(0, 220px)); justify-content: center;">
  ${game.team.map(buildMemberCard).join("")}
</div>

      </div><!-- end body -->

      <!-- FOOTER -->
      <div class="gz-modal-footer">
        <span class="gz-footer-note">GAMEZONE · Juego ${game.number} de 06</span>
       
      </div>
    `;

    overlay.classList.add("gz-open");
    document.body.style.overflow = "hidden";

    /* initialize interactive bingo board if present */
    requestAnimationFrame(() => initBingoBoard());

    /* close button */
    document
      .getElementById("gzModalClose")
      .addEventListener("click", closeModal);
  }

  function closeModal() {
    overlay.classList.remove("gz-open");
    document.body.style.overflow = "";
  }

  /* click outside => close */
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  /* ESC key => close */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ----------------------------------------------------------
     BIND — intercept game card clicks
  ---------------------------------------------------------- */
  function bindCards() {
    const cards = document.querySelectorAll(".game-card");
    cards.forEach((card, i) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const game = GAMES_DATA[i];
        if (game) openModal(game);
      });
    });
  }

  /* Wait for DOM to be ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindCards);
  } else {
    bindCards();
  }
})();
