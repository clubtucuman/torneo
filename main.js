const equiposData = {
  A: {
    zonas: {
      A1: [
        { nombre: "EL Acceso", puntos: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 7, gc: 3, dg: +4 },
        { nombre: "Chaco", puntos: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 1, dg: +1 },
        { nombre: "Zapiola", puntos: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 3, gc: 3, dg: 0 },
        { nombre: "Lo de Beto", puntos: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 3, gc: 3, dg: 0 },
        { nombre: "Los Eucaliptus", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Motorhead", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "La Noite", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "As de Basto", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "La Nueva Guardia", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Centenario", puntos: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 1, gc: 2, dg: -1 },
        { nombre: "La 2002", puntos: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 3, gc: 7, dg: -4 },
        // ... hasta Equipo A1-10
      ],
      A2: [
        { nombre: "Semen Up", puntos: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 4, gc: 3, dg: +1 },
        { nombre: "Villa Primavera", puntos: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 3, gc: 2, dg: +1 },
        { nombre: "Perro Viejo", puntos: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 1, dg: +1 },
        { nombre: "La Roma", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "El JRS", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Jarabillos", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Salen Brasas", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Jardin Espacial", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Ateno Yiyo", puntos: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 3, gc: 4, dg: -1 },
        { nombre: "Monoblock 420", puntos: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 2, gc: 3, dg: -1 },
        { nombre: "Barreme la Veredita", puntos: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 1, gc: 2, dg: -1 },
        // ... hasta Equipo A2-10
      ]
    },
    descensos: true
  },
  B: {
    zonas: {
      B1: [
        { nombre: "Equipo B1-1", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-2", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-3", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-4", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-5", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-6", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-7", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-8", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-9", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B1-10", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        // ... hasta Equipo B1-10
      ],
      B2: [
        { nombre: "Equipo B2-1", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-2", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-3", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-4", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-5", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-6", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-7", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-8", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-9", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo B2-10", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        // ... hasta Equipo B2-10
      ]
    },
    descensos: true
  },
  C: {
    zonas: {
      C1: [
        { nombre: "Equipo C1-1", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-2", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-3", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-4", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-5", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-6", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-7", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-8", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-9", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C1-10", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        // ... hasta Equipo C1-10
      ],
      C2: [
        { nombre: "Equipo C2-1", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-2", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-3", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-4", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-5", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-6", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-7", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-8", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-9", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Equipo C2-10", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        // ... hasta Equipo C2-10
      ]
    },
    descensos: false
  },
  "+38": {
    zonas: {
      "+38-A": [
        { nombre: "Motorhead 38", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Chaco 38", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Los Toledos", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Barreme la Veredita 38", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Huracanes de Bernal", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "El Ciclon", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Olivieri", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Fuerte Apache", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Bumbi 4D", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Los Euka 38", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Dos Avenidas", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        // ... hasta Equipo +38A-10
      ],
      "+38-B": [
        { nombre: "Centenario 38", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Chuker", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Chumbimba Srs", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Lo de Beto", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Sector 7G", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "La Braschineta", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Fiorentina", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "El Astor Villa", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "El Rejunte", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Los Andes", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "4 De Copas 38", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        // ... hasta Equipo +38B-10
      ]
    },
    descensos: false,
    copaConsuelo: true
  },
  "+45": {
    equipos: [
        { nombre: "Olivieri 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "La Barra", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Athletic Bilbao", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Astor Villa 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Motorhead 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Ediq", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Motor V 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Nueva Roma", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Barreme la Veredita 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Lo de Beto 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "4 De Copas", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
        { nombre: "Centenario 45", puntos: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    ],
    descensos: false
  }
};

function generarEquipos(zona, cantidad) {
  const equipos = [];
  for (let i = 1; i <= cantidad; i++) {
    const pj = Math.floor(Math.random() * 20) + 1;
    const pg = Math.floor(Math.random() * pj);
    const pe = Math.floor(Math.random() * (pj - pg));
    const pp = pj - pg - pe;
    const gf = Math.floor(Math.random() * 60);
    const gc = Math.floor(Math.random() * 60);
    const dg = gf - gc;
    equipos.push({
      nombre: `Equipo ${zona}-${i}`,
      puntos: pg * 3 + pe,
      pj,
      pg,
      pe,
      pp,
      gf,
      gc,
      dg
    });
  }
  equipos.sort((a, b) => b.puntos - a.puntos);
  return equipos;
}

function mostrarSeccion(seccionId) {
document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(seccionId).style.display = 'block';
}

const goleadoresPorCategoria = {
  'A': [
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'Los Leones', goles: 0  },
  ],
  'B': [
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: ' ', equipo: 'Los Guerreros', goles: 0  },
    { jugador: '', equipo: 'El Rejunte', goles: 0  },
  ],
  'C': [
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'Los Pibes', goles: 0 },
    { jugador: '', equipo: 'El Barrio', goles: 0 },
  ],
  '+38': [
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'Veteranos', goles: 0 },
    { jugador: '', equipo: 'Los Cancheros', goles: 0 },
  ],
  '+45': [
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Catedral', goles: 0 },
    { jugador: '', equipo: 'La Vieja Guardia', goles: 0 },
    { jugador: '', equipo: 'Veteranos FC', goles: 0 },
  ]
};

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.section');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  const seccionMostrar = document.getElementById(id);
  seccionMostrar.style.display = 'block';

  if (id === 'tabla') {
    // Mostrar solo la categoría principal (si querés)
    document.getElementById('titulo-categoria').textContent = 'Tabla de Posiciones';
  }
}

// Reiniciar todo al hacer clic en el título
document.querySelector('header h1').addEventListener('click', () => {
  mostrarSeccion('tabla');
});

function mostrarGoleadores(categoria) {
  const container = document.getElementById('goleadores-container');
  container.innerHTML = '';

  const tabla = document.createElement('table');
  tabla.className = 'tabla-goleadores';

  tabla.innerHTML = `
    <thead>
      <tr>
        <th>Jugador</th>
        <th>Equipo</th>
        <th>Goles</th>
      </tr>
    </thead>
    <tbody>
      ${goleadoresPorCategoria[categoria].map(g =>
        `<tr>
          <td>${g.jugador}</td>
          <td>${g.equipo}</td>
          <td>${g.goles}<0 d>
        </tr>`
      ).join('')}
    </tbody>
  `;

  container.appendChild(tabla);
}

function volverInicio() {
  const secciones = document.querySelectorAll('.section');
  secciones.forEach(sec => sec.style.display = 'none');
}

// Ejemplo de datos de partidos
const partidosData = {
  'A': [
    'La Noite vs La Nueva Guardia - Fecha 09/06',
    'As de Basto vs Motorhead - Fecha 09/06',
    'El JRS vs Jardin Espacial - Fecha 09/06'
  ],
  'B': [
    // 'Equipo B1 vs Equipo B2 - Fecha 11/06',
    // 'Equipo B3 vs Equipo B4 - Fecha 12/06',
    // 'Equipo B5 vs Equipo B6 - Fecha 13/06'
    'No hay partidos de esta categoria, volve mañana!'
  ],
  'C': [
    // 'Equipo A1 vs Equipo A2 - Fecha 10/06',
    // 'Equipo A3 vs Equipo A4 - Fecha 10/06',
    // 'Equipo A5 vs Equipo A6 - Fecha 11/06'
    'No hay partidos de esta categoria, volve mañana!'
  ],
  '+38': [
    // 'Equipo A1 vs Equipo A2 - Fecha 10/06',
    // 'Equipo A3 vs Equipo A4 - Fecha 10/06',
    // 'Equipo A5 vs Equipo A6 - Fecha 11/06'
    'No hay partidos de esta categoria, volve mañana!'
  ],
  '+45': [
    // 'Equipo A1 vs Equipo A2 - Fecha 10/06',
    // 'Equipo A3 vs Equipo A4 - Fecha 10/06',
    // 'Equipo A5 vs Equipo A6 - Fecha 11/06'
    'No hay partidos de esta categoria, volve mañana!'
  ],
};

function mostrarPartidos(categoria) {
  const container = document.getElementById('partidos-container');
  const lista = partidosData[categoria] || ['Sin datos'];
  container.innerHTML = `
    <h3>Próximos Partidos - Categoría ${categoria}</h3>
    <ul>
      ${lista.map(p => `<li>${p}</li>`).join('')}
    </ul>
  `;
}

function mostrarCategoria(categoria) {
  const container = document.getElementById('tabla-container');
  const titulo = document.getElementById('titulo-categoria');
  container.innerHTML = ''; // Limpiar tabla anterior
  titulo.textContent = `Tabla de Posiciones - Categoría ${categoria}`;

  if (equiposData[categoria].zonas) {
    // Si hay zonas, mostrar cada zona por separado
    for (const zona in equiposData[categoria].zonas) {
      const zonaEquipos = equiposData[categoria].zonas[zona];
      const zonaTitulo = document.createElement('h3');
      zonaTitulo.textContent = `Zona ${zona}`;
      container.appendChild(zonaTitulo);

      const tabla = crearTabla(zonaEquipos);
      container.appendChild(tabla);
    }
  } else if (equiposData[categoria].equipos) {
    // Si no hay zonas, mostrar la tabla única
    const tabla = crearTabla(equiposData[categoria].equipos);
    container.appendChild(tabla);
  }
}

function crearTabla(equipos) {
  const tabla = document.createElement('table');
  tabla.classList.add('tabla-posiciones');
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Pos</th>
      <th>Equipo</th>
      <th>Pts</th>
      <th>PJ</th>
      <th>PG</th>
      <th>PE</th>
      <th>PP</th>
      <th>GF</th>
      <th>GC</th>
      <th>DG</th>
    </tr>
  `;
  tabla.appendChild(thead);

  const tbody = document.createElement('tbody');
  equipos.forEach((equipo, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${equipo.nombre}</td>
      <td>${equipo.puntos}</td>
      <td>${equipo.pj}</td>
      <td>${equipo.pg}</td>
      <td>${equipo.pe}</td>
      <td>${equipo.pp}</td>
      <td>${equipo.gf}</td>
      <td>${equipo.gc}</td>
      <td>${equipo.dg}</td>
    `;
    tbody.appendChild(fila);
  });
  tabla.appendChild(tbody);

  return tabla;
}

window.onload = function() {
  mostrarSeccion('inicio');
};