/* ============================================
   MODAL — DATOS DE CADA JUEGO
   ============================================ */

const gamesData = [
  {
    id: 1,
    emoji: '📝',
    name: 'CruciCode',
    accent: '#FFD700',
    num: '// juego 01',
    desc: 'Rellena las casillas del tablero con letras para formar palabras horizontales y verticales. Las pistas aparecen en pantalla y las palabras se obtienen desde la base de datos, cambiando cada día para ofrecerte un reto completamente fresco.',
    tags: ['PHP', 'JS', 'SQL'],
    difficulty: 3,
    players: '1 jugador',
    sena: {
      ficha: '2977825',
      programa: 'Análisis y Desarrollo de Software',
      año: '2024 — 2026',
      instructor: 'Juan Camilo'
    },
    team: [
      { initials: 'JR', name: 'Juan Rodríguez', role: 'Programador principal', desc: 'Lógica del juego, conexión PHP y base de datos SQL.' },
      { initials: 'ML', name: 'María López', role: 'Diseño y UI', desc: 'Maquetación CSS, animaciones y experiencia de usuario.' },
      { initials: 'CA', name: 'Carlos Arango', role: 'Base de datos', desc: 'Diseño del esquema SQL y gestión de palabras diarias.' }
    ]
  },
  {
    id: 2,
    emoji: '💰',
    name: '¿Quién Quiere Ser Millonario?',
    accent: '#FF9F00',
    num: '// juego 02',
    desc: 'Responde 15 preguntas de dificultad creciente. Usa tus 4 comodines estratégicamente: 50/50, llamada, público y pausa. Cada acierto suma puntos acumulados. Un solo fallo y pierdes todo lo ganado hasta ese momento.',
    tags: ['PHP', 'JS', 'CSS', 'SQL'],
    difficulty: 4,
    players: '1 jugador',
    sena: {
      ficha: '2977825',
      programa: 'Análisis y Desarrollo de Software',
      año: '2024 — 2026',
      instructor: 'Juan Camilo'
    },
    team: [
      { initials: 'SA', name: 'Sofía Álvarez', role: 'Programadora principal', desc: 'Motor de preguntas, comodines y sistema de puntaje.' },
      { initials: 'DM', name: 'Diego Mora', role: 'Diseño y UI', desc: 'Interfaz visual estilo TV, animaciones y sonidos.' },
      { initials: 'LG', name: 'Laura Gómez', role: 'Base de datos', desc: 'Banco de preguntas, categorías y niveles de dificultad.' }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Salva el conocimiento",
    emoji: "🪢",
    accent: "#FF00A0",
    accentBg: "rgba(255,0,160,0.12)",
    tags: ["PHP", "JS", "SQL"],
    shortDesc:
      "Descifra la palabra secreta antes de que se complete el dibujo del ahorcado.",
    howToPlay: `
    <p>En <strong>Salva el conocimiento</strong>, tu objetivo es adivinar la palabra secreta letra por letra. Cada error completa una parte del dibujo del ahorcado. Si el dibujo se completa antes de descubrir la palabra, pierdes.</p>

    <div id="ahorcado-board" style="margin:1.4rem 0; font-family:'Exo 2',sans-serif; user-select:none;">
      <div style="display:flex; justify-content:center; gap:6px; margin-bottom:1rem; flex-wrap:wrap;">
        ${["", "", "", "", "", "", "", "", "", ""].map((l, i) =>
      <div class="ah-cell" data-idx="${i}" style="min-width:30px; height:42px; border-bottom:2px solid var(--m-accent,#FF00A0); text-align:center; font-size:1.2rem; font-weight:700; color:rgba(255,255,255,0.85); display:flex; align-items:center; justify-content:center;">${l}</div>
    ).join("")}
      </div>
      <p style="font-size:0.65rem; color:rgba(255,255,255,0.3); text-align:center; font-family:'Orbitron',sans-serif; letter-spacing:0.08em;">Selecciona las letras para descubrir la palabra antes de que se complete el dibujo</p>
    </div>

    <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.6rem;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid var(--m-accent,#FF00A0); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
        <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:var(--m-accent,#FF00A0); font-weight:700; white-space:nowrap; padding-top:1px;">BIBLIOTECARIA</span>
        <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">
          Administra la partida: selecciona las palabras de la biblioteca, genera el código de acceso para los jugadores y permite que se registren. Supervisa el progreso de cada jugador y garantiza el correcto desarrollo de la partida.
        </span>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; background:rgba(255,255,255,0.03); border-left:2px solid rgba(255,255,255,0.2); border-radius:0 8px 8px 0; padding:0.6rem 0.9rem;">
        <span style="font-family:'Orbitron',sans-serif; font-size:0.6rem; color:rgba(255,255,255,0.4); font-weight:700; white-space:nowrap; padding-top:1px;">JUGADOR</span>
        <span style="font-size:0.83rem; color:rgba(255,255,255,0.65); line-height:1.6;">
          Cada jugador recibe un tablero con guiones que representan la palabra secreta. Selecciona letras para descubrirla. Cada error completa una parte del dibujo del ahorcado. Descifra la palabra antes de que se complete el dibujo.
        </span>
      </div>
    </div>

    <ul style="margin-top:0.8rem; font-size:0.82rem; color:rgba(255,255,255,0.7); line-height:1.5;">
      <li>La palabra secreta aparece inicialmente como guiones.</li>
      <li>Selecciona letras para intentar adivinar la palabra.</li>
      <li>Las letras correctas se revelan en su posición exacta.</li>
      <li>Cada error completa una parte del ahorcado; máximo seis errores permitidos.</li>
      <li>Las palabras provienen de la biblioteca administrada por la bibliotecaria.</li>
      <li>Tu tiempo corre  adivina mas rapido y  seras el ganador</li>
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
    emoji: '🧠',
    name: 'Trivia Quiz',
    accent: '#00F5FF',
    num: '// juego 04',
    desc: 'Responde preguntas de opción múltiple sobre cultura general, ciencia e historia contra el reloj. Cada respuesta correcta suma puntos según la velocidad de respuesta. Tu puntaje queda registrado en el ranking global guardado en SQL.',
    tags: ['PHP', 'JS', 'SQL'],
    difficulty: 3,
    players: 'Ranking global',
    sena: {
      ficha: '2977825',
      programa: 'Análisis y Desarrollo de Software',
      año: '2024 — 2026',
      instructor: 'Juan Camilo'
    },
    team: [
      { initials: 'NR', name: 'Natalia Ríos', role: 'Programadora principal', desc: 'Sistema de preguntas, timer y tabla de ranking en PHP.' },
      { initials: 'OS', name: 'Omar Salcedo', role: 'Diseño y UI', desc: 'Animaciones de respuesta, barra de tiempo y efectos.' },
      { initials: 'PV', name: 'Paula Vargas', role: 'Base de datos', desc: 'Banco de preguntas, ranking global y sistema de puntaje.' }
    ]
  },
  {
    id: 5,
    emoji: '🔤',
    name: 'Adivina la Palabra',
    accent: '#7C3AED',
    num: '// juego 05',
    desc: 'Escribe una palabra de 5 letras. Las casillas se colorean: verde si la letra está en la posición correcta, amarillo si existe pero en otro lugar, gris si no pertenece a la palabra. Tienes 6 intentos para acertar. Al estilo Wordle.',
    tags: ['PHP', 'JS', 'CSS'],
    difficulty: 3,
    players: '1 jugador',
    sena: {
      ficha: '2977825',
      programa: 'Análisis y Desarrollo de Software',
      año: '2024 — 2026',
      instructor: 'Juan Camilo'
    },
    team: [
      { initials: 'IS', name: 'Isabella Soto', role: 'Programadora principal', desc: 'Motor de validación de palabras y sistema de colores.' },
      { initials: 'MH', name: 'Miguel Herrera', role: 'Diseño y UI', desc: 'Grid de casillas, animaciones flip y teclado virtual.' },
      { initials: 'TC', name: 'Tatiana Cruz', role: 'Base de datos', desc: 'Diccionario de palabras válidas de 5 letras en español.' }
    ]
  },
  {
    id: 6,
    emoji: '🃏',
    name: 'Memory Cards',
    accent: '#10B981',
    num: '// juego 06',
    desc: 'Un tablero de cartas boca abajo. Voltea dos a la vez: si coinciden desaparecen, si no vuelven a ocultarse. El objetivo es encontrar todos los pares en el menor tiempo posible. Tu récord de tiempo queda guardado en el servidor.',
    tags: ['JS', 'CSS', 'PHP'],
    difficulty: 1,
    players: '1 jugador',
    sena: {
      ficha: '2977825',
      programa: 'Análisis y Desarrollo de Software',
      año: '2024 — 2026',
      instructor: 'Juan Camilo'
    },
    team: [
      { initials: 'RF', name: 'Renata Flores', role: 'Programadora principal', desc: 'Lógica de emparejamiento, shuffle y guardado de récords.' },
      { initials: 'JB', name: 'Julián Bermúdez', role: 'Diseño y UI', desc: 'Animación de volteo 3D de cartas y diseño del tablero.' },
      { initials: 'AG', name: 'Andrea Gil', role: 'Base de datos', desc: 'Tabla de récords y gestión del tiempo con PHP.' }
    ]
  }
];

/* ============================================
   TAGS HTML POR TECNOLOGÍA
   ============================================ */
function tagHtml(t) {
  const map = { PHP: 'tag-php', JS: 'tag-js', CSS: 'tag-css', SQL: 'tag-sql' };
  return `<span class="tag ${map[t] || ''}">${t}</span>`;
}

/* ============================================
   DIFICULTAD — DOTS
   ============================================ */
function diffDots(n) {
  let html = '<div class="dots">';
  for (let i = 1; i <= 4; i++) html += `<div class="dot${i <= n ? ' on' : ''}"></div>`;
  return html + '</div>';
}

/* ============================================
   ABRIR MODAL
   ============================================ */
function openModal(index) {
  const g = gamesData[index];
  const overlay = document.getElementById('gameModal');
  const box = overlay.querySelector('.modal-box');

  // Acento dinámico
  box.style.setProperty('--modal-accent', g.accent);
  box.style.boxShadow = `0 0 60px rgba(0,0,0,0.6), 0 0 0 1px ${g.accent}40`;
  box.style.borderColor = g.accent + '80';
  overlay.querySelector('.modal-top-bar').style.background =
    `linear-gradient(90deg, transparent, ${g.accent}, var(--pink), transparent)`;

  // Lado izquierdo
  overlay.querySelector('.modal-game-emoji').textContent = g.emoji;
  overlay.querySelector('.modal-game-name').textContent = g.name;
  overlay.querySelector('.modal-game-num').textContent = g.num;
  overlay.querySelector('.modal-desc').textContent = g.desc;
  overlay.querySelector('.modal-tags').innerHTML = g.tags.map(tagHtml).join('');
  overlay.querySelector('.modal-diff-dots').innerHTML = diffDots(g.difficulty);
  overlay.querySelector('.modal-players-val').textContent = g.players;
  overlay.querySelector('.sena-ficha').textContent = 'Ficha: ' + g.sena.ficha;
  overlay.querySelector('.sena-programa').textContent = g.sena.programa;
  overlay.querySelector('.sena-año').textContent = g.sena.año + ' · Instructor: ' + g.sena.instructor;

  // Equipo
  overlay.querySelector('.modal-members').innerHTML = g.team.map(m => `
    <div class="modal-member">
      <div class="modal-avatar" style="border-color:${g.accent}; color:${g.accent};">${m.initials}</div>
      <div class="modal-member-info">
        <span class="modal-member-name">${m.name}</span>
        <span class="modal-member-role" style="color:${g.accent};">${m.role}</span>
        <span class="modal-member-desc">${m.desc}</span>
      </div>
    </div>
  `).join('');

  // Mostrar
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ============================================
   CERRAR MODAL
   ============================================ */
function closeModal() {
  document.getElementById('gameModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Cerrar con clic en el overlay (fuera del box)
document.getElementById('gameModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// Cerrar con Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
