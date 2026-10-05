import type { Metadata } from 'next';

export type Locale = 'es' | 'en';
export const routeKeys = ['home', 'approach', 'programs', 'stay', 'team', 'resources', 'aftercare', 'inquiry', 'terms', 'privacy', 'recipe', 'rest', 'reflection', 'hydration', 'movement', 'community'] as const;
export type PageKey = typeof routeKeys[number];
export const paths: Record<Locale, Record<PageKey, string>> = {
  es: { home: '', approach: 'nuestro-modelo', programs: 'programas', stay: 'planifique-su-estadia', team: 'equipo', resources: 'recursos', aftercare: 'acompanamiento', inquiry: 'consulta', terms: 'terminos', privacy: 'privacidad', recipe: 'recursos/avena-con-frutas', rest: 'recursos/ritmo-de-descanso', reflection: 'recursos/espacio-para-la-fe', hydration: 'recursos/hidratacion-consciente', movement: 'recursos/movimiento-cotidiano', community: 'recursos/crecer-en-comunidad' },
  en: { home: '', approach: 'our-model', programs: 'programs', stay: 'plan-your-stay', team: 'team', resources: 'resources', aftercare: 'aftercare', inquiry: 'inquiry', terms: 'terms', privacy: 'privacy', recipe: 'resources/oats-and-fruit', rest: 'resources/a-rhythm-of-rest', reflection: 'resources/space-for-faith', hydration: 'resources/mindful-hydration', movement: 'resources/everyday-movement', community: 'resources/growing-in-community' },
};
export function href(locale: Locale, page: PageKey) { return `${locale === 'en' ? '/en' : ''}/${paths[locale][page]}`; }
export function resolvePage(locale: Locale, path: string) { return routeKeys.find(key => paths[locale][key] === path); }
export function copy(locale: Locale, es: string, en: string) { return locale === 'es' ? es : en; }
export const titles: Record<PageKey, [string, string]> = {
  home: ['Una nueva forma de vivir', 'A new way of living'], approach: ['Nuestro modelo 3×3', 'Our 3×3 model'], programs: ['Programas de inmersión', 'Immersion programs'], stay: ['Planifique su estadía', 'Plan your stay'], team: ['Nuestro equipo', 'Our team'], resources: ['La biblioteca del bienestar', 'The wellbeing library'], aftercare: ['Su camino continúa', 'Your journey continues'], inquiry: ['Comience su camino', 'Begin your journey'], terms: ['Términos del sitio', 'Website terms'], privacy: ['Privacidad de la demo', 'Demo privacy'], recipe: ['Avena con frutas y semillas', 'Oats with fruit and seeds'], rest: ['Un ritmo de descanso', 'A rhythm of rest'], reflection: ['Un espacio para la fe', 'A little space for faith'], hydration: ['Hidratación consciente', 'Mindful hydration'], movement: ['Movimiento en lo cotidiano', 'Movement in the everyday'], community: ['Crecer en comunidad', 'Growing in community'],
};
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  return { title: `${titles[page][locale === 'es' ? 0 : 1]} | Country Life`, description: copy(locale, 'Educación en estilo de vida, inmersión residencial y bienestar integral en Bayaguana, República Dominicana. Conozca el Modelo Esfera de Bienestar 3×3™.', 'Lifestyle education, residential immersion, and whole-person wellbeing in Bayaguana, Dominican Republic. Discover the 3×3 Wellness Sphere Model™.'), alternates: { canonical: href(locale, page), languages: { 'es-DO': href('es', page), 'en-US': href('en', page), 'x-default': href('es', page) } }, robots: { index: false, follow: false } };
}
export const disclaimer: Record<Locale, string> = {
  es: 'El Centro de Estilo de Vida Country Life es una institución educativa dedicada a la restauración del estilo de vida y al bienestar integral. Los programas, seminarios y experiencias formativas ofrecidos son de carácter educativo y se fundamentan en principios bíblicos de salud respaldados por la investigación científica. Country Life no proporciona diagnósticos médicos, tratamientos clínicos ni prescripciones farmacéuticas. Nuestras ofertas están diseñadas para complementar, y no sustituir, la atención de su médico personal. Se exhorta a los participantes a consultar con su proveedor de salud respecto a cualquier condición médica preexistente o cambio en sus tratamientos prescritos.',
  en: 'The Country Life Lifestyle Center is an educational institution dedicated to lifestyle restoration and whole-person wellness. The programs, seminars, and living experiences offered are educational in nature and rooted in biblical principles of health substantiated by scientific research. Country Life does not provide medical diagnoses, clinical treatments, or pharmaceutical prescriptions. Our offerings are designed to complement, not replace, the care of your personal medical physician. Participants are encouraged to consult their healthcare provider regarding any ongoing medical conditions or changes to prescribed therapies.',
};
export const attribution: Record<Locale, string> = {
  es: 'El Modelo Esfera de Bienestar 3×3™ y el currículo asociado son propiedad intelectual de Bridges To Hope y están licenciados para el uso del Instituto Country Life República Dominicana. Todos los derechos reservados.',
  en: 'The 3×3 Wellness Sphere Model™ and associated curriculum are proprietary intellectual property owned by Bridges To Hope and are licensed for use by Country Life Institute Dominican Republic. All rights reserved.',
};
export const photos = {
  hero: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=85',
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85',
  food: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1000&q=85',
  room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85',
  oats: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1000&q=85',
  water: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1000&q=85',
  sunset: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85',
};
export type VideoClip = { src: string; poster: string; title: [string, string]; text: [string, string] };
const mixkit = (id: number, title: [string, string], text: [string, string]): VideoClip => ({ src: `https://assets.mixkit.co/videos/${id}/${id}-720.mp4`, poster: `https://assets.mixkit.co/videos/${id}/${id}-thumb-720-0.jpg`, title, text });
const clip = {
  movement: mixkit(40764, ['Movimiento al aire libre', 'Movement outdoors'], ['Estiramientos y ejercicio suave entre los árboles para despertar el cuerpo.', 'Stretching and gentle exercise among the trees to wake up the body.']),
  prayer: mixkit(5893, ['Oración en comunidad', 'Prayer in community'], ['Culto matutino y momentos de oración compartidos al aire libre.', 'Morning worship and shared moments of prayer in the open air.']),
  word: mixkit(24172, ['Tiempo con la Palabra', 'Time in the Word'], ['Lectura y reflexión bíblica que dan dirección y paz a cada jornada.', 'Bible reading and reflection that bring direction and peace to each day.']),
  garden: mixkit(9131, ['Del huerto a la mesa', 'From garden to table'], ['Aprender de dónde viene la comida y cultivar con nuestras propias manos.', 'Learning where food comes from and growing it with our own hands.']),
  kitchen: mixkit(17225, ['Cocina a base de plantas', 'Plant-based kitchen'], ['Clases prácticas para preparar comidas sencillas, frescas y nutritivas.', 'Hands-on classes to prepare simple, fresh, nourishing meals.']),
  water: mixkit(108, ['Hidratación consciente', 'Mindful hydration'], ['Agua pura, aire fresco y pausas para escuchar al cuerpo.', 'Pure water, fresh air, and pauses to listen to your body.']),
  walk: mixkit(41574, ['Caminatas matutinas', 'Morning walks'], ['Senderos entre los árboles para comenzar el día con energía y calma.', 'Trails through the trees to start the day with energy and calm.']),
  community: mixkit(39767, ['Comunidad cercana', 'A caring community'], ['Caminar juntos, conversar y crecer acompañados.', 'Walking together, talking, and growing in good company.']),
  dawn: mixkit(21143, ['Descanso y nuevo amanecer', 'Rest and a new dawn'], ['Un ritmo de sueño reparador: cada mañana es una oportunidad para comenzar de nuevo.', 'A restorative sleep rhythm: every morning is a chance to begin again.']),
  stream: mixkit(529, ['Calma junto al arroyo', 'Calm by the stream'], ['El sonido del agua invita a bajar el ritmo y respirar profundo.', 'The sound of water invites you to slow down and breathe deeply.']),
  produce: mixkit(26646, ['Alimentos frescos', 'Fresh produce'], ['Vegetales de temporada como base de cada comida del programa.', 'Seasonal vegetables at the heart of every program meal.']),
  prep: mixkit(15510, ['Preparación sencilla', 'Simple preparation'], ['Lavar, cortar y combinar: hábitos de cocina que se llevan a casa.', 'Washing, chopping, and combining: kitchen habits you take home.']),
  greens: mixkit(999, ['Nuestro huerto', 'Our garden'], ['Hojas verdes y hierbas que crecen cerca de la cocina.', 'Leafy greens and herbs growing close to the kitchen.']),
  creek: mixkit(51585, ['Paisajes del campo', 'Countryside landscapes'], ['Ríos, colinas y vegetación alrededor de Bayaguana.', 'Rivers, hills, and greenery around Bayaguana.']),
  stretch: mixkit(40749, ['Ejercicio diario', 'Daily exercise'], ['Rutinas de movimiento adaptadas a cada huésped.', 'Movement routines adapted to each guest.']),
  homeCooking: mixkit(26573, ['Cocinar en casa', 'Cooking at home'], ['Recetas sencillas para mantener los nuevos hábitos después de la estadía.', 'Simple recipes to keep new habits going after your stay.']),
  hydrate: mixkit(52132, ['Constancia diaria', 'Everyday consistency'], ['Pequeños hábitos, como hidratarse, que se mantienen con acompañamiento.', 'Small habits, like staying hydrated, sustained with ongoing support.']),
};
export const videos = {
  hero: [
    mixkit(4629, ['Caminar al atardecer', 'An evening walk'], ['', '']),
    mixkit(18272, ['Un momento de gratitud', 'A moment of gratitude'], ['', '']),
    mixkit(23818, ['Senderos del campo', 'Country paths'], ['', '']),
    mixkit(996, ['Cuidar el huerto', 'Tending the garden'], ['', '']),
  ],
  life: [clip.movement, clip.prayer, clip.garden, clip.kitchen, clip.water, clip.walk, clip.community, clip.dawn],
  approach: [clip.prayer, clip.word, clip.dawn, clip.stream, clip.movement, clip.produce],
  programs: [clip.garden, clip.kitchen, clip.stretch, clip.walk, clip.prayer],
  stay: [clip.creek, clip.produce, clip.prep, clip.greens, clip.stream],
  aftercare: [clip.homeCooking, clip.hydrate, clip.community, clip.word],
  resources: [clip.kitchen, clip.water, clip.dawn, clip.stretch, clip.word, clip.community],
};
export const pillars = [
  { name: ['Gobernadores', 'Governors'], subtitle: ['El centro espiritual y mental', 'The spiritual & mental core'], description: ['Alinear el espíritu, la voluntad y el intelecto emocional para cultivar resiliencia, paz y una vida con propósito.', 'Aligning the spirit, will, and emotional intellect to cultivate resilience, peace, and purposeful living.'], laws: [
    { name: ['Relación Divina', 'Divine Relationship'], text: ['Confianza en Dios, conexión espiritual y principios del reposo sabático.', 'Trust in God, spiritual connection, and principles of Sabbath rest.'] },
    { name: ['Equilibrio Positivo', 'Positive Balance'], text: ['Cultivar hábitos saludables y dejar atrás, paso a paso, los que no nos ayudan.', 'Cultivating helpful habits and gradually letting go of those that do not serve us.'] },
    { name: ['Inteligencia Social', 'Social Intelligence'], text: ['Resiliencia emocional, servicio desinteresado y relaciones que enriquecen la vida.', 'Emotional resilience, selfless service, and relationships that enrich everyday life.'] },
  ] },
  { name: ['Nutrientes', 'Nutrients'], subtitle: ['Lo que nutre la vida', 'What nourishes life'], description: ['Explorar los aportes esenciales de los alimentos, el agua y el aire a una vida cotidiana equilibrada.', 'Exploring the essential contributions of food, water, and air to a balanced daily life.'], laws: [
    { name: ['Alimentación Saludable', 'Healthy Alimentation'], text: ['Alimentación basada en plantas integrales sin refinar y aprendizaje culinario en La Mesa Viva.', 'Whole, unrefined plant-based food and practical culinary learning at The Living Table.'] },
    { name: ['Hidratación Saludable', 'Healthy Hydration'], text: ['Aprender a integrar el consumo de agua en las rutinas diarias, respetando la orientación personal de salud.', 'Learning to include water in daily routines while respecting individual healthcare guidance.'] },
    { name: ['Intercambio de Aire Saludable', 'Healthy Air Exchange'], text: ['Respiración consciente y momentos al aire libre para conectar con nuestro entorno.', 'Mindful breathing and time outdoors to connect with our surroundings.'] },
  ] },
  { name: ['Activadores', 'Activators'], subtitle: ['Los ritmos de cada día', 'The rhythms of each day'], description: ['Crear espacio para el movimiento, el descanso y la luz natural como parte de una vida restauradora.', 'Making room for movement, rest, and natural light as part of restorative living.'], laws: [
    { name: ['Actividad Física', 'Physical Activity'], text: ['Movimiento intencional, actividades funcionales y trabajo útil al aire libre, según la capacidad personal.', 'Intentional movement, functional activities, and useful outdoor work, suited to personal ability.'] },
    { name: ['Descanso Adecuado', 'Adequate Rest'], text: ['Rutinas de sueño, pausas restauradoras y momentos de quietud mental.', 'Sleep routines, restorative pauses, and moments of mental stillness.'] },
    { name: ['Exposición Adecuada a la Luz Solar', 'Adequate Sunlight Exposure'], text: ['Un encuentro consciente y prudente con la luz natural y los ritmos del día.', 'Mindful, sensible time in natural light and connection with the rhythms of the day.'] },
  ] },
];
export const programs = [
  { days: 7, price: 420, label: ['EL PRIMER PASO', 'THE FIRST STEP'], name: ['Inmersión introductoria', 'Introductory immersion'], text: ['Una introducción práctica a los principios de vida restauradora. Desconecte de la rutina y descubra un nuevo ritmo.', 'A practical introduction to restorative living principles. Step away from your routine and discover a new rhythm.'] },
  { days: 14, price: 840, label: ['ESPACIO PARA CRECER', 'ROOM TO GROW'], name: ['Restauración del estilo de vida', 'Lifestyle restoration'], text: ['Una inmersión de duración intermedia para profundizar en el aprendizaje, la reflexión y el cultivo de hábitos.', 'A mid-length immersion to deepen your learning, reflection, and daily habit cultivation.'] },
  { days: 21, price: 1260, label: ['NUESTRA EXPERIENCIA INSIGNIA', 'OUR FLAGSHIP EXPERIENCE'], name: ['Transformación de hábitos', 'Habit transformation'], text: ['Nuestra experiencia más completa: tiempo para practicar, aprender en comunidad y construir su esfera de bienestar personal.', 'Our fullest experience: time to practice, learn in community, and build your personal wellness sphere.'] },
];
export const faculty = [
  { name: 'José Jimenez Black', initials: 'JJ', role: ['Presidente y Director Ejecutivo', 'President & Executive Director'], specialty: ['Liderazgo · Educación en estilo de vida', 'Leadership · Lifestyle education'], bio: ['Con más de 20 años de experiencia en liderazgo y educación en estilo de vida, José dirige el Instituto Country Life República Dominicana. Suboficial Superior retirado del Ejército de los Estados Unidos, es graduado en Estudios Médicos por Wayland Baptist University y cuenta con certificación en Nutrición Basada en Plantas por el T. Colin Campbell Center for Nutrition Studies. Como líder en Bridges To Hope, orienta el desarrollo de programas fundamentados en principios de fe.', 'With more than 20 years of leadership and lifestyle education experience, José leads Country Life Institute Dominican Republic. A retired senior U.S. Army noncommissioned officer, he holds an applied science degree in Medical Studies from Wayland Baptist University and a Plant-Based Nutrition certificate from the T. Colin Campbell Center for Nutrition Studies. As a leader in Bridges To Hope, he guides the development of faith-rooted educational programs.'] },
  { name: 'Luz Jimenez', initials: 'LJ', role: ['Directora de Cocina Basada en Plantas y Coach de Bienestar', 'Plant-Based Culinary Director & Wellness Coach'], specialty: ['La Mesa Viva · Formación culinaria', 'The Living Table · Culinary education'], bio: ['Conferencista internacional y coach de bienestar con más de 15 años de experiencia, Luz es graduada en Ingeniería Industrial y coautora de Tres Pasos Hacia el Edén, propiedad de Bridges To Hope. Lidera La Mesa Viva, convirtiendo el aprendizaje culinario en recetas prácticas, deliciosas y accesibles que los participantes pueden preparar en casa.', 'An international speaker and wellness coach with more than 15 years of experience, Luz holds an Industrial Engineering degree and co-authored Three Steps Toward Eden, owned by Bridges To Hope. She leads The Living Table, translating culinary learning into practical, delicious, accessible recipes participants can prepare at home.'] },
  { name: 'Dra. Cornalina Cabrera', initials: 'CC', role: ['Médico del Centro de Estilo de Vida y Consultora de Terapia Física', 'Lifestyle Center Physician & Physical Therapy Consultant'], specialty: ['Educación en salud · Movimiento', 'Health education · Movement'], bio: ['Graduada en medicina por la Universidad Tecnológica de Santiago (UTESA), con diplomados en Fisioterapia y Masoterapia por INFOTEP. La Dra. Cabrera contribuye a la labor educativa del centro con formación sobre movimiento y principios fisiológicos. Su participación en los programas es formativa; no convierte la inmersión en un servicio de atención médica.', 'A medical graduate of Universidad Tecnológica de Santiago (UTESA), with further training in physiotherapy and massage at INFOTEP, Dr. Cabrera contributes to the center’s educational work through teaching about movement and physiological principles. Her role in the programs is educational; it does not make the immersion a medical care service.'] },
  { name: 'Sarah Bohórquez', initials: 'SB', role: ['Coach de Estilo de Vida y Coordinadora de Admisiones', 'Lifestyle Coach & Scheduling Coordinator'], specialty: ['Orientación personal · Acompañamiento', 'Personal orientation · Guest support'], bio: ['Licenciada en Educación, misionera internacional y educadora en salud, Sarah acompaña a los interesados durante la consulta, orientación y llegada. Su trayectoria dirigiendo centros de estilo de vida y su vocación de servicio cristiano brindan una guía cercana en cada paso de la experiencia.', 'An education graduate, international missionary, and health educator, Sarah supports prospective guests through enquiry, orientation, and arrival. Her experience leading lifestyle centers and her commitment to Christian service bring personal guidance to every step of the experience.'] },
];
export const resources: { id: PageKey; pillar: number; type: 'article' | 'recipe'; image: string; minutes: number; excerpt: [string, string] }[] = [
  { id: 'recipe', pillar: 1, type: 'recipe', image: photos.oats, minutes: 15, excerpt: ['Una receta sencilla de La Mesa Viva, con ingredientes integrales y sin aceites ni azúcares refinados.', 'A simple Living Table recipe with whole ingredients, free from refined oils and sugars.'] },
  { id: 'rest', pillar: 2, type: 'article', image: photos.sunset, minutes: 4, excerpt: ['Pequeñas decisiones que ayudan a hacer espacio para las pausas y el descanso diario.', 'Small choices that make room for pauses and rest in everyday life.'] },
  { id: 'reflection', pillar: 0, type: 'article', image: photos.forest, minutes: 3, excerpt: ['Una invitación a comenzar el día con gratitud, reflexión y conexión espiritual.', 'An invitation to begin the day with gratitude, reflection, and spiritual connection.'] },
  { id: 'hydration', pillar: 1, type: 'article', image: photos.water, minutes: 3, excerpt: ['Ideas prácticas para prestar atención al agua en su rutina cotidiana.', 'Practical ideas for paying attention to water in your everyday routine.'] },
  { id: 'movement', pillar: 2, type: 'article', image: photos.hero, minutes: 4, excerpt: ['Caminatas, tareas útiles y formas sencillas de moverse con intención.', 'Walks, useful tasks, and simple ways to move with intention.'] },
  { id: 'community', pillar: 0, type: 'article', image: photos.food, minutes: 3, excerpt: ['Escuchar, compartir y servir: hábitos que nutren nuestras relaciones.', 'Listening, sharing, and serving: habits that nurture our relationships.'] },
];

