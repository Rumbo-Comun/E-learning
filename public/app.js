const kpis = [
  {
    label: "Pendientes",
    value: "0 frentes activos",
    detail: "Suma operativa de soporte abierto y vigencias por revisar."
  },
  {
    label: "Registros",
    value: "2 activos",
    detail: "Volumen actual de alumnos con recorrido en marcha."
  },
  {
    label: "Soporte",
    value: "0 entradas abiertas",
    detail: "Solicitudes que siguen esperando intervencion del equipo."
  },
  {
    label: "Sesiones",
    value: "166 sesiones activas",
    detail: "Actividad en vivo dentro del portal y simuladores."
  }
];

const priorities = [
  {
    title: "Salud academica",
    detail: "El progreso promedio esta bajo y puede requerir seguimiento docente.",
    value: "4,6%",
    tone: "red"
  },
  {
    title: "Soporte sin cerrar",
    detail: "No hay tickets acumulados en este momento.",
    value: "0",
    tone: "green"
  },
  {
    title: "Vigencias por vencer",
    detail: "Las vigencias inmediatas estan controladas.",
    value: "0",
    tone: "green"
  }
];

const interventions = [
  {
    title: "Despejar solicitudes de soporte",
    detail: "No hay cola abierta; el modulo esta listo para monitoreo ligero.",
    status: "Revisado",
    action: "Monitoreo continuo"
  },
  {
    title: "Asegurar continuidad de accesos",
    detail: "No hay renovaciones urgentes por escalar en este corte.",
    status: "Revisado",
    action: "Sin bloqueos"
  },
  {
    title: "Sostener ritmo de matriculas",
    detail: "2 matriculas mantienen la operacion academica en curso.",
    status: "Operacion estable",
    action: "Supervision diaria"
  },
  {
    title: "Empujar adopcion y cierre de simuladores",
    detail: "Aun no hay cierres de simulador y el progreso promedio esta en 4.6%.",
    status: "En seguimiento",
    action: "Elevar esta semana"
  }
];

const modules = [
  {
    title: "Usuarios",
    meta: "2 estudiantes - 1 docente",
    detail: "Altas, validaciones y control de acceso."
  },
  {
    title: "Academico",
    meta: "17 cursos publicados",
    detail: "Oferta, estructura curricular y contenidos."
  },
  {
    title: "Instituciones",
    meta: "5 accesos activos - 0 vigencias por vencer",
    detail: "Estructura operativa y continuidad de membresias."
  },
  {
    title: "Registros",
    meta: "2 matriculas activas",
    detail: "Seguimiento del flujo academico en marcha."
  }
];

const institutions = [
  "Instituto Profesional y Tecnico de Veraguas",
  "LMS de administracion",
  "Centro Regional Panama Oeste",
  "Alabama Training Center"
];

let institutionTree = [
  {
    id: 1,
    name: "Instituto Profesional y Tecnico de Veraguas",
    code: "IPTV",
    address: "Veraguas, Panama",
    sites: [
      {
        id: 101,
        name: "Sede",
        code: "S01",
        address: "Sede Principal",
        labs: [{ id: 1001, name: "Laboratorio LMS", code: "LAB-01", address: "Area tecnica" }],
        subSites: [
          { id: 201, name: "Subsede Taller 1", code: "T1", address: "Bloque tecnico", labs: [] },
          { id: 202, name: "Subsede Taller 2", code: "T2", address: "Bloque practico", labs: [] }
        ]
      }
    ]
  }
];

let academicCategories = [
  {
    id: 1,
    code: "AUTO",
    label: "A. Automatizacion",
    color: "#0d4db3",
    courses: [
      { id: 101, code: "AUTO-SFM", name: "Sistema Flexible de manufactura", modules: 10 },
      { id: 102, code: "AUTO-MEC", name: "Mecatronica", modules: 8 },
      { id: 103, code: "AUTO-RF", name: "Sistemas Mecatronicos con RF/codigo de barras", modules: 6 },
      { id: 104, code: "AUTO-PCR", name: "Programacion de PC y robotica", modules: 9 },
      { id: 105, code: "AUTO-VIS", name: "Maquinas de inspeccion visual", modules: 5 },
      { id: 106, code: "AUTO-ROB", name: "Principios de robotica", modules: 7 },
      { id: 107, code: "AUTO-FAB", name: "Principios de automatizacion de fabricas", modules: 6 }
    ]
  },
  {
    id: 2,
    code: "ELEC",
    label: "B. Electronica",
    color: "#0b8b63",
    courses: [
      { id: 201, code: "ELEC-ACDC", name: "Controlador Electrico AC/DC", modules: 6 },
      { id: 202, code: "ELEC-PLC", name: "Controladores Logico-Programables (PLC)", modules: 8 },
      { id: 203, code: "ELEC-MOV", name: "Control de Movimiento", modules: 5 },
      { id: 204, code: "ELEC-PLCS", name: "PLC: solucion de problemas", modules: 7 },
      { id: 205, code: "ELEC-MAC", name: "Solucion de Problemas en Motores AC", modules: 6 },
      { id: 206, code: "ELEC-POT", name: "Control Electronico de Potencia", modules: 5 },
      { id: 207, code: "ELEC-LAP", name: "Control basado en Laptop", modules: 4 }
    ]
  },
  {
    id: 3,
    code: "ELECT",
    label: "C. Electricidad",
    color: "#d6a100",
    courses: [
      { id: 301, code: "ELECT-MOT", name: "Simulador Virtual de Control de Motores Electricos", modules: 8 },
      { id: 302, code: "ELECT-ACDC", name: "Simulador Virtual de Sistemas Electricos AC/DC", modules: 8 },
      { id: 303, code: "ELECT-CTL", name: "Simulador Virtual de Control Electronico", modules: 6 },
      { id: 304, code: "ELECT-MON", name: "Montaje Electrico", modules: 7 },
      { id: 305, code: "ELECT-FRE", name: "Freno de Motores", modules: 4 },
      { id: 306, code: "ELECT-RED", name: "Reductores de Voltaje", modules: 4 },
      { id: 307, code: "ELECT-SEN", name: "Sensores Electronicos", modules: 5 },
      { id: 308, code: "ELECT-CAB", name: "Cableado de Sistemas Electricos", modules: 6 },
      { id: 309, code: "ELECT-SOL", name: "Solucion de Problemas de Motores Electricos", modules: 7 }
    ]
  },
  {
    id: 4,
    code: "FLUID",
    label: "D. Potencia de fluidos",
    color: "#1f7ed0",
    courses: [
      { id: 401, code: "FLUID-NEU", name: "Simulador Virtual de Neumatica Basica", modules: 5 },
      { id: 402, code: "FLUID-HID", name: "Simulador Virtual de Hidraulica Basica", modules: 5 },
      { id: 403, code: "FLUID-PH", name: "Principios de Hidraulica", modules: 6 },
      { id: 404, code: "FLUID-SH", name: "Solucion de Problemas Hidraulicos", modules: 6 },
      { id: 405, code: "FLUID-SN", name: "Solucion de Problemas Neumaticos", modules: 6 },
      { id: 406, code: "FLUID-NA", name: "Neumatica Avanzada", modules: 7 },
      { id: 407, code: "FLUID-HA", name: "Hidraulica Avanzada", modules: 7 }
    ]
  },
  {
    id: 5,
    code: "VERDE",
    label: "E. Tecnologia verde",
    color: "#0b8b63",
    courses: [
      { id: 501, code: "VERDE-EOL", name: "Conceptos Eolicos", modules: 4 },
      { id: 502, code: "VERDE-TUR", name: "Solucion de Problemas en Turbinas Electricas", modules: 6 },
      { id: 503, code: "VERDE-SOL", name: "Concepto de Sistema Solar", modules: 5 },
      { id: 504, code: "VERDE-FOT", name: "Analisis Fotovoltaico", modules: 6 },
      { id: 505, code: "VERDE-ALT", name: "Energia Alternativa", modules: 4 },
      { id: 506, code: "VERDE-REG", name: "Sistema de Rejilla Solar", modules: 5 }
    ]
  },
  {
    id: 6,
    code: "LEAN",
    label: "F. Manufactura ajustada (Lean)",
    color: "#6842b8",
    courses: [
      { id: 601, code: "LEAN-INT", name: "Introduccion a la Manufactura Ajustada", modules: 5 },
      { id: 602, code: "LEAN-5S", name: "5S", modules: 3 },
      { id: 603, code: "LEAN-MPT", name: "Mantenimiento de Produccion Total", modules: 6 },
      { id: 604, code: "LEAN-FLU", name: "Flujo de Procesos Lean", modules: 5 },
      { id: 605, code: "LEAN-MAP", name: "Mapa de Flujo de Valor", modules: 4 }
    ]
  },
  {
    id: 7,
    code: "MECN",
    label: "G. Mecanizado",
    color: "#00758f",
    courses: [
      { id: 701, code: "MECN-CNC", name: "CNC", modules: 8 },
      { id: 702, code: "MECN-TOR", name: "Torneado", modules: 6 },
      { id: 703, code: "MECN-MOL", name: "Molienda", modules: 6 },
      { id: 704, code: "MECN-REF", name: "Refrigerantes", modules: 3 },
      { id: 705, code: "MECN-ENG", name: "Engranajes", modules: 5 },
      { id: 706, code: "MECN-MOLD", name: "Moldes", modules: 5 }
    ]
  },
  {
    id: 8,
    code: "MANUF",
    label: "H. Proceso de manufactura",
    color: "#ec6c16",
    courses: [
      { id: 801, code: "MANUF-ENS", name: "Ensamble", modules: 4 },
      { id: 802, code: "MANUF-SOL", name: "Soldadura", modules: 6 },
      { id: 803, code: "MANUF-PLA", name: "Planos", modules: 5 },
      { id: 804, code: "MANUF-TORQ", name: "Torquimetro", modules: 4 },
      { id: 805, code: "MANUF-DIM", name: "Dimensiones y tolerancias", modules: 5 }
    ]
  },
  {
    id: 9,
    code: "MAT",
    label: "I. Materiales",
    color: "#1459bf",
    courses: [
      { id: 901, code: "MAT-CER", name: "CERAMICA - Principio de Ceramica", modules: 0 },
      { id: 902, code: "MAT-COMP", name: "COMPOSICIONES - Principio de Composiciones", modules: 0 },
      { id: 903, code: "MAT-PLA", name: "PRINCIPIOS_PLASTICOS - Principio de Plasticos", modules: 0 },
      { id: 904, code: "MAT-TERM", name: "TRATAMIENTO_TERMICO - Principio de Tratamiento Termico", modules: 0 },
      { id: 905, code: "MAT-NF", name: "MATERIALES_NO_FERROSOS - Principio de Materiales No Ferrosos", modules: 0 },
      { id: 906, code: "MAT-FE", name: "MATERIALES_FERROSOS - Principio de Materiales Ferrosos", modules: 0 },
      { id: 907, code: "MAT-ING", name: "INGENIERIA_MATERIALES - Ingenieria de Materiales", modules: 0 },
      { id: 908, code: "MAT-TOPO", name: "TOPOGRAFIA - Topografia", modules: 0 },
      { id: 909, code: "MAT-EST", name: "INGENIERIA_ESTRUCTURAL - Ingenieria Estructural", modules: 0 }
    ]
  },
  {
    id: 10,
    code: "MEC",
    label: "J. Mecanica",
    color: "#6842b8",
    courses: [
      { id: 1001, code: "MEC-SIS", name: "Sistemas mecanicos basicos", modules: 5 },
      { id: 1002, code: "MEC-VIB", name: "Vibracion", modules: 4 },
      { id: 1003, code: "MEC-LAS", name: "Alineacion laser", modules: 4 },
      { id: 1004, code: "MEC-TRA", name: "Transmision de potencia", modules: 5 },
      { id: 1005, code: "MEC-RIG", name: "Sistemas rigidos", modules: 4 }
    ]
  },
  {
    id: 11,
    code: "PROC",
    label: "K. Control de procesos",
    color: "#0d7f99",
    courses: [
      { id: 1101, code: "PROC-SCADA", name: "SCADA", modules: 5 },
      { id: 1102, code: "PROC-PLC", name: "PLC control de procesos", modules: 6 },
      { id: 1103, code: "PROC-FB", name: "Fieldbus", modules: 4 },
      { id: 1104, code: "PROC-HART", name: "HART", modules: 4 },
      { id: 1105, code: "PROC-SEN", name: "Sensores industriales", modules: 5 }
    ]
  },
  {
    id: 12,
    code: "CAL",
    label: "L. Calidad",
    color: "#14955e",
    courses: [
      { id: 1201, code: "CAL-MET", name: "Metrologia", modules: 5 },
      { id: 1202, code: "CAL-MIC", name: "Micrometros", modules: 3 },
      { id: 1203, code: "CAL-ISO", name: "ISO 9000", modules: 4 },
      { id: 1204, code: "CAL-EST", name: "Control estadistico", modules: 5 },
      { id: 1205, code: "CAL-INSP", name: "Inspeccion", modules: 4 }
    ]
  },
  {
    id: 13,
    code: "SEG",
    label: "M. Seguridad",
    color: "#df3045",
    courses: [
      { id: 1301, code: "SEG-EPP", name: "EPP", modules: 3 },
      { id: 1302, code: "SEG-BLO", name: "Bloqueo y etiquetado", modules: 4 },
      { id: 1303, code: "SEG-RIE", name: "Riesgos industriales", modules: 5 },
      { id: 1304, code: "SEG-ELE", name: "Seguridad electrica", modules: 4 },
      { id: 1305, code: "SEG-EME", name: "Respuesta a emergencias", modules: 5 }
    ]
  },
  {
    id: 14,
    code: "TERM",
    label: "N. Termico",
    color: "#0e3f91",
    courses: [
      { id: 1401, code: "TERM-SIS", name: "Sistemas termicos", modules: 5 },
      { id: 1402, code: "TERM-REF", name: "Refrigeracion", modules: 5 },
      { id: 1403, code: "TERM-ENE", name: "Energia termica", modules: 4 },
      { id: 1404, code: "TERM-MAT", name: "Matematica aplicada", modules: 4 }
    ]
  },
  {
    id: 15,
    code: "I40",
    label: "O. Industria 4.0",
    color: "#1492a5",
    courses: [
      { id: 1501, code: "I40-MEC", name: "Curso 1 - Introduccion a la Mecanica", modules: 4 },
      { id: 1502, code: "I40-CTRL", name: "Curso 2 - Sistemas de Control Industrial", modules: 5 },
      { id: 1503, code: "I40-IIOT", name: "Curso 3 - Internet Industrial de las Cosas (IIoT)", modules: 5 }
    ]
  }
];

const evaluationCatalog = [
  {
    id: 1,
    code: "ELEC-01",
    name: "Prequiz - Evaluacion Diagnostica: Fundamentos de Electricidad y Seguridad Electrica"
  },
  {
    id: 2,
    code: "MAT-01",
    name: "Materiales - Principios de Ceramica"
  },
  {
    id: 3,
    code: "AUTO-02",
    name: "Automatizacion - Principios de robotica"
  }
];

let evaluationAttempts = [
  {
    id: 1,
    student: "andresalas@lms.local",
    document: "12345678",
    evaluationId: 1,
    attempt: 1,
    score: 40,
    status: "aprobado",
    origin: "Intento regular"
  },
  {
    id: 2,
    student: "leosanchez@lms.local",
    document: "99887766",
    evaluationId: 1,
    attempt: 1,
    score: 40,
    status: "aprobado",
    origin: "Intento regular"
  }
];

let activeHabilitations = [];

const simulators = [
  {
    id: 1,
    status: "En navegador",
    name: "CNCWebSim - Mecanizado CNC",
    slug: "cncwebsim",
    exercises: 10,
    tags: ["Haas", "Fanuc", "Siemens", "+4"]
  },
  {
    id: 2,
    status: "En navegador",
    name: "CircuitJS1 - Electricidad y Electronica",
    slug: "circuitjs1",
    exercises: 10,
    tags: ["Allen Bradley", "Siemens", "General Electric", "+3"]
  },
  {
    id: 3,
    status: "Conectado",
    name: "Digital - Logica digital",
    slug: "adaptador_digital",
    exercises: 6,
    tags: ["hneeemann", "logica digital", "diseno logico", "+3"]
  },
  {
    id: 4,
    status: "Conectado",
    name: "Engine-Sim - Motores de combustion",
    slug: "adaptador_de_simulacion_de_motor",
    exercises: 6,
    tags: ["angel yaghi", "simulador de motor", "motor de combustion", "+3"]
  },
  {
    id: 5,
    status: "Conectado",
    name: "OpenPLC Runtime - PLC y Automatizacion",
    slug: "tiempo_de_ejecucion_de_OpenPLC",
    exercises: 10,
    tags: ["Allen Bradley", "Siemens", "PLC abierto", "+4"]
  },
  {
    id: 6,
    status: "En navegador",
    name: "OpenSignal - Logica digital",
    slug: "senal_abierta",
    exercises: 4,
    tags: ["general", "logica", "circuitos", "+1"]
  },
  {
    id: 7,
    status: "En navegador",
    name: "Robot Viewer - Robotica / Mecatronica",
    slug: "visor_de_robots",
    exercises: 7,
    tags: ["fan ziqi", "visor de robots", "tresjs", "+4"]
  },
  {
    id: 8,
    status: "En navegador",
    name: "Simulador Automotriz - Diagnostico de fallas",
    slug: "simulador-automotriz",
    exercises: 6,
    tags: ["leoa7x", "simulador automotriz", "tresjs", "+3"]
  },
  {
    id: 9,
    status: "En navegador",
    name: "Simulador Neumatico",
    slug: "simulador-neumatico",
    exercises: 6,
    tags: ["neumatica", "automatizacion", "potencia fluidos", "+3"]
  },
  {
    id: 10,
    status: "Conectado",
    name: "ThingsBoard CE - SCADA e IIoT",
    slug: "tablero_de_cosas-scada",
    exercises: 10,
    tags: ["tablero de cosas", "mqtt", "Modbus", "+5"]
  },
  {
    id: 11,
    status: "Conectado",
    name: "epanet-js - Redes hidraulicas",
    slug: "epanet-js",
    exercises: 6,
    tags: ["epanet JS", "marcador de posicion", "hidraulica", "+3"]
  },
  {
    id: 12,
    status: "Conectado",
    name: "motulator - Motores Electricos",
    slug: "adaptador_motulator",
    exercises: 10,
    tags: ["tejido", "Siemens", "General Electric", "+4"]
  },
  {
    id: 13,
    status: "Conectado",
    name: "pvlib - Energia Solar FV",
    slug: "Adaptador pvlib",
    exercises: 10,
    tags: ["Fronio", "pequena", "borde solar", "+4"]
  }
];

const supportAreas = [
  { id: "login", name: "Accesos y login", icon: "AC", description: "Ingreso, roles, sesiones y permisos." },
  { id: "cursos", name: "Cursos y contenidos", icon: "CU", description: "Materiales, lecciones, archivos y visualizacion." },
  { id: "evaluaciones", name: "Evaluaciones", icon: "EV", description: "Quizzes, intentos, notas y habilitaciones." },
  { id: "simuladores", name: "Simuladores", icon: "SI", description: "Lanzamiento, conexion y ejercicios practicos." },
  { id: "reportes", name: "Resultados y reportes", icon: "RE", description: "Fichas, indicadores y exportaciones." },
  { id: "plataforma", name: "Plataforma general", icon: "PL", description: "Rendimiento, disponibilidad y experiencia global." }
];

let supportTickets = [
  {
    id: 1001,
    title: "Estudiante no visualiza intento habilitado",
    area: "evaluaciones",
    severity: "media",
    status: "abierto",
    reporter: "admin@lms.local",
    description: "El alumno reporta que la nueva oportunidad no aparece en su evaluacion.",
    createdAt: "Hoy 09:20",
    activity: ["Ticket creado por administrador.", "Se valida sincronizacion con modulo de evaluaciones."]
  },
  {
    id: 1002,
    title: "Lentitud al abrir simulador neumatico",
    area: "simuladores",
    severity: "alta",
    status: "en_revision",
    reporter: "soporte@lms.local",
    description: "El simulador tarda mas de lo esperado en cargar para varios estudiantes.",
    createdAt: "Hoy 10:05",
    activity: ["Ticket creado desde mesa de ayuda.", "Equipo tecnico revisa conectividad del adaptador."]
  }
];

const activityLogs = [
  {
    id: 1,
    user: "ANDRES SALAS",
    email: "andresalas@lms.local",
    role: "Estudiante",
    type: "login",
    module: "Accesos",
    action: "Inicio de sesion exitoso",
    date: "hoy",
    time: "08:42",
    ip: "190.12.44.10",
    device: "Chrome / Windows",
    detail: "El estudiante ingreso al portal desde credenciales institucionales."
  },
  {
    id: 2,
    user: "ANDRES SALAS",
    email: "andresalas@lms.local",
    role: "Estudiante",
    type: "evaluacion",
    module: "Evaluaciones",
    action: "Presento evaluacion diagnostica",
    date: "hoy",
    time: "09:10",
    ip: "190.12.44.10",
    device: "Chrome / Windows",
    detail: "Intento #1 registrado con 40 puntos."
  },
  {
    id: 3,
    user: "HECTOR LEONARDO SANCHEZ CARVAJAL",
    email: "leosanchez@lms.local",
    role: "Estudiante",
    type: "curso",
    module: "Cursos",
    action: "Abrio contenido de electricidad",
    date: "hoy",
    time: "10:18",
    ip: "181.48.20.77",
    device: "Edge / Windows",
    detail: "Visualizo leccion de fundamentos de seguridad electrica."
  },
  {
    id: 4,
    user: "Elias Gonzalez",
    email: "profesor@lms.local",
    role: "Profesor",
    type: "evaluacion",
    module: "Evaluaciones",
    action: "Reviso intentos de estudiantes",
    date: "ayer",
    time: "16:04",
    ip: "181.57.40.12",
    device: "Firefox / Windows",
    detail: "Ingreso al monitor de evaluaciones y reviso friccion por quiz."
  },
  {
    id: 5,
    user: "LMS de administracion",
    email: "admin@lms.local",
    role: "Administrador",
    type: "admin",
    module: "Usuarios",
    action: "Edito perfil de usuario",
    date: "hoy",
    time: "11:25",
    ip: "10.0.0.5",
    device: "Chrome / Windows",
    detail: "Actualizo datos del usuario y mantuvo el estado activo."
  },
  {
    id: 6,
    user: "LMS de administracion",
    email: "admin@lms.local",
    role: "Administrador",
    type: "soporte",
    module: "Soporte",
    action: "Creo ticket de afectacion",
    date: "hoy",
    time: "12:11",
    ip: "10.0.0.5",
    device: "Chrome / Windows",
    detail: "Registro afectacion en area de simuladores."
  },
  {
    id: 7,
    user: "ANDRES SALAS",
    email: "andresalas@lms.local",
    role: "Estudiante",
    type: "simulador",
    module: "Simuladores",
    action: "Intento abrir simulador digital",
    date: "semana",
    time: "14:32",
    ip: "190.12.44.10",
    device: "Chrome / Windows",
    detail: "Se mostro aviso de proveedor para demo comercial."
  }
];

let users = [
  {
    id: 1,
    name: "ANDRES SALAS",
    email: "andresalas@lms.local",
    document: "Cedula de ciudadania 12345678",
    phone: "321654497",
    role: "Estudiante",
    institution: "Instituto Profesional y Tecnico de Veraguas",
    site: "Sede",
    status: "activo",
    initials: "AS",
    quiz: "Diagnostico inicial"
  },
  {
    id: 2,
    name: "LMS de administracion",
    email: "admin@local.example",
    document: "NIT 900123456",
    phone: "3005558844",
    role: "Administrador",
    institution: "LMS de administracion",
    site: "Principal",
    status: "activo",
    initials: "LA",
    quiz: "Auditoria de acceso"
  },
  {
    id: 3,
    name: "LMS de administracion",
    email: "admin@lms.local",
    document: "NIT 900123457",
    phone: "3005559900",
    role: "Administrador",
    institution: "Alabama Training Center",
    site: "Virtual",
    status: "activo",
    initials: "AL",
    quiz: "Seguridad LMS"
  },
  {
    id: 4,
    name: "Elias Gonzalez",
    email: "profesor@lms.local",
    document: "Cedula 1020304050",
    phone: "3107772211",
    role: "Profesor",
    institution: "Centro Regional Panama Oeste",
    site: "Campus Norte",
    status: "activo",
    initials: "EG",
    quiz: "Revision pedagogica"
  },
  {
    id: 5,
    name: "HECTOR LEONARDO SANCHEZ CARVAJAL",
    email: "leosanchez@lms.local",
    document: "Cedula 99887766",
    phone: "3112223344",
    role: "Estudiante",
    institution: "Instituto Profesional y Tecnico de Veraguas",
    site: "Sede",
    status: "activo",
    initials: "HS",
    quiz: "Simulador tecnico"
  }
];

let selectedUserId = 1;
let userStatusFilter = "todos";
let selectedInstitutionId = 1;
let selectedAcademicCategoryId = 9;
let selectedResultUserId = null;
let selectedResultTab = "resumen";
let selectedSimulatorId = null;
let selectedSupportArea = "evaluaciones";
let selectedTicketId = 1001;
let selectedActivityId = 1;
let currentLanguage = "es";

const languageCopy = {
  es: {
    static: {
      ".auth-screen": { attr: "aria-label", text: "Inicio de sesion" },
      ".auth-visual .system-label": "Entorno institucional de formacion tecnica",
      ".auth-logo small": "LMS institucional",
      ".auth-visual h1": "Acceso seguro al entorno academico y operativo.",
      ".auth-visual p:not(.system-label)": "Centraliza cursos, contenidos, progreso, evaluaciones, simuladores y soporte desde una misma plataforma.",
      ".login-card .eyebrow": "Administracion",
      ".login-card h2": "Iniciar sesion",
      ".login-copy": "Ingresa con el usuario demo para acceder al centro de mando.",
      ".login-card label:nth-of-type(1)": "Correo institucional",
      ".login-card label:nth-of-type(2)": "Contrasena",
      ".check-row": "Recordar acceso",
      ".login-options a": "Recuperar clave",
      ".login-card .primary-action": "Entrar al panel",
      ".sidebar .system-label": "Entorno institucional de formacion tecnica",
      ".sidebar-copy": "Accede a cursos, contenidos, progreso, evaluaciones y simuladores desde una misma plataforma.",
      "#logoutButton": "Cerrar sesion",
      ".menu-toggle": "Menu",
      ".operation-overlay .eyebrow": "Centro de mando",
      ".operation-overlay h2": "Operacion diaria bajo control",
      ".operation-overlay > p": "El LMS mantiene 2 matriculas activas, 5 accesos activos y progreso promedio en 4.6%.",
      ".status-callout span": "Estado del turno",
      ".status-callout strong": "Ritmo academico requiere seguimiento.",
      ".status-callout small": "Progreso promedio en 4.6% y 0 simuladores cerrados.",
      ".priority-card .eyebrow": "Prioridades",
      ".priority-card h2": "Lo que pide intervencion ahora",
      ".priority-card .pill": "Hoy",
      ".panel.queue-panel .eyebrow": "Cola operativa",
      ".panel.queue-panel h2": "Intervenciones sugeridas para este turno",
      ".panel.queue-panel .section-heading small": "Lectura estable, contenido dinamico segun actividad real.",
      ".access-panel .eyebrow": "Accesos rapidos",
      ".access-panel h2": "Modulos con contexto inmediato",
      ".access-panel .section-heading small": "Microestado operativo"
    },
    nav: {
      panel: "Panel principal",
      usuarios: "Usuarios",
      institucion: "Institucion",
      academico: "Oferta academica",
      evaluaciones: "Evaluaciones",
      resultados: "Resultados",
      simuladores: "Simuladores",
      soporte: "Soporte",
      actividad: "Actividad y accesos"
    },
    modules: {
      panel: {
        eyebrow: "Administracion",
        title: "Centro de mando",
        description: "Centro de mando operativo para acceso, actividad academica, soporte y continuidad institucional."
      },
      usuarios: {
        eyebrow: "Usuarios",
        title: "Gestion de usuarios",
        description: "Consulta la base de personas, revisa registros pendientes y administra el estado de acceso."
      },
      institucion: {
        eyebrow: "Instituciones",
        title: "Instituciones, sedes y sub-sedes",
        description: "Gestiona la estructura territorial desde la institucion hasta la sub-sede opcional."
      },
      academico: {
        eyebrow: "Oferta academica",
        title: "Categorias y cursos",
        description: "Administra categorias tecnicas y cursos asociados dentro de la oferta academica."
      },
      evaluaciones: {
        eyebrow: "Evaluaciones",
        title: "Monitor de evaluaciones",
        description: "Sigue el desempeno evaluativo, detecta quizzes con mayor friccion y manten visibles las nuevas oportunidades activas."
      },
      resultados: {
        eyebrow: "Resultados",
        title: "Buscar estudiante",
        description: "Selecciona un estudiante para abrir su ficha consolidada con inscripciones, rutas y evaluaciones."
      },
      simuladores: {
        eyebrow: "Administracion",
        title: "Simuladores",
        description: "Busca un simulador, revisa el inventario y abre su builder dedicado cuando necesites editarlo."
      },
      soporte: {
        eyebrow: "Soporte",
        title: "Mesa de soporte",
        description: "Crea tickets de afectacion, identifica el area impactada y acompana la resolucion desde un panel operativo."
      },
      actividad: {
        eyebrow: "Actividad y accesos",
        title: "Logs de actividad",
        description: "Consulta actividades de usuarios, filtra accesos y descarga informes de auditoria."
      }
    },
    dashboard: {
      kpis,
      priorities,
      interventions,
      modules
    }
  },
  en: {
    static: {
      ".auth-screen": { attr: "aria-label", text: "Sign in" },
      ".auth-visual .system-label": "Institutional technical training environment",
      ".auth-logo small": "Institutional LMS",
      ".auth-visual h1": "Secure access to the academic and operational environment.",
      ".auth-visual p:not(.system-label)": "Centralize courses, content, progress, evaluations, simulators and support in one platform.",
      ".login-card .eyebrow": "Administration",
      ".login-card h2": "Sign in",
      ".login-copy": "Use the demo account to access the command center.",
      ".login-card label:nth-of-type(1)": "Institutional email",
      ".login-card label:nth-of-type(2)": "Password",
      ".check-row": "Remember access",
      ".login-options a": "Recover password",
      ".login-card .primary-action": "Enter dashboard",
      ".sidebar .system-label": "Institutional technical training environment",
      ".sidebar-copy": "Access courses, content, progress, evaluations and simulators from one platform.",
      "#logoutButton": "Sign out",
      ".menu-toggle": "Menu",
      ".operation-overlay .eyebrow": "Command center",
      ".operation-overlay h2": "Daily operation under control",
      ".operation-overlay > p": "The LMS keeps 2 active enrollments, 5 active accesses and an average progress of 4.6%.",
      ".status-callout span": "Current shift status",
      ".status-callout strong": "Academic pace requires follow-up.",
      ".status-callout small": "Average progress at 4.6% and 0 closed simulators.",
      ".priority-card .eyebrow": "Priorities",
      ".priority-card h2": "What needs attention now",
      ".priority-card .pill": "Today",
      ".panel.queue-panel .eyebrow": "Operational queue",
      ".panel.queue-panel h2": "Suggested interventions for this shift",
      ".panel.queue-panel .section-heading small": "Stable reading, dynamic content based on real activity.",
      ".access-panel .eyebrow": "Quick access",
      ".access-panel h2": "Modules with immediate context",
      ".access-panel .section-heading small": "Operational microstatus"
    },
    nav: {
      panel: "Main panel",
      usuarios: "Users",
      institucion: "Institution",
      academico: "Academic offer",
      evaluaciones: "Evaluations",
      resultados: "Results",
      simuladores: "Simulators",
      soporte: "Support",
      actividad: "Activity and access"
    },
    modules: {
      panel: {
        eyebrow: "Administration",
        title: "Command center",
        description: "Operational command center for access, academic activity, support and institutional continuity."
      },
      usuarios: {
        eyebrow: "Users",
        title: "User management",
        description: "Review the people directory, pending records and access status."
      },
      institucion: {
        eyebrow: "Institutions",
        title: "Institutions, campuses and sub-sites",
        description: "Manage the territorial structure from institution to optional sub-site."
      },
      academico: {
        eyebrow: "Academic offer",
        title: "Categories and courses",
        description: "Manage technical categories and associated courses in the academic offer."
      },
      evaluaciones: {
        eyebrow: "Evaluations",
        title: "Evaluation monitor",
        description: "Track evaluation performance, detect high-friction quizzes and keep new opportunities visible."
      },
      resultados: {
        eyebrow: "Results",
        title: "Find student",
        description: "Select a student to open a consolidated record with enrollments, routes and evaluations."
      },
      simuladores: {
        eyebrow: "Administration",
        title: "Simulators",
        description: "Find a simulator, review the inventory and open its dedicated builder when editing is needed."
      },
      soporte: {
        eyebrow: "Support",
        title: "Support desk",
        description: "Create impact tickets, identify the affected area and follow resolution from an operational panel."
      },
      actividad: {
        eyebrow: "Activity and access",
        title: "Activity logs",
        description: "Review user activity, filter access events and download audit reports."
      }
    },
    dashboard: {
      kpis: [
        { label: "Pending", value: "0 active fronts", detail: "Operational sum of open support and items to review." },
        { label: "Records", value: "2 active", detail: "Current volume of students with active progress." },
        { label: "Support", value: "0 open entries", detail: "Requests still waiting for team intervention." },
        { label: "Sessions", value: "166 active sessions", detail: "Live activity inside the portal and simulators." }
      ],
      priorities: [
        { title: "Academic health", detail: "Average progress is low and may require teacher follow-up.", value: "4,6%", tone: "red" },
        { title: "Support pending closure", detail: "There are no accumulated tickets at this moment.", value: "0", tone: "green" },
        { title: "Expiring validity", detail: "Immediate validity windows are under control.", value: "0", tone: "green" }
      ],
      interventions: [
        { title: "Clear support requests", detail: "There is no open queue; the module is ready for light monitoring.", status: "Reviewed", action: "Continuous monitoring" },
        { title: "Ensure access continuity", detail: "There are no urgent renewals to escalate in this cut.", status: "Reviewed", action: "No blocks" },
        { title: "Sustain enrollment pace", detail: "2 enrollments keep the academic operation running.", status: "Stable operation", action: "Daily supervision" },
        { title: "Push simulator adoption and closure", detail: "There are still no simulator closures and average progress is 4.6%.", status: "In follow-up", action: "Raise this week" }
      ],
      modules: [
        { title: "Users", meta: "2 students - 1 teacher", detail: "Onboarding, validations and access control." },
        { title: "Academic", meta: "17 published courses", detail: "Offer, curriculum structure and content." },
        { title: "Institutions", meta: "5 active accesses - 0 expiring validity", detail: "Operational structure and membership continuity." },
        { title: "Records", meta: "2 active enrollments", detail: "Follow-up of the academic flow in progress." }
      ]
    }
  }
};

const authScreen = document.querySelector("#authScreen");
const dashboardScreen = document.querySelector("#dashboardScreen");
const loginForm = document.querySelector("#loginForm");
const logoutButton = document.querySelector("#logoutButton");
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelectorAll(".nav-item");
const moduleViews = document.querySelectorAll(".module-view");
const moduleEyebrow = document.querySelector("#moduleEyebrow");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleDescription = document.querySelector("#moduleDescription");
const userSearch = document.querySelector("#userSearch");
const roleFilter = document.querySelector("#roleFilter");
const institutionFilter = document.querySelector("#institutionFilter");
const userInstitutionInput = document.querySelector("#userInstitutionInput");
const userModal = document.querySelector("#userModal");
const userForm = document.querySelector("#userForm");
const institutionModal = document.querySelector("#institutionModal");
const institutionForm = document.querySelector("#institutionForm");
const academicCategorySelect = document.querySelector("#academicCategorySelect");
const categoryForm = document.querySelector("#categoryForm");
const courseForm = document.querySelector("#courseForm");
const evaluationSearch = document.querySelector("#evaluationSearch");
const enableAttemptForm = document.querySelector("#enableAttemptForm");
const resultsStudentSearch = document.querySelector("#resultsStudentSearch");
const simulatorSearch = document.querySelector("#simulatorSearch");
const simulatorModal = document.querySelector("#simulatorModal");
const supportTicketForm = document.querySelector("#supportTicketForm");
const ticketStatusFilter = document.querySelector("#ticketStatusFilter");
const ticketSearchInput = document.querySelector("#ticketSearchInput");
const activitySearchInput = document.querySelector("#activitySearchInput");
const activityUserFilter = document.querySelector("#activityUserFilter");
const activityTypeFilter = document.querySelector("#activityTypeFilter");
const activityDateFilter = document.querySelector("#activityDateFilter");
const languageButtons = document.querySelectorAll("[data-lang]");

function getLanguageCopy() {
  return languageCopy[currentLanguage] || languageCopy.es;
}

function setPreservedText(element, text) {
  const hasFormControl = element.querySelector("input, select, textarea");
  if (!hasFormControl) {
    element.textContent = text;
    return;
  }

  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = `${text} `;
  }
}

function getActiveModuleName() {
  return document.querySelector(".nav-item.active")?.dataset.module || "panel";
}

function applyStaticLanguage() {
  const copy = getLanguageCopy();
  document.documentElement.lang = currentLanguage;

  Object.entries(copy.static).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (typeof value === "object") {
        element.setAttribute(value.attr, value.text);
        return;
      }
      setPreservedText(element, value);
    });
  });

  navItems.forEach((item) => {
    item.textContent = copy.nav[item.dataset.module] || item.textContent;
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage));
  });
}

function applyLanguage(language) {
  if (!languageCopy[language]) return;
  currentLanguage = language;
  applyStaticLanguage();
  renderKpis();
  renderPriorities();
  renderInterventions();
  renderModules();
  switchModule(getActiveModuleName());
}

function renderKpis() {
  const items = getLanguageCopy().dashboard.kpis;
  document.querySelector("#kpiRow").innerHTML = items
    .map(
      (item) => `
        <article class="kpi">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <small>${item.detail}</small>
        </article>
      `
    )
    .join("");
}

function renderPriorities() {
  const items = getLanguageCopy().dashboard.priorities;
  document.querySelector("#priorityList").innerHTML = items
    .map(
      (item) => `
        <article class="priority-item">
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
          <span class="badge ${item.tone}">${item.value}</span>
        </article>
      `
    )
    .join("");
}

function renderInterventions() {
  const items = getLanguageCopy().dashboard.interventions;
  document.querySelector("#interventionList").innerHTML = items
    .map(
      (item) => `
        <article class="intervention">
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
          <div class="intervention-actions">
            <span class="tag">${item.status}</span>
            <small>${item.action}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function renderModules() {
  const items = getLanguageCopy().dashboard.modules;
  const openLabel = currentLanguage === "en" ? "Open" : "Abierto";
  document.querySelector("#moduleGrid").innerHTML = items
    .map(
      (item) => `
        <article class="module-card">
          <span class="tag">${openLabel}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.meta}</p>
            <p>${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function titleCaseStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function renderInstitutionOptions() {
  const options = institutions.map((item) => `<option value="${item}">${item}</option>`).join("");
  institutionFilter.innerHTML = `<option value="todas">Todas las instituciones</option>${options}`;
  userInstitutionInput.innerHTML = options;
}

function getFilteredUsers() {
  const query = userSearch.value.trim().toLowerCase();
  const role = roleFilter.value;
  const institution = institutionFilter.value;

  return users.filter((user) => {
    const matchesStatus = userStatusFilter === "todos" || user.status === userStatusFilter;
    const matchesRole = role === "todos" || user.role === role;
    const matchesInstitution = institution === "todas" || user.institution === institution;
    const searchable = `${user.name} ${user.email} ${user.document}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    return matchesStatus && matchesRole && matchesInstitution && matchesQuery;
  });
}

function renderUserSummary() {
  const counts = {
    total: users.length,
    pendiente: users.filter((user) => user.status === "pendiente").length,
    activo: users.filter((user) => user.status === "activo").length,
    inhabilitado: users.filter((user) => user.status === "inhabilitado").length
  };

  document.querySelector("#userSummary").innerHTML = `
    <article class="summary-card">
      <span>Total</span>
      <strong>${counts.total}</strong>
      <small>Base global</small>
    </article>
    <article class="summary-card">
      <span>Pendientes</span>
      <strong>${counts.pendiente}</strong>
      <small>Por revisar</small>
    </article>
    <article class="summary-card">
      <span>Activos</span>
      <strong>${counts.activo}</strong>
      <small>Con acceso vigente</small>
    </article>
    <article class="summary-card">
      <span>Inhabilitados</span>
      <strong>${counts.inhabilitado}</strong>
      <small>Sin acceso</small>
    </article>
  `;
}

function renderUserList() {
  const filteredUsers = getFilteredUsers();
  document.querySelector("#directoryTitle").textContent = `Directorio - ${filteredUsers.length} personas`;

  if (!filteredUsers.some((user) => user.id === selectedUserId) && filteredUsers[0]) {
    selectedUserId = filteredUsers[0].id;
  }

  document.querySelector("#userList").innerHTML =
    filteredUsers
      .map(
        (user) => `
          <button class="user-row ${user.id === selectedUserId ? "selected" : ""}" type="button" data-user-id="${user.id}">
            <span class="avatar-soft">${user.initials}</span>
            <span>
              <strong>${user.name}</strong>
              <small>${user.email}</small>
            </span>
            <span class="user-row-side">
              <span class="status-pill ${user.status}">${titleCaseStatus(user.status)}</span>
              <small>${user.role}</small>
            </span>
          </button>
        `
      )
      .join("") || `<div class="empty-state">No se encontraron usuarios con esos filtros.</div>`;
}

function renderProfile() {
  const user = users.find((item) => item.id === selectedUserId);
  const profilePanel = document.querySelector("#profilePanel");

  if (!user) {
    profilePanel.innerHTML = `<div class="empty-state">Selecciona un usuario para ver el perfil.</div>`;
    return;
  }

  const suspended = user.status === "inhabilitado";
  profilePanel.innerHTML = `
    <div class="profile-head">
      <span class="avatar-large">${user.initials}</span>
      <div>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <div class="profile-tags">
          <span class="tag">${user.role}</span>
          <span class="status-pill ${user.status}">${titleCaseStatus(user.status)}</span>
        </div>
      </div>
    </div>
    <div class="profile-actions">
      <button class="dark-action" type="button" data-action="view">Ver perfil</button>
      <button class="secondary-action compact" type="button" data-action="edit">Editar</button>
      <button class="warning-action" type="button" data-action="toggle">${suspended ? "Reactivar" : "Suspender"}</button>
      <button class="secondary-action compact" type="button" data-action="quiz">Re-asignar quiz</button>
    </div>
    <div class="profile-grid">
      <article>
        <span>Documento</span>
        <strong>${user.document}</strong>
      </article>
      <article>
        <span>Telefono</span>
        <strong>${user.phone}</strong>
      </article>
      <article>
        <span>Institucion</span>
        <strong>${user.institution}</strong>
      </article>
      <article>
        <span>Sitio</span>
        <strong>${user.site}</strong>
      </article>
      <article>
        <span>Quiz asignado</span>
        <strong>${user.quiz}</strong>
      </article>
      <article>
        <span>Ultima accion</span>
        <strong>${suspended ? "Acceso suspendido" : "Acceso vigente"}</strong>
      </article>
    </div>
  `;
}

function renderUsers() {
  renderUserSummary();
  renderUserList();
  renderProfile();
}

function getSelectedInstitution() {
  return institutionTree.find((item) => item.id === selectedInstitutionId) || institutionTree[0];
}

function getInstitutionCounts() {
  const selected = getSelectedInstitution();
  const sites = selected?.sites || [];
  const subSites = sites.reduce((total, site) => total + site.subSites.length, 0);

  return {
    institutions: institutionTree.length,
    sites: institutionTree.reduce((total, institution) => total + institution.sites.length, 0),
    subSites: institutionTree.reduce(
      (total, institution) => total + institution.sites.reduce((siteTotal, site) => siteTotal + site.subSites.length, 0),
      0
    ),
    selectedSites: sites.length,
    selectedSubSites: subSites
  };
}

function renderInstitutionSummary() {
  const selected = getSelectedInstitution();
  const counts = getInstitutionCounts();

  document.querySelector("#institutionSummary").innerHTML = `
    <article class="summary-card">
      <span>Instituciones</span>
      <strong>${counts.institutions}</strong>
      <small>Registrado</small>
    </article>
    <article class="summary-card">
      <span>Sede</span>
      <strong>${counts.sites}</strong>
      <small>Total en todas</small>
    </article>
    <article class="summary-card">
      <span>Asiento secundario</span>
      <strong>${counts.subSites}</strong>
      <small>Total en todas</small>
    </article>
    <article class="summary-card">
      <span>Seleccionada</span>
      <strong>${selected?.name || "Sin seleccion"}</strong>
      <small>${counts.selectedSites} sedes - ${counts.selectedSubSites} sub-sedes</small>
    </article>
  `;
}

function renderInstitutionList() {
  document.querySelector("#institutionListTitle").textContent = `Instituciones - ${institutionTree.length} registradas`;
  document.querySelector("#institutionList").innerHTML = institutionTree
    .map((institution) => {
      const subSiteCount = institution.sites.reduce((total, site) => total + site.subSites.length, 0);
      return `
        <article class="institution-row ${institution.id === selectedInstitutionId ? "selected" : ""}">
          <button class="institution-select" type="button" data-institution-id="${institution.id}">
            <strong>${institution.name}</strong>
            <small>${institution.sites.length} asiento - ${subSiteCount} asientos subespeciales</small>
          </button>
          <div class="row-actions">
            <button class="secondary-action compact" type="button" data-structure-action="edit-institution" data-id="${institution.id}">Editar</button>
            <button class="danger-action" type="button" data-structure-action="delete-institution" data-id="${institution.id}">Eliminar</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInstitutionDetail() {
  const institution = getSelectedInstitution();
  const siteCount = institution?.sites.length || 0;
  const subSiteCount = institution?.sites.reduce((total, site) => total + site.subSites.length, 0) || 0;

  if (!institution) {
    document.querySelector("#institutionDetail").innerHTML = `<div class="panel empty-state">Crea una institucion para comenzar.</div>`;
    return;
  }

  document.querySelector("#institutionDetail").innerHTML = `
    <section class="structure-hero">
      <p class="eyebrow light">Estructura seleccionada</p>
      <h2>${institution.name}</h2>
      <div class="structure-kpis">
        <article><span>Sede</span><strong>${siteCount}</strong></article>
        <article><span>Asiento secundario</span><strong>${subSiteCount}</strong></article>
      </div>
    </section>

    <div class="structure-actions">
      <button class="secondary-action compact" type="button" data-structure-action="new-site" data-id="${institution.id}">+ Nueva sede</button>
    </div>

    <div class="site-list">
      ${institution.sites
        .map(
          (site) => `
            <article class="site-card">
              <div class="site-head">
                <div>
                  <h3>${site.name}</h3>
                  <p>${site.subSites.length} sub-sedes - ${site.labs.length} laboratorios</p>
                </div>
                <div class="row-actions">
                  <button class="secondary-action compact" type="button" data-structure-action="edit-site" data-id="${site.id}">Editar</button>
                  <button class="danger-action" type="button" data-structure-action="delete-site" data-id="${site.id}">Eliminar</button>
                </div>
              </div>

              <div class="lab-box">
                <div class="lab-box-head">
                  <strong>Laboratorios de la sede <span>${site.labs.length}</span></strong>
                  <button class="secondary-action compact" type="button" data-structure-action="new-lab" data-parent-id="${site.id}">+ Anadir</button>
                </div>
                ${site.labs.map((lab) => `<div class="lab-item">${lab.name}<small>${lab.address}</small></div>`).join("") || `<div class="lab-item muted">Sin laboratorios registrados</div>`}
              </div>

              <p class="eyebrow sub-label">Asiento secundario</p>
              ${site.subSites
                .map(
                  (subSite) => `
                    <div class="subsite-card">
                      <div class="site-head">
                        <div>
                          <h3>${subSite.name}</h3>
                          <p>${subSite.code} - ${subSite.labs.length} laboratorios</p>
                        </div>
                        <div class="row-actions">
                          <button class="secondary-action compact" type="button" data-structure-action="edit-subsite" data-id="${subSite.id}">Editar</button>
                          <button class="danger-action" type="button" data-structure-action="delete-subsite" data-id="${subSite.id}">Eliminar</button>
                        </div>
                      </div>
                      <div class="lab-box compact-box">
                        <div class="lab-box-head">
                          <strong>Laboratorios de la sub-sede <span>${subSite.labs.length}</span></strong>
                          <button class="secondary-action compact" type="button" data-structure-action="new-lab" data-parent-id="${subSite.id}">+ Anadir</button>
                        </div>
                        ${subSite.labs.map((lab) => `<div class="lab-item">${lab.name}<small>${lab.address}</small></div>`).join("") || `<div class="lab-item muted">Sin laboratorios registrados</div>`}
                      </div>
                    </div>
                  `
                )
                .join("")}

              <div class="inline-create">
                <p>Nueva sub-sede en ${site.name}</p>
                <input type="text" placeholder="Nombre de la sub-sede" data-inline-name="${site.id}" />
                <div class="inline-grid">
                  <input type="text" placeholder="Codigo" data-inline-code="${site.id}" />
                  <input type="text" placeholder="Direccion" data-inline-address="${site.id}" />
                </div>
                <button class="dark-action" type="button" data-structure-action="inline-subsite" data-parent-id="${site.id}">Crear sub-sede</button>
              </div>
            </article>
          `
        )
        .join("") || `<div class="panel empty-state">Esta institucion aun no tiene sedes.</div>`}
    </div>
  `;
}

function renderInstitutions() {
  renderInstitutionSummary();
  renderInstitutionList();
  renderInstitutionDetail();
}

function getSelectedAcademicCategory() {
  return academicCategories.find((category) => category.id === selectedAcademicCategoryId) || academicCategories[0];
}

function nextAcademicId() {
  const ids = [];
  academicCategories.forEach((category) => {
    ids.push(category.id, ...category.courses.map((course) => course.id));
  });
  return Math.max(...ids, 0) + 1;
}

function renderAcademicCategoryOptions() {
  academicCategorySelect.innerHTML = academicCategories
    .map((category) => `<option value="${category.id}">${category.code} - ${category.label}</option>`)
    .join("");
  academicCategorySelect.value = String(selectedAcademicCategoryId);
}

function renderSelectedCategoryCard() {
  const category = getSelectedAcademicCategory();
  document.querySelector("#selectedCategoryCard").innerHTML = `
    <article class="academic-category-card" style="--category-color:${category.color}">
      <div>
        <span class="category-dot">${category.label.charAt(0)}</span>
      </div>
      <div>
        <h3>${category.label}</h3>
        <p>${category.code} - ${category.courses.length} cursos</p>
      </div>
      <div class="row-actions">
        <button class="secondary-action compact" type="button" data-academic-action="edit-category">Editar</button>
        <button class="secondary-action compact" type="button" data-academic-action="category-code">Codigo</button>
        <button class="danger-action" type="button" data-academic-action="delete-category">Eliminar</button>
      </div>
    </article>
  `;
}

function renderAcademicCourses() {
  const category = getSelectedAcademicCategory();
  document.querySelector("#academicCourseList").innerHTML =
    category.courses
      .map(
        (course) => `
          <article class="academic-course-row">
            <div>
              <h3>${course.name}</h3>
              <p>${course.code} - ${course.modules} modulos</p>
            </div>
            <div class="row-actions">
              <button class="secondary-action compact" type="button" data-academic-action="edit-course" data-course-id="${course.id}">Editar</button>
              <button class="secondary-action compact" type="button" data-academic-action="course-code" data-course-id="${course.id}">Codigo</button>
              <button class="danger-action" type="button" data-academic-action="delete-course" data-course-id="${course.id}">Eliminar</button>
            </div>
          </article>
        `
      )
      .join("") || `<div class="empty-state">Esta categoria aun no tiene cursos.</div>`;
}

function renderAcademics() {
  renderAcademicCategoryOptions();
  renderSelectedCategoryCard();
  renderAcademicCourses();
}

function getEvaluationById(id) {
  return evaluationCatalog.find((evaluation) => evaluation.id === Number(id));
}

function getFilteredAttempts() {
  const query = evaluationSearch.value.trim().toLowerCase();
  return evaluationAttempts.filter((attempt) => {
    const evaluation = getEvaluationById(attempt.evaluationId);
    const searchable = `${attempt.student} ${attempt.document} ${evaluation?.code} ${evaluation?.name}`.toLowerCase();
    return !query || searchable.includes(query);
  });
}

function getEvaluationStats() {
  const attempts = getFilteredAttempts();
  const approved = attempts.filter((attempt) => attempt.status === "aprobado").length;
  const failed = attempts.filter((attempt) => attempt.status === "reprobado").length;
  const retries = attempts.filter((attempt) => attempt.attempt > 1).length;
  const approvalRate = attempts.length ? Math.round((approved / attempts.length) * 100) : 0;
  const activeQuizzes = evaluationCatalog.length + academicCategories.reduce((total, category) => total + category.courses.length, 0);

  return { attempts, approved, failed, retries, approvalRate, activeQuizzes };
}

function renderEvaluationOptions() {
  document.querySelector("#enableEvaluationSelect").innerHTML = evaluationCatalog
    .map((evaluation) => `<option value="${evaluation.id}">${evaluation.code} - ${evaluation.name}</option>`)
    .join("");
}

function renderEvaluationSummary() {
  const stats = getEvaluationStats();
  document.querySelector("#evaluationSummary").innerHTML = `
    <article class="summary-card">
      <span>Quizzes activos</span>
      <strong>${stats.activeQuizzes}</strong>
      <small>Visibles en esta lectura</small>
    </article>
    <article class="summary-card">
      <span>Intentos</span>
      <strong>${stats.attempts.length}</strong>
      <small>Filtrados actualmente</small>
    </article>
    <article class="summary-card">
      <span>Aprobacion</span>
      <strong>${stats.approvalRate}%</strong>
      <small>Intentos aprobados</small>
    </article>
    <article class="summary-card">
      <span>Reintentos</span>
      <strong>${stats.retries}</strong>
      <small>El extra esta autorizado</small>
    </article>
    <article class="summary-card">
      <span>Activado</span>
      <strong>${activeHabilitations.length}</strong>
      <small>Oportunidades activas</small>
    </article>
  `;
}

function renderFrictionList() {
  const grouped = evaluationCatalog.map((evaluation) => {
    const attempts = getFilteredAttempts().filter((attempt) => attempt.evaluationId === evaluation.id);
    const failed = attempts.filter((attempt) => attempt.status === "reprobado").length;
    const friction = attempts.length ? Math.round((failed / attempts.length) * 100) : 0;
    return { evaluation, attempts, friction };
  });

  document.querySelector("#frictionList").innerHTML = grouped
    .sort((a, b) => b.friction - a.friction || b.attempts.length - a.attempts.length)
    .map(
      (item) => `
        <article class="friction-item">
          <div class="friction-row">
            <strong>${item.evaluation.code} - ${item.evaluation.name}</strong>
            <span>${item.friction}%</span>
          </div>
          <div class="thin-bar"><span style="width:${item.friction}%"></span></div>
          <small>${item.attempts.filter((attempt) => attempt.status === "reprobado").length} fallas sobre ${item.attempts.length} intentos</small>
        </article>
      `
    )
    .join("");
}

function renderDistribution() {
  const stats = getEvaluationStats();
  const total = stats.attempts.length || 1;
  const approvedPct = Math.round((stats.approved / total) * 100);
  const failedPct = Math.round((stats.failed / total) * 100);
  const retryPct = Math.round((stats.retries / total) * 100);

  document.querySelector("#distributionBox").innerHTML = `
    <div class="donut" style="--approved:${approvedPct}">
      <span>Aprobar</span>
      <strong>${approvedPct}%</strong>
    </div>
    <div class="distribution-lines">
      <div><span class="dot green"></span><span>Aprobados</span><strong>${approvedPct}%</strong></div>
      <div><span class="dot red"></span><span>Reprobados</span><strong>${failedPct}%</strong></div>
      <div><span class="dot orange"></span><span>Repeticiones</span><strong>${retryPct}%</strong></div>
    </div>
  `;
}

function renderStudentAttempts() {
  const grouped = {};
  getFilteredAttempts().forEach((attempt) => {
    grouped[attempt.student] ||= { attempts: 0, failed: 0 };
    grouped[attempt.student].attempts += 1;
    if (attempt.status === "reprobado") grouped[attempt.student].failed += 1;
  });

  const rows = Object.entries(grouped)
    .map(([student, data]) => ({ student, ...data }))
    .sort((a, b) => b.attempts - a.attempts)
    .slice(0, 5);

  document.querySelector("#studentAttemptList").innerHTML =
    rows
      .map(
        (row) => `
          <article class="student-attempt-row">
            <div>
              <strong>${row.student}</strong>
              <small>${row.attempts} intentos - ${row.failed} no aprobados</small>
            </div>
            <span class="badge ${row.attempts > 1 || row.failed ? "red" : "green"}">${row.attempts > 1 || row.failed ? "presion alta" : "estable"}</span>
          </article>
        `
      )
      .join("") || `<div class="empty-state">No hay estudiantes para esta busqueda.</div>`;
}

function renderAttemptTable() {
  document.querySelector("#attemptTable").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Estudiante</th>
          <th>Evaluacion</th>
          <th>#</th>
          <th>Resultado</th>
          <th>Origen</th>
        </tr>
      </thead>
      <tbody>
        ${getFilteredAttempts()
          .map((attempt) => {
            const evaluation = getEvaluationById(attempt.evaluationId);
            return `
              <tr>
                <td>${attempt.student}</td>
                <td>${evaluation?.code} - ${evaluation?.name}</td>
                <td># ${attempt.attempt}</td>
                <td><span class="score-pill">${attempt.score} puntos</span></td>
                <td>${attempt.origin}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderHabilitations() {
  document.querySelector("#habilitationList").innerHTML =
    activeHabilitations
      .map((item) => {
        const evaluation = getEvaluationById(item.evaluationId);
        return `
          <article class="habilitation-item">
            <strong>${item.student}</strong>
            <small>${evaluation?.code} - ${item.extra} intento(s) extra</small>
            <p>${item.reason}</p>
          </article>
        `;
      })
      .join("") || `<div class="empty-state">No hay habilitaciones activas.</div>`;
}

function renderEvaluations() {
  renderEvaluationOptions();
  renderEvaluationSummary();
  renderFrictionList();
  renderDistribution();
  renderStudentAttempts();
  renderAttemptTable();
  renderHabilitations();
}

function getResultStudents() {
  return users.filter((user) => user.role === "Estudiante");
}

function getSelectedResultUser() {
  return users.find((user) => user.id === selectedResultUserId);
}

function getResultAttempts(user) {
  if (!user) return [];
  return evaluationAttempts.filter((attempt) => attempt.student.toLowerCase() === user.email.toLowerCase());
}

function getResultStats(user) {
  const attempts = getResultAttempts(user);
  const approved = attempts.filter((attempt) => attempt.status === "aprobado").length;
  const average = attempts.length
    ? Math.round((attempts.reduce((total, attempt) => total + attempt.score, 0) / attempts.length) * 10) / 10
    : 0;
  return {
    attempts,
    approved,
    average,
    enrollments: user ? 1 : 0,
    routes: 0,
    practices: 0,
    simulators: 0
  };
}

function renderResultsSearch() {
  const query = resultsStudentSearch.value.trim().toLowerCase();
  const students = getResultStudents().filter((student) => {
    const searchable = `${student.name} ${student.email} ${student.document}`.toLowerCase();
    return query && searchable.includes(query);
  });

  document.querySelector("#resultsSuggestions").innerHTML =
    students
      .map(
        (student) => `
          <button class="result-suggestion" type="button" data-result-user-id="${student.id}">
            <span class="avatar-soft">${student.initials}</span>
            <span>
              <strong>${student.name}</strong>
              <small>${student.email}</small>
            </span>
            <span class="status-pill ${student.status}">${titleCaseStatus(student.status)}</span>
          </button>
        `
      )
      .join("") || (query ? `<div class="empty-state">No hay estudiantes para esa busqueda.</div>` : "");
}

function showResultsSearch() {
  selectedResultUserId = null;
  document.querySelector("#resultsDetailView").classList.add("is-hidden");
  document.querySelector("#resultsSearchView").classList.remove("is-hidden");
  moduleTitle.textContent = "Buscar estudiante";
  moduleDescription.textContent = "Selecciona un estudiante para abrir su ficha consolidada con inscripciones, rutas y evaluaciones.";
}

function showResultsDetail(userId) {
  selectedResultUserId = Number(userId);
  selectedResultTab = "resumen";
  document.querySelector("#resultsSearchView").classList.add("is-hidden");
  document.querySelector("#resultsDetailView").classList.remove("is-hidden");
  renderResultsDetail();
}

function renderResultsDetail() {
  const user = getSelectedResultUser();
  if (!user) {
    showResultsSearch();
    return;
  }

  const stats = getResultStats(user);
  moduleTitle.textContent = user.name;
  moduleDescription.textContent = "Vista consolidada del alumno con inscripciones, rutas asignadas y resultados de evaluacion.";
  document.querySelector("#resultAvatar").textContent = user.initials;
  document.querySelector("#resultStudentName").textContent = user.name;
  document.querySelector("#resultStudentEmail").textContent = user.email;
  document.querySelector("#resultStudentTags").innerHTML = `
    <span class="tag">Nivel pendiente de definir</span>
    <span class="status-pill ${user.status}">${titleCaseStatus(user.status)}</span>
    <span class="tag">${stats.enrollments} inscripciones</span>
  `;

  document.querySelector("#quickResultCard").innerHTML = `
    <h2>Resumen rapido</h2>
    <div class="quick-result-list">
      <span>Progreso promedio <strong>${stats.average}%</strong></span>
      <span>Evaluaciones aprobadas <strong>${stats.approved}</strong></span>
      <span>Practicas entregadas <strong>${stats.practices}</strong></span>
      <span>Simuladores completados <strong>${stats.simulators}</strong></span>
    </div>
  `;

  document.querySelector("#resultKpiGrid").innerHTML = `
    <article class="summary-card"><span>Inscripciones</span><strong>${stats.enrollments}</strong><small>Cursos visibles para este estudiante.</small></article>
    <article class="summary-card"><span>Rutas</span><strong>${stats.routes}</strong><small>Rutas asignadas con progreso consolidado.</small></article>
    <article class="summary-card"><span>Promedio</span><strong>${stats.average}%</strong><small>Avance academico global del estudiante.</small></article>
    <article class="summary-card"><span>Aprobado</span><strong>${stats.approved}</strong><small>Intentos de evaluacion aprobados.</small></article>
  `;

  document.querySelectorAll("#resultTabs .filter-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.resultTab === selectedResultTab);
  });
  renderResultTabContent(user, stats);
}

function renderResultTabContent(user, stats) {
  const attemptsHtml = stats.attempts
    .map((attempt) => {
      const evaluation = getEvaluationById(attempt.evaluationId);
      return `
        <article class="result-info-card">
          <h3>${evaluation?.code} - ${evaluation?.name}</h3>
          <p>Intento #${attempt.attempt} - ${attempt.origin}</p>
          <div class="progress-line"><span style="width:${Math.min(attempt.score, 100)}%"></span></div>
          <small>${attempt.score} puntos - ${titleCaseStatus(attempt.status)}</small>
        </article>
      `;
    })
    .join("") || `<div class="empty-state">No hay evaluaciones visibles.</div>`;

  const enrollmentHtml = `
    <article class="result-info-card">
      <h3>Fundamentos de Electricidad y Seguridad Electrica</h3>
      <p>Sin ruta asociada</p>
      <div class="progress-line"><span style="width:${Math.min(stats.average, 100)}%"></span></div>
      <small>${stats.average}% - ${stats.practices} practicas - ${stats.simulators} simuladores</small>
    </article>
  `;

  const routesHtml = `<div class="empty-state">No hay rutas visibles.</div>`;

  const panels = {
    resumen: `
      <section class="panel">
        <h2>Inscripciones recientes</h2>
        <small>Cursos vinculados al estudiante con avance y estado actual.</small>
        ${enrollmentHtml}
      </section>
      <section class="panel">
        <h2>Rutas asignadas</h2>
        <small>Cada ruta se muestra con su avance consolidado y sus cursos internos.</small>
        ${routesHtml}
      </section>
    `,
    inscripciones: `<section class="panel wide-result-panel"><h2>Inscripciones</h2>${enrollmentHtml}</section>`,
    rutas: `<section class="panel wide-result-panel"><h2>Rutas asignadas</h2>${routesHtml}</section>`,
    evaluaciones: `<section class="panel wide-result-panel"><h2>Evaluaciones</h2>${attemptsHtml}</section>`
  };

  document.querySelector("#resultsContentGrid").innerHTML = panels[selectedResultTab];
}

function renderResults() {
  moduleEyebrow.textContent = "Resultados";
  if (selectedResultUserId) {
    renderResultsDetail();
  } else {
    showResultsSearch();
    renderResultsSearch();
  }
}

function getFilteredSimulators() {
  const query = simulatorSearch.value.trim().toLowerCase();
  return simulators.filter((simulator) => {
    const searchable = `${simulator.name} ${simulator.slug} ${simulator.status} ${simulator.tags.join(" ")}`.toLowerCase();
    return !query || searchable.includes(query);
  });
}

function renderSimulatorSummary() {
  const filtered = getFilteredSimulators();
  const exercises = filtered.reduce((total, simulator) => total + simulator.exercises, 0);
  const selected = simulators.find((simulator) => simulator.id === selectedSimulatorId);
  document.querySelector("#simulatorSummary").innerHTML = `
    <article class="summary-card"><strong>${filtered.length}</strong><span>Simuladores</span></article>
    <article class="summary-card"><strong>${exercises}</strong><span>Ejercicios</span></article>
    <article class="summary-card"><strong>0</strong><span>Propios</span></article>
    <article class="summary-card"><strong>${selected?.name || "Ninguno"}</strong><span>Seleccionado</span></article>
  `;
}

function renderSimulatorGrid() {
  const filtered = getFilteredSimulators();
  document.querySelector("#simulatorCountLabel").textContent = `Mostrando ${filtered.length} de ${simulators.length}`;
  document.querySelector("#simulatorGrid").innerHTML =
    filtered
      .map(
        (simulator) => `
          <button class="simulator-card ${simulator.id === selectedSimulatorId ? "selected" : ""}" type="button" data-simulator-id="${simulator.id}">
            <span class="simulator-status ${simulator.status === "Conectado" ? "connected" : "browser"}">${simulator.status}</span>
            <strong>${simulator.name}</strong>
            <small>${simulator.slug}</small>
            <span class="simulator-exercises">${simulator.exercises} ejercicios</span>
            <span class="simulator-tags">
              ${simulator.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </span>
          </button>
        `
      )
      .join("") || `<div class="empty-state">No hay simuladores con esa busqueda.</div>`;
}

function renderSimulators() {
  renderSimulatorSummary();
  renderSimulatorGrid();
}

function openSimulatorModal(simulator) {
  selectedSimulatorId = simulator.id;
  renderSimulators();
  simulatorModal.classList.remove("is-hidden");
  document.querySelector("#simulatorModalTitle").textContent = simulator.name;
  document.querySelector("#simulatorLaunchBody").innerHTML = `
    <div class="launch-loader"></div>
    <h3>Ejecutando simulador...</h3>
    <p>Preparando entorno de demostracion para ${simulator.name}.</p>
  `;

  window.setTimeout(() => {
    if (simulatorModal.classList.contains("is-hidden")) return;
    document.querySelector("#simulatorLaunchBody").innerHTML = `
      <div class="provider-icon">!</div>
      <h3>Simulador no disponible en esta demostracion</h3>
      <p>Para ver el simulador funcional, comunicate con el proveedor. Esta pantalla conserva el flujo de seleccion para fines comerciales.</p>
      <button class="primary-action compact" type="button" id="ackSimulatorMessage">Entendido</button>
    `;
    document.querySelector("#ackSimulatorMessage").addEventListener("click", closeSimulatorModal);
  }, 1400);
}

function closeSimulatorModal() {
  simulatorModal.classList.add("is-hidden");
}

function getSupportArea(areaId) {
  return supportAreas.find((area) => area.id === areaId) || supportAreas[0];
}

function getFilteredTickets() {
  const status = ticketStatusFilter.value;
  const query = ticketSearchInput.value.trim().toLowerCase();
  return supportTickets.filter((ticket) => {
    const area = getSupportArea(ticket.area);
    const matchesStatus = status === "todos" || ticket.status === status;
    const searchable = `${ticket.title} ${ticket.description} ${ticket.reporter} ${area.name}`.toLowerCase();
    return matchesStatus && (!query || searchable.includes(query));
  });
}

function renderSupportSummary() {
  const open = supportTickets.filter((ticket) => ticket.status === "abierto").length;
  const review = supportTickets.filter((ticket) => ticket.status === "en_revision").length;
  const high = supportTickets.filter((ticket) => ticket.severity === "alta" && ticket.status !== "resuelto").length;
  const selectedArea = getSupportArea(selectedSupportArea);
  document.querySelector("#supportSummary").innerHTML = `
    <article class="summary-card"><strong>${supportTickets.length}</strong><span>Tickets</span><small>Total registrados</small></article>
    <article class="summary-card"><strong>${open}</strong><span>Abiertos</span><small>Requieren primera respuesta</small></article>
    <article class="summary-card"><strong>${review}</strong><span>En revision</span><small>En manos del equipo</small></article>
    <article class="summary-card"><strong>${high}</strong><span>Criticos</span><small>Severidad alta activa</small></article>
    <article class="summary-card"><strong>${selectedArea.name}</strong><span>Area afectada</span><small>Seleccion actual</small></article>
  `;
}

function renderAffectedAreas() {
  document.querySelector("#affectedAreaGrid").innerHTML = supportAreas
    .map(
      (area) => `
        <button class="affected-area-card ${area.id === selectedSupportArea ? "selected" : ""}" type="button" data-area-id="${area.id}">
          <span>${area.icon}</span>
          <strong>${area.name}</strong>
          <small>${area.description}</small>
        </button>
      `
    )
    .join("");
  document.querySelector("#ticketAreaInput").innerHTML = supportAreas
    .map((area) => `<option value="${area.id}">${area.name}</option>`)
    .join("");
  document.querySelector("#ticketAreaInput").value = selectedSupportArea;
}

function renderTicketList() {
  const tickets = getFilteredTickets();
  document.querySelector("#ticketCountLabel").textContent = `Mostrando ${tickets.length} de ${supportTickets.length}`;
  if (!tickets.some((ticket) => ticket.id === selectedTicketId) && tickets[0]) {
    selectedTicketId = tickets[0].id;
  }
  document.querySelector("#ticketList").innerHTML =
    tickets
      .map((ticket) => {
        const area = getSupportArea(ticket.area);
        return `
          <button class="ticket-row ${ticket.id === selectedTicketId ? "selected" : ""}" type="button" data-ticket-id="${ticket.id}">
            <span class="ticket-area-icon">${area.icon}</span>
            <span>
              <strong>#${ticket.id} - ${ticket.title}</strong>
              <small>${area.name} - ${ticket.createdAt}</small>
            </span>
            <span class="ticket-row-meta">
              <span class="severity-pill ${ticket.severity}">${ticket.severity}</span>
              <span class="status-pill ${ticket.status}">${ticket.status.replace("_", " ")}</span>
            </span>
          </button>
        `;
      })
      .join("") || `<div class="empty-state">No hay tickets con esos filtros.</div>`;
}

function renderTicketDetail() {
  const ticket = supportTickets.find((item) => item.id === selectedTicketId);
  const panel = document.querySelector("#ticketDetailPanel");
  if (!ticket) {
    panel.innerHTML = `<div class="empty-state">Selecciona un ticket para ver el detalle.</div>`;
    return;
  }
  const area = getSupportArea(ticket.area);
  panel.innerHTML = `
    <div class="ticket-detail-head">
      <span class="ticket-area-icon large">${area.icon}</span>
      <div>
        <p class="eyebrow">Ticket #${ticket.id}</p>
        <h2>${ticket.title}</h2>
        <p>${ticket.description}</p>
      </div>
    </div>
    <div class="profile-tags">
      <span class="tag">${area.name}</span>
      <span class="severity-pill ${ticket.severity}">${ticket.severity}</span>
      <span class="status-pill ${ticket.status}">${ticket.status.replace("_", " ")}</span>
    </div>
    <div class="ticket-actions">
      <button class="secondary-action compact" type="button" data-ticket-action="review">Marcar en revision</button>
      <button class="dark-action" type="button" data-ticket-action="resolve">Resolver</button>
    </div>
    <div class="ticket-meta-grid">
      <article><span>Reportado por</span><strong>${ticket.reporter}</strong></article>
      <article><span>Creado</span><strong>${ticket.createdAt}</strong></article>
      <article><span>Area</span><strong>${area.name}</strong></article>
      <article><span>Impacto</span><strong>${ticket.severity}</strong></article>
    </div>
    <h3>Bitacora</h3>
    <div class="ticket-activity">
      ${ticket.activity.map((item) => `<p>${item}</p>`).join("")}
    </div>
  `;
}

function renderSupport() {
  renderSupportSummary();
  renderAffectedAreas();
  renderTicketList();
  renderTicketDetail();
}

function renderActivityUserOptions() {
  const usersByEmail = [...new Map(activityLogs.map((log) => [log.email, log])).values()];
  activityUserFilter.innerHTML = `<option value="todos">Todos los usuarios</option>${usersByEmail
    .map((log) => `<option value="${log.email}">${log.user}</option>`)
    .join("")}`;
}

function getFilteredActivityLogs() {
  const query = activitySearchInput.value.trim().toLowerCase();
  const user = activityUserFilter.value;
  const type = activityTypeFilter.value;
  const date = activityDateFilter.value;
  return activityLogs.filter((log) => {
    const searchable = `${log.user} ${log.email} ${log.role} ${log.type} ${log.module} ${log.action} ${log.detail}`.toLowerCase();
    return (
      (!query || searchable.includes(query)) &&
      (user === "todos" || log.email === user) &&
      (type === "todos" || log.type === type) &&
      (date === "todos" || log.date === date)
    );
  });
}

function renderActivitySummary() {
  const logs = getFilteredActivityLogs();
  const uniqueUsers = new Set(logs.map((log) => log.email)).size;
  const today = logs.filter((log) => log.date === "hoy").length;
  const admin = logs.filter((log) => log.role === "Administrador").length;
  const selected = activityLogs.find((log) => log.id === selectedActivityId);
  document.querySelector("#activitySummary").innerHTML = `
    <article class="summary-card"><strong>${logs.length}</strong><span>Eventos</span><small>Segun filtros activos</small></article>
    <article class="summary-card"><strong>${uniqueUsers}</strong><span>Usuarios</span><small>Con actividad visible</small></article>
    <article class="summary-card"><strong>${today}</strong><span>Hoy</span><small>Eventos del dia</small></article>
    <article class="summary-card"><strong>${admin}</strong><span>Admin</span><small>Acciones administrativas</small></article>
    <article class="summary-card"><strong>${selected?.module || "Ninguno"}</strong><span>Seleccionado</span><small>Modulo del evento</small></article>
  `;
}

function renderActivityTable() {
  const logs = getFilteredActivityLogs();
  document.querySelector("#activityCountLabel").textContent = `Mostrando ${logs.length} de ${activityLogs.length}`;
  if (!logs.some((log) => log.id === selectedActivityId) && logs[0]) {
    selectedActivityId = logs[0].id;
  }
  document.querySelector("#activityTable").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Usuario</th>
          <th>Tipo</th>
          <th>Modulo</th>
          <th>Accion</th>
          <th>IP</th>
        </tr>
      </thead>
      <tbody>
        ${logs
          .map(
            (log) => `
              <tr class="${log.id === selectedActivityId ? "selected" : ""}" data-activity-id="${log.id}">
                <td>${log.time}</td>
                <td><strong>${log.user}</strong><small>${log.email}</small></td>
                <td><span class="activity-type ${log.type}">${log.type}</span></td>
                <td>${log.module}</td>
                <td>${log.action}</td>
                <td>${log.ip}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderActivityDetail() {
  const log = activityLogs.find((item) => item.id === selectedActivityId);
  const panel = document.querySelector("#activityDetailPanel");
  if (!log) {
    panel.innerHTML = `<div class="empty-state">Selecciona un evento para ver el detalle.</div>`;
    return;
  }
  panel.innerHTML = `
    <div class="activity-detail-head">
      <span class="avatar-large">${buildInitials(log.user)}</span>
      <div>
        <p class="eyebrow">Evento #${log.id}</p>
        <h2>${log.action}</h2>
        <p>${log.detail}</p>
      </div>
    </div>
    <div class="profile-tags">
      <span class="tag">${log.role}</span>
      <span class="activity-type ${log.type}">${log.type}</span>
      <span class="tag">${log.module}</span>
    </div>
    <div class="ticket-meta-grid">
      <article><span>Usuario</span><strong>${log.user}</strong></article>
      <article><span>Correo</span><strong>${log.email}</strong></article>
      <article><span>Fecha</span><strong>${log.date} ${log.time}</strong></article>
      <article><span>IP</span><strong>${log.ip}</strong></article>
      <article><span>Dispositivo</span><strong>${log.device}</strong></article>
      <article><span>Modulo</span><strong>${log.module}</strong></article>
    </div>
  `;
}

function renderActivity() {
  renderActivityUserOptions();
  renderActivitySummary();
  renderActivityTable();
  renderActivityDetail();
}

function downloadActivityReport() {
  const logs = getFilteredActivityLogs();
  const headers = ["id", "fecha", "hora", "usuario", "correo", "rol", "tipo", "modulo", "accion", "ip", "dispositivo", "detalle"];
  const rows = logs.map((log) => [
    log.id,
    log.date,
    log.time,
    log.user,
    log.email,
    log.role,
    log.type,
    log.module,
    log.action,
    log.ip,
    log.device,
    log.detail
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "informe-actividad-accesos.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function switchModule(moduleName) {
  const isUsers = moduleName === "usuarios";
  const isInstitution = moduleName === "institucion";
  const isAcademic = moduleName === "academico";
  const isEvaluation = moduleName === "evaluaciones";
  const isResults = moduleName === "resultados";
  const isSimulator = moduleName === "simuladores";
  const isSupport = moduleName === "soporte";
  const isActivity = moduleName === "actividad";
  moduleViews.forEach((view) => view.classList.toggle("is-hidden", view.dataset.view !== moduleName));

  if (!isUsers && !isInstitution && !isAcademic && !isEvaluation && !isResults && !isSimulator && !isSupport && !isActivity && moduleName !== "panel") {
    moduleViews.forEach((view) => view.classList.toggle("is-hidden", view.dataset.view !== "panel"));
  }

  moduleEyebrow.textContent = isUsers
    ? "Usuarios"
    : isInstitution
      ? "Instituciones"
      : isAcademic
        ? "Oferta academica"
        : isEvaluation
          ? "Evaluaciones"
          : isResults
            ? "Resultados"
            : isSimulator
              ? "Administracion"
              : isSupport
                ? "Soporte"
                : isActivity
                  ? "Actividad y accesos"
                : "Administracion";
  moduleTitle.textContent = isUsers
    ? "Gestion de usuarios"
    : isInstitution
      ? "Instituciones, sedes y sub-sedes"
      : isAcademic
        ? "Categorias y cursos"
        : isEvaluation
          ? "Monitor de evaluaciones"
          : isResults
            ? "Buscar estudiante"
            : isSimulator
              ? "Simuladores"
              : isSupport
                ? "Mesa de soporte"
                : isActivity
                  ? "Logs de actividad"
                : "Centro de mando";
  moduleDescription.textContent = isUsers
    ? "Consulta la base de personas, revisa registros pendientes y administra el estado de acceso."
    : isInstitution
      ? "Gestiona la estructura territorial desde la institucion hasta la sub-sede opcional."
      : isAcademic
        ? "Administra categorias tecnicas y cursos asociados dentro de la oferta academica."
        : isEvaluation
          ? "Sigue el desempeno evaluativo, detecta quizzes con mayor friccion y mantén visibles las nuevas oportunidades activas."
          : isResults
            ? "Selecciona un estudiante para abrir su ficha consolidada con inscripciones, rutas y evaluaciones."
            : isSimulator
              ? "Busca un simulador, revisa el inventario y abre su builder dedicado cuando necesites editarlo."
              : isSupport
                ? "Crea tickets de afectacion, identifica el area impactada y acompana la resolucion desde un panel operativo."
                : isActivity
                  ? "Consulta actividades de usuarios, filtra accesos y descarga informes de auditoria."
                : "Centro de mando operativo para acceso, actividad academica, soporte y continuidad institucional.";

  const copy = getLanguageCopy().modules[moduleName] || getLanguageCopy().modules.panel;
  moduleEyebrow.textContent = copy.eyebrow;
  moduleTitle.textContent = copy.title;
  moduleDescription.textContent = copy.description;

  if (isUsers) {
    renderUsers();
  }

  if (isInstitution) {
    renderInstitutions();
  }

  if (isAcademic) {
    renderAcademics();
  }

  if (isEvaluation) {
    renderEvaluations();
  }

  if (isResults) {
    renderResults();
  }

  if (isSimulator) {
    renderSimulators();
  }

  if (isSupport) {
    renderSupport();
  }

  if (isActivity) {
    renderActivity();
  }
}

function showDashboard() {
  authScreen.classList.add("is-hidden");
  dashboardScreen.classList.remove("is-hidden");
}

function showLogin() {
  dashboardScreen.classList.add("is-hidden");
  authScreen.classList.remove("is-hidden");
  sidebar.classList.remove("open");
}

function openUserModal(user) {
  document.querySelector("#userModalTitle").textContent = user ? "Editar usuario" : "Nuevo usuario";
  document.querySelector("#editingUserId").value = user?.id || "";
  document.querySelector("#userNameInput").value = user?.name || "";
  document.querySelector("#userEmailInput").value = user?.email || "";
  document.querySelector("#userDocumentInput").value = user?.document || "";
  document.querySelector("#userPhoneInput").value = user?.phone || "";
  document.querySelector("#userRoleInput").value = user?.role || "Estudiante";
  document.querySelector("#userInstitutionInput").value = user?.institution || institutions[0];
  document.querySelector("#userSiteInput").value = user?.site || "Sede";
  document.querySelector("#userStatusInput").value = user?.status || "activo";
  userModal.classList.remove("is-hidden");
}

function closeUserModal() {
  userModal.classList.add("is-hidden");
  userForm.reset();
}

function buildInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function findStructureEntity(id) {
  for (const institution of institutionTree) {
    if (institution.id === id) return { type: "institucion", institution };
    for (const site of institution.sites) {
      if (site.id === id) return { type: "sede", institution, site };
      for (const lab of site.labs) {
        if (lab.id === id) return { type: "laboratorio", institution, parent: site, lab };
      }
      for (const subSite of site.subSites) {
        if (subSite.id === id) return { type: "subsede", institution, site, subSite };
        for (const lab of subSite.labs) {
          if (lab.id === id) return { type: "laboratorio", institution, parent: subSite, lab };
        }
      }
    }
  }
  return null;
}

function openInstitutionModal(mode, entity, parentId = "") {
  const titles = {
    institution: "Nueva institucion",
    site: "Nueva sede",
    subsite: "Nueva sub-sede",
    lab: "Nuevo laboratorio"
  };
  const editing = Boolean(entity);
  document.querySelector("#institutionModalTitle").textContent = editing ? "Editar estructura" : titles[mode];
  document.querySelector("#institutionFormMode").value = mode;
  document.querySelector("#institutionEntityId").value = entity?.id || "";
  document.querySelector("#institutionParentId").value = parentId;
  document.querySelector("#institutionNameInput").value = entity?.name || "";
  document.querySelector("#institutionCodeInput").value = entity?.code || "";
  document.querySelector("#institutionAddressInput").value = entity?.address || "";
  document.querySelector("#institutionTypeInput").value =
    mode === "site" ? "sede" : mode === "subsite" ? "subsede" : mode === "lab" ? "laboratorio" : "institucion";
  institutionModal.classList.remove("is-hidden");
}

function closeInstitutionModal() {
  institutionModal.classList.add("is-hidden");
  institutionForm.reset();
}

function nextStructureId() {
  const ids = [];
  institutionTree.forEach((institution) => {
    ids.push(institution.id);
    institution.sites.forEach((site) => {
      ids.push(site.id, ...site.labs.map((lab) => lab.id));
      site.subSites.forEach((subSite) => ids.push(subSite.id, ...subSite.labs.map((lab) => lab.id)));
    });
  });
  return Math.max(...ids, 0) + 1;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showDashboard();
});

logoutButton.addEventListener("click", showLogin);

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => navItem.classList.remove("active"));
    item.classList.add("active");
    sidebar.classList.remove("open");
    switchModule(item.dataset.module);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

document.querySelector("#userStatusTabs").addEventListener("click", (event) => {
  const button = event.target.closest(".filter-tab");
  if (!button) return;
  document.querySelectorAll(".filter-tab").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  userStatusFilter = button.dataset.status;
  renderUsers();
});

document.querySelector("#userList").addEventListener("click", (event) => {
  const row = event.target.closest(".user-row");
  if (!row) return;
  selectedUserId = Number(row.dataset.userId);
  renderUsers();
});

document.querySelector("#profilePanel").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const user = users.find((item) => item.id === selectedUserId);
  if (!user) return;

  if (button.dataset.action === "edit" || button.dataset.action === "view") {
    openUserModal(user);
  }

  if (button.dataset.action === "toggle") {
    user.status = user.status === "inhabilitado" ? "activo" : "inhabilitado";
    renderUsers();
  }

  if (button.dataset.action === "quiz") {
    user.quiz = user.quiz === "Diagnostico inicial" ? "Refuerzo academico" : "Diagnostico inicial";
    renderProfile();
  }
});

document.querySelector("#newUserButton").addEventListener("click", () => openUserModal());
document.querySelector("#closeUserModal").addEventListener("click", closeUserModal);
document.querySelector("#cancelUserModal").addEventListener("click", closeUserModal);

document.querySelector("#newInstitutionButton").addEventListener("click", () => openInstitutionModal("institution"));
document.querySelector("#closeInstitutionModal").addEventListener("click", closeInstitutionModal);
document.querySelector("#cancelInstitutionModal").addEventListener("click", closeInstitutionModal);

document.querySelector("#institutionList").addEventListener("click", (event) => {
  const selectButton = event.target.closest(".institution-select");
  const actionButton = event.target.closest("button[data-structure-action]");

  if (selectButton) {
    selectedInstitutionId = Number(selectButton.dataset.institutionId);
    renderInstitutions();
  }

  if (!actionButton) return;

  const id = Number(actionButton.dataset.id);
  const found = findStructureEntity(id);

  if (actionButton.dataset.structureAction === "edit-institution" && found?.institution) {
    openInstitutionModal("institution", found.institution);
  }

  if (actionButton.dataset.structureAction === "delete-institution") {
    institutionTree = institutionTree.filter((institution) => institution.id !== id);
    selectedInstitutionId = institutionTree[0]?.id || 0;
    renderInstitutions();
    renderInstitutionOptions();
  }
});

document.querySelector("#institutionDetail").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-structure-action]");
  if (!button) return;

  const action = button.dataset.structureAction;
  const id = Number(button.dataset.id);
  const parentId = Number(button.dataset.parentId);
  const found = findStructureEntity(id);
  const parentFound = findStructureEntity(parentId);
  const institution = getSelectedInstitution();

  if (action === "new-site") {
    openInstitutionModal("site", null, selectedInstitutionId);
  }

  if (action === "edit-site" && found?.site) {
    openInstitutionModal("site", found.site, found.institution.id);
  }

  if (action === "delete-site" && found?.site) {
    found.institution.sites = found.institution.sites.filter((site) => site.id !== id);
    renderInstitutions();
  }

  if (action === "edit-subsite" && found?.subSite) {
    openInstitutionModal("subsite", found.subSite, found.site.id);
  }

  if (action === "delete-subsite" && found?.subSite) {
    found.site.subSites = found.site.subSites.filter((subSite) => subSite.id !== id);
    renderInstitutions();
  }

  if (action === "new-lab" && parentFound) {
    openInstitutionModal("lab", null, parentId);
  }

  if (action === "inline-subsite") {
    const site = institution.sites.find((item) => item.id === parentId);
    if (!site) return;
    const nameInput = document.querySelector(`[data-inline-name="${parentId}"]`);
    const codeInput = document.querySelector(`[data-inline-code="${parentId}"]`);
    const addressInput = document.querySelector(`[data-inline-address="${parentId}"]`);
    const name = nameInput.value.trim();
    if (!name) return;
    site.subSites.push({
      id: nextStructureId(),
      name,
      code: codeInput.value.trim() || "SUB",
      address: addressInput.value.trim() || "Sin direccion",
      labs: []
    });
    renderInstitutions();
  }
});

academicCategorySelect.addEventListener("change", () => {
  selectedAcademicCategoryId = Number(academicCategorySelect.value);
  renderAcademics();
});

document.querySelector("#selectedCategoryCard").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-academic-action]");
  if (!button) return;
  const category = getSelectedAcademicCategory();

  if (button.dataset.academicAction === "edit-category") {
    const nextName = window.prompt("Nombre de la categoria", category.label);
    if (!nextName) return;
    const nextCode = window.prompt("Codigo de la categoria", category.code);
    if (!nextCode) return;
    category.label = nextName.trim();
    category.code = nextCode.trim().toUpperCase();
    renderAcademics();
  }

  if (button.dataset.academicAction === "category-code") {
    category.code = `${category.code}-OK`;
    renderAcademics();
  }

  if (button.dataset.academicAction === "delete-category") {
    academicCategories = academicCategories.filter((item) => item.id !== category.id);
    selectedAcademicCategoryId = academicCategories[0]?.id || 0;
    renderAcademics();
  }
});

document.querySelector("#academicCourseList").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-academic-action]");
  if (!button) return;

  const category = getSelectedAcademicCategory();
  const courseId = Number(button.dataset.courseId);
  const course = category.courses.find((item) => item.id === courseId);
  if (!course) return;

  if (button.dataset.academicAction === "edit-course") {
    const nextName = window.prompt("Nombre del curso", course.name);
    if (!nextName) return;
    const nextCode = window.prompt("Codigo del curso", course.code);
    if (!nextCode) return;
    course.name = nextName.trim();
    course.code = nextCode.trim().toUpperCase();
    renderAcademics();
  }

  if (button.dataset.academicAction === "course-code") {
    course.code = `${course.code}-OK`;
    renderAcademics();
  }

  if (button.dataset.academicAction === "delete-course") {
    category.courses = category.courses.filter((item) => item.id !== courseId);
    renderAcademics();
  }
});

document.querySelector("#clearUserFilters").addEventListener("click", () => {
  userSearch.value = "";
  roleFilter.value = "todos";
  institutionFilter.value = "todas";
  userStatusFilter = "todos";
  document.querySelectorAll(".filter-tab").forEach((item) => {
    item.classList.toggle("active", item.dataset.status === "todos");
  });
  renderUsers();
});

[userSearch, roleFilter, institutionFilter].forEach((control) => {
  control.addEventListener("input", renderUsers);
  control.addEventListener("change", renderUsers);
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const editingId = Number(document.querySelector("#editingUserId").value);
  const payload = {
    name: document.querySelector("#userNameInput").value.trim(),
    email: document.querySelector("#userEmailInput").value.trim(),
    document: document.querySelector("#userDocumentInput").value.trim(),
    phone: document.querySelector("#userPhoneInput").value.trim(),
    role: document.querySelector("#userRoleInput").value,
    institution: document.querySelector("#userInstitutionInput").value,
    site: document.querySelector("#userSiteInput").value.trim(),
    status: document.querySelector("#userStatusInput").value,
    quiz: "Diagnostico inicial"
  };

  if (editingId) {
    users = users.map((user) =>
      user.id === editingId ? { ...user, ...payload, initials: buildInitials(payload.name) } : user
    );
    selectedUserId = editingId;
  } else {
    const newUser = {
      id: Math.max(...users.map((user) => user.id)) + 1,
      ...payload,
      initials: buildInitials(payload.name)
    };
    users = [newUser, ...users];
    selectedUserId = newUser.id;
  }

  closeUserModal();
  renderUsers();
});

institutionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const mode = document.querySelector("#institutionFormMode").value;
  const entityId = Number(document.querySelector("#institutionEntityId").value);
  const parentId = Number(document.querySelector("#institutionParentId").value);
  const payload = {
    name: document.querySelector("#institutionNameInput").value.trim(),
    code: document.querySelector("#institutionCodeInput").value.trim(),
    address: document.querySelector("#institutionAddressInput").value.trim()
  };

  if (entityId) {
    const found = findStructureEntity(entityId);
    if (found?.institution && found.type === "institucion") Object.assign(found.institution, payload);
    if (found?.site) Object.assign(found.site, payload);
    if (found?.subSite) Object.assign(found.subSite, payload);
    if (found?.lab) Object.assign(found.lab, payload);
  } else if (mode === "institution") {
    const newInstitution = { id: nextStructureId(), ...payload, sites: [] };
    institutionTree = [newInstitution, ...institutionTree];
    selectedInstitutionId = newInstitution.id;
  } else if (mode === "site") {
    const institution = institutionTree.find((item) => item.id === parentId);
    institution?.sites.push({ id: nextStructureId(), ...payload, labs: [], subSites: [] });
  } else if (mode === "subsite") {
    const found = findStructureEntity(parentId);
    found?.site?.subSites.push({ id: nextStructureId(), ...payload, labs: [] });
  } else if (mode === "lab") {
    const found = findStructureEntity(parentId);
    const lab = { id: nextStructureId(), ...payload };
    if (found?.site) found.site.labs.push(lab);
    if (found?.subSite) found.subSite.labs.push(lab);
  }

  const names = institutionTree.map((institution) => institution.name);
  names.forEach((name) => {
    if (!institutions.includes(name)) institutions.push(name);
  });
  closeInstitutionModal();
  renderInstitutions();
  renderInstitutionOptions();
});

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#categoryNameInput").value.trim();
  const code = document.querySelector("#categoryCodeInput").value.trim().toUpperCase();
  if (!name || !code) return;

  const newCategory = {
    id: nextAcademicId(),
    code,
    label: name,
    color: "#1459bf",
    courses: []
  };
  academicCategories = [newCategory, ...academicCategories];
  selectedAcademicCategoryId = newCategory.id;
  categoryForm.reset();
  renderAcademics();
});

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const category = getSelectedAcademicCategory();
  const name = document.querySelector("#courseNameInput").value.trim();
  const code = document.querySelector("#courseCodeInput").value.trim().toUpperCase();
  const modules = Number(document.querySelector("#courseModulesInput").value) || 0;
  if (!category || !name || !code) return;

  category.courses = [
    { id: nextAcademicId(), code, name, modules },
    ...category.courses
  ];
  courseForm.reset();
  document.querySelector("#courseModulesInput").value = 0;
  renderAcademics();
});

evaluationSearch.addEventListener("input", renderEvaluations);

resultsStudentSearch.addEventListener("input", renderResultsSearch);

document.querySelector("#resultsSuggestions").addEventListener("click", (event) => {
  const button = event.target.closest(".result-suggestion");
  if (!button) return;
  showResultsDetail(button.dataset.resultUserId);
});

document.querySelector("#backToResultsSearch").addEventListener("click", () => {
  resultsStudentSearch.value = "";
  showResultsSearch();
  renderResultsSearch();
});

document.querySelector("#resultTabs").addEventListener("click", (event) => {
  const button = event.target.closest(".filter-tab");
  if (!button) return;
  selectedResultTab = button.dataset.resultTab;
  renderResultsDetail();
});

simulatorSearch.addEventListener("input", renderSimulators);

document.querySelector("#simulatorGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".simulator-card");
  if (!card) return;
  const simulator = simulators.find((item) => item.id === Number(card.dataset.simulatorId));
  if (simulator) openSimulatorModal(simulator);
});

document.querySelector("#closeSimulatorModal").addEventListener("click", closeSimulatorModal);

document.querySelector("#toggleSimulatorBuilder").addEventListener("click", (event) => {
  const button = event.currentTarget;
  button.textContent = button.textContent === "Ocultar" ? "Mostrar" : "Ocultar";
});

document.querySelector("#affectedAreaGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".affected-area-card");
  if (!card) return;
  selectedSupportArea = card.dataset.areaId;
  renderSupport();
});

document.querySelector("#ticketAreaInput").addEventListener("change", (event) => {
  selectedSupportArea = event.target.value;
  renderAffectedAreas();
  renderSupportSummary();
});

document.querySelector("#quickTicketButton").addEventListener("click", () => {
  const area = getSupportArea(selectedSupportArea);
  document.querySelector("#ticketTitleInput").value = `Afectacion en ${area.name}`;
  document.querySelector("#ticketDescriptionInput").value = `Se reporta afectacion operativa en ${area.name}. Requiere validacion del equipo de soporte.`;
});

supportTicketForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const area = document.querySelector("#ticketAreaInput").value;
  const newTicket = {
    id: Math.max(...supportTickets.map((ticket) => ticket.id), 1000) + 1,
    title: document.querySelector("#ticketTitleInput").value.trim(),
    area,
    severity: document.querySelector("#ticketSeverityInput").value,
    status: "abierto",
    reporter: document.querySelector("#ticketReporterInput").value.trim(),
    description: document.querySelector("#ticketDescriptionInput").value.trim(),
    createdAt: "Ahora",
    activity: ["Ticket creado desde panel de soporte.", `Area afectada: ${getSupportArea(area).name}.`]
  };
  supportTickets = [newTicket, ...supportTickets];
  selectedTicketId = newTicket.id;
  selectedSupportArea = area;
  supportTicketForm.reset();
  document.querySelector("#ticketReporterInput").value = "admin@lms.local";
  document.querySelector("#ticketSeverityInput").value = "media";
  renderSupport();
});

[ticketStatusFilter, ticketSearchInput].forEach((control) => {
  control.addEventListener("input", () => {
    renderTicketList();
    renderTicketDetail();
  });
  control.addEventListener("change", () => {
    renderTicketList();
    renderTicketDetail();
  });
});

document.querySelector("#ticketList").addEventListener("click", (event) => {
  const row = event.target.closest(".ticket-row");
  if (!row) return;
  selectedTicketId = Number(row.dataset.ticketId);
  renderTicketList();
  renderTicketDetail();
});

document.querySelector("#ticketDetailPanel").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-ticket-action]");
  if (!button) return;
  const ticket = supportTickets.find((item) => item.id === selectedTicketId);
  if (!ticket) return;
  if (button.dataset.ticketAction === "review") {
    ticket.status = "en_revision";
    ticket.activity = ["Ticket marcado en revision.", ...ticket.activity];
  }
  if (button.dataset.ticketAction === "resolve") {
    ticket.status = "resuelto";
    ticket.activity = ["Ticket resuelto y comunicado al solicitante.", ...ticket.activity];
  }
  renderSupport();
});

[activitySearchInput, activityUserFilter, activityTypeFilter, activityDateFilter].forEach((control) => {
  control.addEventListener("input", () => {
    renderActivitySummary();
    renderActivityTable();
    renderActivityDetail();
  });
  control.addEventListener("change", () => {
    renderActivitySummary();
    renderActivityTable();
    renderActivityDetail();
  });
});

document.querySelector("#activityTable").addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-activity-id]");
  if (!row) return;
  selectedActivityId = Number(row.dataset.activityId);
  renderActivitySummary();
  renderActivityTable();
  renderActivityDetail();
});

document.querySelector("#downloadActivityReport").addEventListener("click", downloadActivityReport);

enableAttemptForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const evaluationId = Number(document.querySelector("#enableEvaluationSelect").value);
  const student = document.querySelector("#enableStudentInput").value.trim();
  const reason = document.querySelector("#enableReasonInput").value.trim();
  const extra = Number(document.querySelector("#enableExtraInput").value) || 1;

  if (!student || !reason) return;

  activeHabilitations = [
    { id: Date.now(), evaluationId, student, reason, extra },
    ...activeHabilitations
  ];

  const previousAttempts = evaluationAttempts.filter(
    (attempt) => attempt.student.toLowerCase() === student.toLowerCase() && attempt.evaluationId === evaluationId
  );
  evaluationAttempts = [
    {
      id: Date.now() + 1,
      student,
      document: "habilitado",
      evaluationId,
      attempt: previousAttempts.length + 1,
      score: 0,
      status: "reprobado",
      origin: "Habilitacion manual"
    },
    ...evaluationAttempts
  ];

  enableAttemptForm.reset();
  document.querySelector("#enableExtraInput").value = 1;
  renderEvaluations();
});

renderInstitutionOptions();
applyLanguage("es");
