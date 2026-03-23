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
      shortDesc:
        "Completa el crucigrama con palabras temáticas antes de que se acabe el tiempo.",
      howToPlay: `
        <p>Un crucigrama digital donde debes rellenar una cuadrícula con letras para formar palabras correctas en horizontal y vertical. Las palabras son gestionadas por el administrador desde una base de datos SQL y pueden cambiar en cualquier momento.</p>

        <div id="cw-game" style="margin:1.6rem 0; font-family:'Exo 2',sans-serif; user-select:none;">

          <!-- GRID 10x10 -->
          <div id="cw-grid" style="
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 3px;
            margin-bottom: 1.4rem;
            max-width: 380px;
            margin-left: auto;
            margin-right: auto;
          "></div>

          <!-- CLUE ACTIVE -->
          <div id="cw-clue-active" style="
            min-height: 38px;
            background: rgba(255,215,0,0.08);
            border-left: 3px solid #FFD700;
            border-radius: 0 8px 8px 0;
            padding: 0.55rem 1rem;
            font-size: 0.82rem;
            color: rgba(255,255,255,0.75);
            margin-bottom: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          ">
            <span style="font-family:'Orbitron',sans-serif; font-size:0.58rem; color:#FFD700; font-weight:700; white-space:nowrap;">PISTA</span>
            <span id="cw-clue-text">Haz clic en una celda para ver su pista.</span>
          </div>

          <!-- PISTAS LIST -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem 1.4rem;">

            <div>
              <div style="font-family:'Orbitron',sans-serif; font-size:0.58rem; letter-spacing:0.15em; color:#FFD700; opacity:0.7; margin-bottom:0.5rem;">HORIZONTAL →</div>
              <div id="cw-clues-h" style="display:flex; flex-direction:column; gap:0.35rem;"></div>
            </div>

            <div>
              <div style="font-family:'Orbitron',sans-serif; font-size:0.58rem; letter-spacing:0.15em; color:#FFD700; opacity:0.7; margin-bottom:0.5rem;">VERTICAL ↓</div>
              <div id="cw-clues-v" style="display:flex; flex-direction:column; gap:0.35rem;"></div>
            </div>

          </div>

          <!-- ACTIONS -->
          <div style="display:flex; gap:0.7rem; margin-top:1.2rem; flex-wrap:wrap;">
            <button id="cw-btn-verify" style="
              font-family:'Orbitron',sans-serif; font-size:0.65rem; font-weight:700;
              letter-spacing:0.1em; padding:0.55rem 1.2rem;
              background:rgba(255,215,0,0.15); border:1px solid #FFD700;
              color:#FFD700; border-radius:99px; cursor:pointer;
              transition:all 0.2s;
            ">✓ VERIFICAR</button>
            <button id="cw-btn-reset" style="
              font-family:'Orbitron',sans-serif; font-size:0.65rem; font-weight:700;
              letter-spacing:0.1em; padding:0.55rem 1.2rem;
              background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.15);
              color:rgba(255,255,255,0.45); border-radius:99px; cursor:pointer;
              transition:all 0.2s;
            ">↺ REINICIAR</button>
            <span id="cw-msg" style="
              font-family:'Exo 2',sans-serif; font-size:0.8rem;
              color:rgba(255,255,255,0.4); align-self:center;
            "></span>
          </div>

        </div>

        <div style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.2rem;">
          <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid #FFD700; border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
            <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:#FFD700; font-weight:700; white-space:nowrap; padding-top:1px;">ADMIN</span>
            <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">Crea crucigramas personalizados definiendo el <strong>tamaño de la cuadrícula</strong>, las <strong>palabras</strong>, sus <strong>pistas</strong> y el <strong>tiempo máximo</strong>. Puede editar o eliminar crucigramas existentes y consultar el <strong>ranking</strong> de cada uno.</span>
          </div>
          <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid rgba(255,255,255,0.2); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
            <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:rgba(255,255,255,0.4); font-weight:700; white-space:nowrap; padding-top:1px;">JUGADOR</span>
            <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">Se registra, inicia sesión y accede al <strong>panel de juego</strong> donde ve todos los crucigramas disponibles con su ranking. Selecciona uno, lo completa antes de que acabe el temporizador y su tiempo queda guardado en el <strong>top 5</strong>.</span>
          </div>
        </div>

        <ul>
          <li>📋 Haz clic en una celda activa para seleccionarla y escribe la letra con el teclado.</li>
          <li>⏱️ Hay un <strong>temporizador</strong> por crucigrama — complétalo antes de que se acabe.</li>
          <li>⏳ Si realizas algun tipo de trampa seras penalizado por un<strong>tiempo de espera de 2 minutos</strong></li>
          <li>🏆 Solo los 5 mejores tiempos queda registrado en el <strong>ranking</strong> de jugadores</li>
          <li>✏️ Puedes editar tu <strong>perfil</strong> desde el panel del jugador.</li>
        </ul>
      `,
      difficulty: 3,
      players: "1 jugador",
      team: [
        {
          initials: "foto",
          name: "Juan Sebastian Trujillo Serna",
          role: "Desarrollador",
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
  <p>Inspirado en el famoso concurso de televisión. Responde preguntas de conocimiento general, usa tus comodines con sabiduría y acumula la mayor puntuación posible para escalar en el ranking.</p>

  <div style="margin:1.4rem 0; font-family:'Exo 2',sans-serif;">

    <p style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:var(--m-accent,#FF9F00); font-weight:700; letter-spacing:0.1em; margin-bottom:0.8rem;">// SISTEMA DE PUNTAJE</p>

    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:5px; margin-bottom:1.2rem;">
      ${[
        {
          label: "Fácil",
          val: "$100.000",
          color: "rgba(100,200,100,0.15)",
          border: "rgba(100,200,100,0.4)",
          text: "rgba(120,220,120,1)",
        },
        {
          label: "Media",
          val: "$150.000",
          color: "rgba(255,159,0,0.12)",
          border: "var(--m-accent,#FF9F00)",
          text: "var(--m-accent,#FF9F00)",
        },
        {
          label: "Difícil",
          val: "$175.000",
          color: "rgba(255,80,80,0.1)",
          border: "rgba(255,100,100,0.4)",
          text: "rgba(255,120,120,1)",
        },
      ]
        .map(
          ({ label, val, color, border, text }) => `
        <div style="background:${color}; border:1px solid ${border}; border-radius:8px; padding:8px 6px; text-align:center;">
          <div style="font-size:0.6rem; color:${text}; font-family:'Orbitron',sans-serif; font-weight:700; margin-bottom:3px;">${label}</div>
          <div style="font-size:0.7rem; color:rgba(255,255,255,0.85); font-weight:600;">${val}</div>
        </div>
      `,
        )
        .join("")}
    </div>

    <p style="font-size:0.72rem; color:rgba(255,255,255,0.4); margin-bottom:1.2rem; font-style:italic;">💡 Las primeras 3 preguntas siempre son fáciles para ayudarte a empezar.</p>

    <p style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:var(--m-accent,#FF9F00); font-weight:700; letter-spacing:0.1em; margin-bottom:0.8rem;">// COMODINES</p>

    <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px; margin-bottom:1.2rem;">
      ${[
        {
          icon: "50/50",
          label: "Cincuenta y Cincuenta",
          desc: "Elimina 2 opciones incorrectas",
        },
        {
          icon: "📞",
          label: "Llamada a un amigo",
          desc: "Consulta a un contacto — otorga 30 seg. extra",
        },
        {
          icon: "🔄",
          label: "Cambiar pregunta",
          desc: "Cambia por otra de la misma dificultad",
        },
        {
          icon: "👥",
          label: "Ayuda del público",
          desc: "La audiencia vota — otorga 1 min. extra",
        },
      ]
        .map(
          ({ icon, label, desc }) => `
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.6rem 0.8rem; display:flex; align-items:flex-start; gap:0.6rem;">
          <span style="font-size:1rem; min-width:24px; text-align:center;">${icon}</span>
          <div>
            <div style="font-size:0.65rem; color:var(--m-accent,#FF9F00); font-weight:700; margin-bottom:2px;">${label}</div>
            <div style="font-size:0.72rem; color:rgba(255,255,255,0.55); line-height:1.5;">${desc}</div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>

  </div>

  <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.4rem;">
    <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid var(--m-accent,#FF9F00); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
      <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:var(--m-accent,#FF9F00); font-weight:700; white-space:nowrap; padding-top:1px;">ADMIN</span>
      <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">Gestiona las preguntas por categoría y dificultad, administra las cuentas de jugadores y controla la configuración general de la partida.</span>
    </div>
    <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid rgba(255,255,255,0.2); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
      <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:rgba(255,255,255,0.4); font-weight:700; white-space:nowrap; padding-top:1px;">JUGADOR</span>
      <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">Elige una categoría, responde las preguntas antes de que se agote el tiempo (<strong>2 min por pregunta</strong>), usa tus comodines una sola vez y retírate cuando quieras para guardar tu puntaje. Solo se guarda tu <strong>mejor resultado</strong> en el ranking.</span>
    </div>
  </div>
`,
      difficulty: 4,
      players: "1 jugador",
      team: [
        {
          initials: "FP",
          name: "Franklin Andres Penilla Jaramillo",
          role: "Integrante del equipo",
          photo: "",
        },
        {
          initials: "YG",
          name: "Yesly Yasiri Gomez Giraldo",
          role: "Integrante del equipo",
          photo: "",
        },
        {
          initials: "CS",
          name: "Cristian Camilo Bermudez Sierra",
          role: "Integrante del equipo",
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
          photo: "./src/img/ahorcado/aa.jpg",
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
        <p>CardMatch es un juego de memoria donde debes encontrar pares de cartas iguales en una cuadrícula 4x4. Voltea dos cartas por turno: si coinciden, ganas <strong>20 puntos</strong> y permanecen descubiertas; si no coinciden, se ocultan y pierdes <strong>5 puntos</strong>. ¡Completa todos los pares con la mayor puntuación posible!</p>

        

<div id="cardmatch-game" style="margin:1.4rem 0; font-family:'Exo 2',sans-serif; user-select:none;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:0.8rem;">
    <span style="font-family:'Orbitron',sans-serif; font-size:0.7rem; color:var(--m-accent,#10B981); font-weight:700; letter-spacing:0.1em;">PUNTAJE</span>
    <span id="cm-score" style="font-family:'Orbitron',sans-serif; font-size:1.8rem; color:var(--m-accent,#10B981); font-weight:900; text-shadow:0 0 12px var(--m-accent,#10B981);">0</span>
  </div>
  <div id="cm-grid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:1rem;"></div>
</div>

<div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.6rem;">

  <div style="display:flex; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid var(--m-accent,#10B981); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
    <span style="font-family:'Orbitron'; font-size:0.6rem; color:var(--m-accent,#10B981); font-weight:700;">ADMINISTRADOR</span>
    <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">
  Gestiona los <strong>mazos de cartas</strong>, crea nuevos, edita su información y administra las cartas disponibles. 
  Además, puede gestionar los <strong>jugadores</strong> y consultar estadísticas generales de las partidas jugadas.
</span>
  </div>

  <div style="display:flex; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid rgba(255,255,255,0.2); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
    <span style="font-family:'Orbitron'; font-size:0.6rem; color:rgba(255,255,255,0.4); font-weight:700;">JUGADOR</span>
    <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">
  Inicia sesión, selecciona un <strong>mazo</strong> y un nivel de <strong>dificultad</strong>, juega para obtener la mayor cantidad de puntos posible encontrando las parejas. 
  Al finalizar, puedes consultar tus <strong>estadísticas</strong>, revisar tu posición en el <strong>ranking</strong> y ver el historial de tus partidas realizadas.
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

  /* === CARDMATCH GAME STYLES === */
  #cardmatch-game {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 1rem;
  }

  #cm-grid > div {
    transition: all 0.2s ease;
  }

  #cm-grid > div:active:not(.matched) {
    transform: scale(0.95);
  }

  #cm-grid > div.matched {
    pointer-events: none;
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

  /* === CROSSWORD STYLES === */
  #cw-game {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 1.2rem;
  }

  .cw-cell {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(0.5rem, 1.5vw, 0.75rem);
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.15s ease;
    box-sizing: border-box;
    cursor: default;
  }

  .cw-cell.cw-active {
    background: rgba(255,215,0,0.08);
    border: 1px solid rgba(255,215,0,0.3);
    cursor: pointer;
  }

  .cw-cell.cw-active:hover {
    background: rgba(255,215,0,0.15);
    border-color: rgba(255,215,0,0.6);
  }

  .cw-cell.cw-selected {
    background: rgba(255,215,0,0.22) !important;
    border: 1.5px solid #FFD700 !important;
    box-shadow: 0 0 10px rgba(255,215,0,0.35);
    color: #FFD700;
  }

  .cw-cell.cw-highlight {
    background: rgba(255,215,0,0.1) !important;
    border-color: rgba(255,215,0,0.4) !important;
  }

  .cw-cell.cw-correct {
    background: rgba(74,222,128,0.18) !important;
    border-color: #4ade80 !important;
    color: #4ade80 !important;
    box-shadow: 0 0 8px rgba(74,222,128,0.3);
  }

  .cw-cell.cw-wrong {
    background: rgba(248,113,113,0.18) !important;
    border-color: #f87171 !important;
    color: #f87171 !important;
    box-shadow: 0 0 8px rgba(248,113,113,0.3);
  }

  .cw-cell.cw-blocked {
    background: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.04);
  }

  .cw-cell-num {
    position: absolute;
    top: 2px;
    left: 3px;
    font-size: 0.38rem;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    color: #FFD700;
    opacity: 0.8;
    line-height: 1;
    pointer-events: none;
  }

  .cw-cell-letter {
    font-size: clamp(0.5rem, 1.6vw, 0.78rem);
    line-height: 1;
    pointer-events: none;
  }

  .cw-clue-item {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    font-family: 'Exo 2', sans-serif;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.5);
    padding: 0.3rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .cw-clue-item:hover {
    background: rgba(255,215,0,0.06);
    color: rgba(255,255,255,0.75);
  }

  .cw-clue-item.cw-clue-active {
    background: rgba(255,215,0,0.1);
    color: #FFD700;
  }

  .cw-clue-item.cw-clue-done {
    color: rgba(74,222,128,0.7);
    text-decoration: line-through;
  }

  .cw-clue-num {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.6rem;
    font-weight: 700;
    color: #FFD700;
    opacity: 0.8;
    min-width: 14px;
    padding-top: 1px;
  }

  #cw-btn-verify:hover {
    background: rgba(255,215,0,0.25) !important;
    box-shadow: 0 0 14px rgba(255,215,0,0.3);
  }

  #cw-btn-reset:hover {
    background: rgba(255,255,255,0.08) !important;
    border-color: rgba(255,255,255,0.3) !important;
    color: rgba(255,255,255,0.7) !important;
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

  function initCardMatchGame() {
    const gameContainer = document.getElementById("cardmatch-game");
    if (!gameContainer) return;

    const grid = document.getElementById("cm-grid");
    const scoreDisplay = document.getElementById("cm-score");
    const accent = getComputedStyle(document.getElementById("gzModal")).getPropertyValue("--m-accent").trim() || "#10B981";

    const symbols = ["🍎", "🍎", "📚", "📚", "🎮", "🎮", "🐶", "🐶", "🌙", "🌙", "⚡", "⚡", "🎵", "🎵", "🔥", "🔥"];
    let shuffled = [...symbols].sort(() => 0.5 - Math.random());
    
    let first = null;
    let second = null;
    let lock = false;
    let score = 0;

    grid.innerHTML = "";
    shuffled.forEach((symbol) => {
      const card = document.createElement("div");
      card.dataset.value = symbol;
      card.style.cssText = `
        height:60px;
        background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.1);
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:24px;
        cursor:pointer;
        color:transparent;
        transition:all 0.2s ease;
      `;

      card.addEventListener("mouseenter", function() {
        if (!this.classList.contains("matched") && this !== first) {
          this.style.background = "rgba(255,255,255,0.08)";
          this.style.borderColor = accent;
        }
      });

      card.addEventListener("mouseleave", function() {
        if (!this.classList.contains("matched") && this !== first) {
          this.style.background = "rgba(255,255,255,0.04)";
          this.style.borderColor = "rgba(255,255,255,0.1)";
        }
      });

      card.addEventListener("click", function() {
        flipCard(card);
      });

      grid.appendChild(card);
    });

    function flipCard(card) {
      if (lock || card === first || card.classList.contains("matched")) return;

      card.textContent = card.dataset.value;
      card.style.color = "#fff";
      card.style.background = "rgba(255,255,255,0.1)";

      if (!first) {
        first = card;
        return;
      }

      second = card;
      lock = true;

      if (first.dataset.value === second.dataset.value) {
        first.classList.add("matched");
        second.classList.add("matched");
        first.style.background = accent;
        second.style.background = accent;
        first.style.borderColor = accent;
        second.style.borderColor = accent;
        first.style.color = "#000";
        second.style.color = "#000";
        first.style.fontWeight = "700";
        second.style.fontWeight = "700";
        first.style.cursor = "default";
        second.style.cursor = "default";
        
        score += 20;
        scoreDisplay.textContent = score;
        resetTurn();
      } else {
        score -= 5;
        scoreDisplay.textContent = score;

        setTimeout(() => {
          first.textContent = "";
          second.textContent = "";
          first.style.color = "transparent";
          second.style.color = "transparent";
          first.style.background = "rgba(255,255,255,0.04)";
          second.style.background = "rgba(255,255,255,0.04)";
          first.style.borderColor = "rgba(255,255,255,0.1)";
          second.style.borderColor = "rgba(255,255,255,0.1)";
          resetTurn();
        }, 700);
      }
    }

    function resetTurn() {
      first = null;
      second = null;
      lock = false;
    }
  }

  /* ----------------------------------------------------------
     CROSSWORD MINI-GAME
     Cuadrícula 10x10 con 6 palabras temáticas del SENA
  ---------------------------------------------------------- */
  function initCrossword() {
    const gameEl = document.getElementById("cw-game");
    if (!gameEl) return;

    /*
      Palabras y sus coordenadas en la grilla 10x10 (fila, col, dirección)
      Todas las palabras tienen relación con el SENA / desarrollo de software

      Palabras:
        1H  FICHA     fila 0, col 0, horizontal  (5 letras)
        2H  ADMIN     fila 2, col 3, horizontal  (5 letras)
        3H  LOGIN     fila 4, col 1, horizontal  (5 letras)
        4H  APRENDIZ  fila 6, col 0, horizontal  (8 letras)
        5V  SENA      fila 0, col 5, vertical    (4 letras)
        6V  DATOS     fila 2, col 8, vertical    (5 letras)
    */

    const WORDS = [
      {
        id: 1,
        word: "FICHA",
        dir: "H",
        row: 0,
        col: 0,
        clue: "Número que identifica tu grupo de formación en el SENA",
      },
      {
        id: 2,
        word: "ADMIN",
        dir: "H",
        row: 2,
        col: 3,
        clue: "Rol con permisos totales para gestionar el sistema",
      },
      {
        id: 3,
        word: "LOGIN",
        dir: "H",
        row: 4,
        col: 1,
        clue: "Proceso de autenticación para entrar a una plataforma",
      },
      {
        id: 4,
        word: "APRENDIZ",
        dir: "H",
        row: 6,
        col: 0,
        clue: "Estudiante que recibe formación técnica en el SENA",
      },
      {
        id: 5,
        word: "SENA",
        dir: "V",
        row: 0,
        col: 5,
        clue: "Institución nacional de formación profesional en Colombia",
      },
      {
        id: 6,
        word: "DATOS",
        dir: "V",
        row: 2,
        col: 8,
        clue: "Información almacenada en tablas dentro de una base de datos",
      },
    ];

    /* Build cell map: key = "row-col" => { letter, wordIds[] } */
    const cellMap = {};
    const wordStarts = {}; // "row-col" => number label

    let labelCounter = 1;
    // Assign number labels — sort words by row then col for consistent numbering
    const sorted = [...WORDS].sort((a, b) => a.row - b.row || a.col - b.col);
    sorted.forEach((w) => {
      const key = `${w.row}-${w.col}`;
      if (!wordStarts[key]) {
        wordStarts[key] = labelCounter++;
      }
      w.label = wordStarts[key];
    });

    WORDS.forEach((w) => {
      for (let i = 0; i < w.word.length; i++) {
        const r = w.dir === "H" ? w.row : w.row + i;
        const c = w.dir === "H" ? w.col + i : w.col;
        const key = `${r}-${c}`;
        if (!cellMap[key]) cellMap[key] = { letter: w.word[i], wordIds: [], userInput: "" };
        else cellMap[key].letter = w.word[i]; // should match if crossings are correct
        cellMap[key].wordIds.push(w.id);
      }
    });

    /* State */
    let selectedCell = null;
    let selectedWord = null;

    /* Build grid DOM */
    const gridEl = document.getElementById("cw-grid");
    gridEl.innerHTML = "";

    const cellEls = {}; // key => element

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        const key = `${r}-${c}`;
        const div = document.createElement("div");
        div.className = "cw-cell";
        div.dataset.key = key;

        if (cellMap[key]) {
          div.classList.add("cw-active");

          // number label
          if (wordStarts[key]) {
            const num = document.createElement("span");
            num.className = "cw-cell-num";
            num.textContent = wordStarts[key];
            div.appendChild(num);
          }

          // letter display
          const letterSpan = document.createElement("span");
          letterSpan.className = "cw-cell-letter";
          letterSpan.textContent = "";
          div.appendChild(letterSpan);

          div.addEventListener("click", () => onCellClick(key, div));
        } else {
          div.classList.add("cw-blocked");
        }

        gridEl.appendChild(div);
        cellEls[key] = div;
      }
    }

    /* Build clue lists */
    const cluesH = document.getElementById("cw-clues-h");
    const cluesV = document.getElementById("cw-clues-v");
    cluesH.innerHTML = "";
    cluesV.innerHTML = "";

    WORDS.forEach((w) => {
      const item = document.createElement("div");
      item.className = "cw-clue-item";
      item.id = `cw-clue-${w.id}`;
      item.innerHTML = `<span class="cw-clue-num">${w.label}</span><span>${w.clue}</span>`;
      item.addEventListener("click", () => selectWord(w));
      (w.dir === "H" ? cluesH : cluesV).appendChild(item);
    });

    /* Keyboard input */
    document.addEventListener("keydown", onKeyDown);

    function getCellsOfWord(w) {
      const keys = [];
      for (let i = 0; i < w.word.length; i++) {
        const r = w.dir === "H" ? w.row : w.row + i;
        const c = w.dir === "H" ? w.col + i : w.col;
        keys.push(`${r}-${c}`);
      }
      return keys;
    }

    function selectWord(w) {
      // Deselect previous
      clearHighlights();

      selectedWord = w;

      // Highlight all cells of word
      const keys = getCellsOfWord(w);
      keys.forEach((k) => {
        if (cellEls[k]) cellEls[k].classList.add("cw-highlight");
      });

      // Select first empty cell or first cell
      const firstEmpty = keys.find((k) => !cellMap[k].userInput);
      const toSelect = firstEmpty || keys[0];
      selectCell(toSelect);

      // Update active clue display
      document.getElementById("cw-clue-text").textContent = w.clue;

      // Highlight clue item
      document.querySelectorAll(".cw-clue-item").forEach((el) => el.classList.remove("cw-clue-active"));
      const clueEl = document.getElementById(`cw-clue-${w.id}`);
      if (clueEl) clueEl.classList.add("cw-clue-active");
    }

    function selectCell(key) {
      if (selectedCell && cellEls[selectedCell]) {
        cellEls[selectedCell].classList.remove("cw-selected");
      }
      selectedCell = key;
      if (cellEls[key]) cellEls[key].classList.add("cw-selected");
    }

    function clearHighlights() {
      Object.values(cellEls).forEach((el) => {
        el.classList.remove("cw-highlight", "cw-selected");
      });
      document.querySelectorAll(".cw-clue-item").forEach((el) => el.classList.remove("cw-clue-active"));
    }

    function onCellClick(key, div) {
      if (!cellMap[key]) return;
      clearHighlights();

      // If clicking a cell that belongs to current word, just move selection
      if (selectedWord && getCellsOfWord(selectedWord).includes(key)) {
        const keys = getCellsOfWord(selectedWord);
        keys.forEach((k) => cellEls[k] && cellEls[k].classList.add("cw-highlight"));
        selectCell(key);
        document.getElementById("cw-clue-text").textContent = selectedWord.clue;
        const clueEl = document.getElementById(`cw-clue-${selectedWord.id}`);
        if (clueEl) clueEl.classList.add("cw-clue-active");
        return;
      }

      // Pick the first word that contains this cell
      const wordId = cellMap[key].wordIds[0];
      const word = WORDS.find((w) => w.id === wordId);
      if (word) selectWord(word);
    }

    function onKeyDown(e) {
      if (!selectedCell || !selectedWord) return;
      const modal = document.getElementById("gzModal");
      if (!modal || !modal.closest(".gz-open")) return;

      const key = e.key.toUpperCase();

      if (e.key === "Backspace") {
        e.preventDefault();
        // Clear current cell and move back
        if (cellMap[selectedCell] && cellMap[selectedCell].userInput) {
          cellMap[selectedCell].userInput = "";
          const letterSpan = cellEls[selectedCell].querySelector(".cw-cell-letter");
          if (letterSpan) letterSpan.textContent = "";
          cellEls[selectedCell].classList.remove("cw-correct", "cw-wrong");
        } else {
          // Move to previous cell
          moveCursor(-1);
        }
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const dir = (e.key === "ArrowRight" || e.key === "ArrowDown") ? 1 : -1;
        moveCursor(dir);
        return;
      }

      if (/^[A-ZÁÉÍÓÚÑ]$/.test(key) || /^[a-záéíóúñ]$/.test(e.key)) {
        e.preventDefault();
        if (!cellMap[selectedCell]) return;

        const letter = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
        cellMap[selectedCell].userInput = letter;

        const letterSpan = cellEls[selectedCell].querySelector(".cw-cell-letter");
        if (letterSpan) letterSpan.textContent = letter;
        cellEls[selectedCell].classList.remove("cw-correct", "cw-wrong");

        // Auto-advance
        moveCursor(1);
      }
    }

    function moveCursor(dir) {
      if (!selectedWord || !selectedCell) return;
      const keys = getCellsOfWord(selectedWord);
      const idx = keys.indexOf(selectedCell);
      const nextIdx = idx + dir;
      if (nextIdx >= 0 && nextIdx < keys.length) {
        selectCell(keys[nextIdx]);
      }
    }

    /* Verify button */
    document.getElementById("cw-btn-verify").addEventListener("click", () => {
      let allCorrect = true;
      let anyFilled = false;

      Object.entries(cellMap).forEach(([key, data]) => {
        const el = cellEls[key];
        if (!el) return;
        el.classList.remove("cw-correct", "cw-wrong");

        if (data.userInput) {
          anyFilled = true;
          if (data.userInput === data.letter) {
            el.classList.add("cw-correct");
          } else {
            el.classList.add("cw-wrong");
            allCorrect = false;
          }
        } else {
          allCorrect = false;
        }
      });

      const msg = document.getElementById("cw-msg");
      if (!anyFilled) {
        msg.textContent = "Escribe al menos una letra.";
        msg.style.color = "rgba(255,255,255,0.4)";
      } else if (allCorrect) {
        msg.textContent = "✅ ¡Crucigrama completo!";
        msg.style.color = "#4ade80";
      } else {
        msg.textContent = "Revisa las celdas en rojo.";
        msg.style.color = "#f87171";
      }
    });

    /* Reset button */
    document.getElementById("cw-btn-reset").addEventListener("click", () => {
      Object.values(cellMap).forEach((data) => { data.userInput = ""; });
      Object.values(cellEls).forEach((el) => {
        const span = el.querySelector(".cw-cell-letter");
        if (span) span.textContent = "";
        el.classList.remove("cw-correct", "cw-wrong", "cw-selected", "cw-highlight");
      });
      selectedCell = null;
      selectedWord = null;
      document.getElementById("cw-clue-text").textContent = "Haz clic en una celda para ver su pista.";
      document.getElementById("cw-msg").textContent = "";
      document.querySelectorAll(".cw-clue-item").forEach((el) => el.classList.remove("cw-clue-active", "cw-clue-done"));
    });

    /* Cleanup keydown listener when modal closes */
    gameEl._cwCleanup = () => document.removeEventListener("keydown", onKeyDown);
  }

  /* ----------------------------------------------------------
     MODAL DOM
  ---------------------------------------------------------- */
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
    // Cleanup previous crossword keyboard listener if any
    const prevGame = document.getElementById("cw-game");
    if (prevGame && prevGame._cwCleanup) prevGame._cwCleanup();

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

    /* initialize interactive mini-games */
    requestAnimationFrame(() => {
      initBingoBoard();
      initCardMatchGame();
      initCrossword();
    });

    /* close button */
    document
      .getElementById("gzModalClose")
      .addEventListener("click", closeModal);
  }

  function closeModal() {
    // Cleanup crossword keyboard listener
    const cwGame = document.getElementById("cw-game");
    if (cwGame && cwGame._cwCleanup) cwGame._cwCleanup();

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