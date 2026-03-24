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
      { initials: 'JR', name: 'Juan Rodríguez',   role: 'Programador principal', desc: 'Lógica del juego, conexión PHP y base de datos SQL.' },
      { initials: 'ML', name: 'María López',       role: 'Diseño y UI',           desc: 'Maquetación CSS, animaciones y experiencia de usuario.' },
      { initials: 'CA', name: 'Carlos Arango',     role: 'Base de datos',         desc: 'Diseño del esquema SQL y gestión de palabras diarias.' }
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
      { initials: 'SA', name: 'Sofía Álvarez',    role: 'Programadora principal', desc: 'Motor de preguntas, comodines y sistema de puntaje.' },
      { initials: 'DM', name: 'Diego Mora',        role: 'Diseño y UI',            desc: 'Interfaz visual estilo TV, animaciones y sonidos.' },
      { initials: 'LG', name: 'Laura Gómez',       role: 'Base de datos',          desc: 'Banco de preguntas, categorías y niveles de dificultad.' }
    ]
  },
  {
    id: 3,
    emoji: '🪢',
    name: 'El Ahorcado',
    accent: '#FF00A0',
    num: '// juego 03',
    desc: 'Se muestra una palabra oculta representada por guiones. Selecciona letras del teclado en pantalla para intentar adivinarla. Tienes 6 intentos antes de que el dibujo del ahorcado se complete. Palabras aleatorias servidas desde SQL.',
    tags: ['PHP', 'JS', 'SQL'],
    difficulty: 2,
    players: '1 jugador',
    sena: {
      ficha: '2977825',
      programa: 'Análisis y Desarrollo de Software',
      año: '2024 — 2026',
      instructor: 'Juan Camilo'
    },
    team: [
      { initials: 'AC', name: 'Andrés Castro',    role: 'Programador principal', desc: 'Lógica del juego, dibujo SVG progresivo del ahorcado.' },
      { initials: 'VP', name: 'Valeria Peña',     role: 'Diseño y UI',           desc: 'Teclado visual, animaciones de letras y feedback al usuario.' },
      { initials: 'FT', name: 'Felipe Torres',    role: 'Base de datos',         desc: 'Diccionario de palabras por categoría y dificultad.' }
    ]
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
      { initials: 'NR', name: 'Natalia Ríos',     role: 'Programadora principal', desc: 'Sistema de preguntas, timer y tabla de ranking en PHP.' },
      { initials: 'OS', name: 'Omar Salcedo',     role: 'Diseño y UI',            desc: 'Animaciones de respuesta, barra de tiempo y efectos.' },
      { initials: 'PV', name: 'Paula Vargas',     role: 'Base de datos',          desc: 'Banco de preguntas, ranking global y sistema de puntaje.' }
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
      { initials: 'IS', name: 'Isabella Soto',    role: 'Programadora principal', desc: 'Motor de validación de palabras y sistema de colores.' },
      { initials: 'MH', name: 'Miguel Herrera',   role: 'Diseño y UI',            desc: 'Grid de casillas, animaciones flip y teclado virtual.' },
      { initials: 'TC', name: 'Tatiana Cruz',     role: 'Base de datos',          desc: 'Diccionario de palabras válidas de 5 letras en español.' }
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
      { initials: 'RF', name: 'Renata Flores',    role: 'Programadora principal', desc: 'Lógica de emparejamiento, shuffle y guardado de récords.' },
      { initials: 'JB', name: 'Julián Bermúdez',  role: 'Diseño y UI',            desc: 'Animación de volteo 3D de cartas y diseño del tablero.' },
      { initials: 'AG', name: 'Andrea Gil',       role: 'Base de datos',          desc: 'Tabla de récords y gestión del tiempo con PHP.' }
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
  overlay.querySelector('.modal-game-name').textContent  = g.name;
  overlay.querySelector('.modal-game-num').textContent   = g.num;
  overlay.querySelector('.modal-desc').textContent       = g.desc;
  overlay.querySelector('.modal-tags').innerHTML         = g.tags.map(tagHtml).join('');
  overlay.querySelector('.modal-diff-dots').innerHTML    = diffDots(g.difficulty);
  overlay.querySelector('.modal-players-val').textContent = g.players;
  overlay.querySelector('.sena-ficha').textContent       = 'Ficha: ' + g.sena.ficha;
  overlay.querySelector('.sena-programa').textContent    = g.sena.programa;
  overlay.querySelector('.sena-año').textContent         = g.sena.año + ' · Instructor: ' + g.sena.instructor;

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
document.getElementById('gameModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Cerrar con Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
