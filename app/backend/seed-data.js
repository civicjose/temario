const topic01Content = require("./topic01-content");
const topic02Content = require("./topic02-content");

const topic01Sources = [
    {
        label: "BOE - Texto constitucional vigente",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229",
        note: "Texto consolidado de la Constitución Española de 1978."
    },
    {
        label: "BOE - Reforma del artículo 49",
        url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2024-3099",
        note: "Reforma constitucional de 15 de febrero de 2024."
    },
    {
        label: "Congreso - Elaboración de la Constitución",
        url: "https://app.congreso.es/consti/constitucion/elaboracion/",
        note: "Proceso constituyente y fechas clave."
    },
    {
        label: "Congreso - Índice sistemático",
        url: "https://app.congreso.es/consti/constitucion/indice/index.htm",
        note: "Distribución sistemática por títulos, capítulos y artículos."
    }
];

const topic01Questions = [
    // Proceso constituyente
    ["proceso","¿En qué fecha aprobaron las Cortes la Constitución Española de 1978?","31 de octubre de 1978","6 de diciembre de 1978","27 de diciembre de 1978","29 de diciembre de 1978","A","La aprobación parlamentaria fue el 31 de octubre de 1978.","Congreso - Elaboración de la Constitución",2],
    ["proceso","¿Qué fecha corresponde al referéndum constitucional?","15 de junio de 1977","6 de diciembre de 1978","27 de diciembre de 1978","29 de diciembre de 1978","B","El referéndum se celebró el 6 de diciembre de 1978.","Congreso - Elaboración de la Constitución",1],
    ["proceso","¿Cuándo entró en vigor la Constitución?","El mismo día de su publicación en el BOE","Al día siguiente de su sanción","Treinta días después","Tras el primer Gobierno constitucional","A","La disposición final ordena la entrada en vigor el mismo día de su publicación oficial.","BOE-A-1978-31229",2],
    ["proceso","La Ley para la Reforma Política, citada como arranque jurídico del proceso constituyente, es la:","Ley 1/1977, de 4 de enero","Ley Orgánica 1/1977, de 4 de enero","Ley 1/1978, de 4 de enero","Ley Orgánica 1/1978, de 29 de diciembre","A","La referencia correcta es la Ley 1/1977, de 4 de enero.","BOE - Ley 1/1977",2],

    // Preámbulo
    ["preambulo","¿Cuántos objetivos o voluntades proclama la Nación española en el Preámbulo de la Constitución?","4","5","6","7","C","El Preámbulo recoge seis propósitos constitucionales, desde garantizar la convivencia democrática hasta colaborar en relaciones pacíficas internacionales.","BOE-A-1978-31229",2],
    ["preambulo","¿Tiene el Preámbulo de la Constitución valor normativo directo?","Sí, como cualquier artículo constitucional","Sí, pero solo ante el Tribunal Constitucional","No, pero funciona como criterio interpretativo del texto constitucional","No, carece de toda eficacia jurídica","C","El Preámbulo no es norma directamente aplicable, pero es relevante como criterio de interpretación del sistema constitucional.","BOE-A-1978-31229",2],

    // Estructura
    ["estructura","¿Cuántos artículos tiene la Constitución Española?","168","169","170","171","B","La Constitución contiene 169 artículos.","BOE-A-1978-31229",1],
    ["estructura","El Título preliminar comprende los artículos:","1 a 9","1 a 10","10 a 55","1 a 14","A","El Título preliminar va del artículo 1 al 9.","BOE-A-1978-31229",1],
    ["estructura","El Título I abarca los artículos:","10 a 52","10 a 55","11 a 55","14 a 55","B","El Título I comprende los artículos 10 a 55.","Congreso - Índice sistemático",1],
    ["estructura","¿Cuántas disposiciones transitorias contiene la Constitución?","4","8","9","10","C","La Constitución contiene 9 disposiciones transitorias.","BOE-A-1978-31229",2],
    ["estructura","Según el artículo 1.3, la forma política del Estado español es:","La monarquía constitucional","La monarquía parlamentaria","La democracia representativa","El Estado autonómico","B","La forma política del Estado es la Monarquía parlamentaria.","Artículo 1.3 CE",1],
    ["estructura","¿Dónde reside la soberanía nacional?","En la Nación española","En el Rey","En el pueblo español","En las Cortes Generales","C","El artículo 1.2 establece que la soberanía nacional reside en el pueblo español.","Artículo 1.2 CE",1],
    ["estructura","Según el artículo 2, la Constitución reconoce y garantiza:","El derecho de autodeterminación","La soberanía de las comunidades autónomas","El derecho a la autonomía de nacionalidades y regiones","La federación territorial del Estado","C","La fórmula correcta es autonomía de nacionalidades y regiones, no soberanía.","Artículo 2 CE",2],
    ["estructura","¿Cuál de estos principios aparece expresamente en el artículo 9.3?","Reserva de ley orgánica","Interdicción de la arbitrariedad de los poderes públicos","Tutela judicial efectiva","Separación de poderes","B","El artículo 9.3 incluye expresamente la interdicción de la arbitrariedad de los poderes públicos.","Artículo 9.3 CE",3],

    // Título I
    ["titulo1","El artículo 10.2 ordena interpretar los derechos fundamentales conforme a:","Las leyes orgánicas de desarrollo","La Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales ratificados por España","La jurisprudencia del Tribunal Supremo","Las directivas europeas","B","El artículo 10.2 remite expresamente a la DUDH y a los tratados y acuerdos internacionales sobre las mismas materias ratificados por España.","Artículo 10.2 CE",2],
    ["titulo1","La Sección 1 del Capítulo II del Título I abarca los artículos:","14 a 29","15 a 29","15 a 30","14 a 30","B","La Sección 1 comprende los artículos 15 a 29.","Congreso - Índice sistemático",2],
    ["titulo1","La Sección 2 del Capítulo II del Título I se denomina:","Derechos fundamentales y libertades públicas","Principios rectores","Derechos y deberes de los ciudadanos","Garantías de los derechos fundamentales","C","Su denominación exacta es Derechos y deberes de los ciudadanos.","Congreso - Índice sistemático",2],
    ["titulo1","¿Qué artículos forman el Capítulo IV del Título I?","53 y 54","54 y 55","52 a 55","53 a 55","A","El Capítulo IV comprende los artículos 53 y 54 (garantías de las libertades y derechos fundamentales).","Congreso - Índice sistemático",2],

    // Derechos fundamentales (Sección 1 y art. 14)
    ["derechos","El artículo 14 proclama que los españoles son iguales ante:","La Constitución","La ley","La Administración","Los tribunales","B","La literalidad del artículo 14 es iguales ante la ley.","Artículo 14 CE",1],
    ["derechos","La detención preventiva no podrá durar más de:","24 horas","48 horas","72 horas","5 días","C","El artículo 17.2 fija como plazo máximo 72 horas.","Artículo 17.2 CE",1],
    ["derechos","El procedimiento para la inmediata puesta a disposición judicial de toda persona detenida ilegalmente es:","Recurso de amparo","Hábeas corpus","Cuestión de inconstitucionalidad","Recurso contencioso-administrativo","B","El artículo 17.4 prevé el hábeas corpus.","Artículo 17.4 CE",2],
    ["derechos","La entrada o registro en domicilio sin consentimiento del titular solo es posible, según el artículo 18.2:","Por resolución administrativa o flagrante delito","Por resolución judicial o flagrante delito","Por autorización del fiscal","Por orden policial motivada","B","La excepción constitucional es resolución judicial o flagrante delito.","Artículo 18.2 CE",2],
    ["derechos","¿Qué exige el artículo 20.5 para el secuestro de publicaciones y otros medios de información?","Resolución judicial","Acuerdo del Consejo de Ministros","Resolución administrativa motivada","Autorización del Congreso","A","Solo puede acordarse en virtud de resolución judicial.","Artículo 20.5 CE",2],
    ["derechos","El ejercicio del derecho de reunión pacífica y sin armas:","Requiere autorización judicial","Requiere autorización previa","No necesitará autorización previa","Solo es libre en locales cerrados","C","El artículo 21.1 dispone que no necesitará autorización previa.","Artículo 21.1 CE",2],
    ["derechos","Las asociaciones solo podrán ser disueltas o suspendidas en sus actividades en virtud de:","Resolución judicial motivada","Acuerdo del Gobierno","Acto de la autoridad gubernativa","Ley orgánica","A","La garantía aparece en el artículo 22.4.","Artículo 22.4 CE",2],
    ["derechos","El artículo 23 reconoce el derecho a participar en los asuntos públicos:","Solo por medio de representantes","Directamente o por medio de representantes","Solo mediante referéndum","Solo en elecciones generales","B","La participación puede ser directa o por representantes elegidos.","Artículo 23.1 CE",2],
    ["derechos","¿Cuál de estos derechos figura expresamente en el artículo 24.2?","Tutela administrativa efectiva","Presunción de inocencia","Revisión automática de toda condena","Juez europeo predeterminado","B","La presunción de inocencia está en el artículo 24.2.","Artículo 24.2 CE",2],
    ["derechos","Las penas privativas de libertad y las medidas de seguridad estarán orientadas hacia:","La reparación civil","La reeducación y reinserción social","La ejemplaridad pública","La prevención general absoluta","B","Así lo dispone el artículo 25.2.","Artículo 25.2 CE",2],
    ["derechos","La enseñanza básica es, según la Constitución:","Obligatoria y gratuita","Pública y universal","Gratuita hasta la universidad","Obligatoria hasta los 16 años","A","La literalidad del artículo 27.4 es obligatoria y gratuita.","Artículo 27.4 CE",2],
    ["derechos","El derecho de huelga se reconoce en el artículo:","27","28.2","29.1","37.2","B","El derecho de huelga está en el artículo 28.2.","Artículo 28.2 CE",1],

    // Derechos y deberes (Sección 2)
    ["deberes","Según el artículo 30.1, los españoles tienen:","El deber de servir a la Administración","El derecho y el deber de defender a España","El deber de incorporarse al ejército","El derecho a objetar cualquier prestación pública","B","El artículo 30.1 reconoce el derecho y el deber de defender a España.","Artículo 30.1 CE",1],
    ["deberes","El sistema tributario del artículo 31 debe inspirarse en:","Legalidad y publicidad","Igualdad y progresividad","Seguridad jurídica y jerarquía normativa","Solidaridad y suficiencia financiera","B","El artículo 31.1 cita igualdad y progresividad.","Artículo 31.1 CE",2],
    ["deberes","¿Qué prohíbe expresamente el artículo 31.1 respecto del sistema tributario?","La doble imposición","La retroactividad tributaria","El alcance confiscatorio","La imposición directa","C","El sistema tributario no puede tener alcance confiscatorio.","Artículo 31.1 CE",2],
    ["deberes","La libertad de empresa se reconoce en el marco de:","La economía social","La economía de mercado","La planificación central","La libre competencia absoluta","B","La expresión exacta del artículo 38 es economía de mercado.","Artículo 38 CE",1],
    ["deberes","El artículo 49 vigente, tras la reforma de 2024, se refiere a:","Los extranjeros","La juventud","Las personas con discapacidad","Los consumidores y usuarios","C","La reforma de 2024 actualizó el artículo 49 sobre personas con discapacidad.","BOE-A-2024-3099",2],

    // Principios rectores (Capítulo III)
    ["principios","¿En qué artículo se reconoce el derecho a la protección de la salud?","Artículo 40","Artículo 43","Artículo 45","Artículo 41","B","El artículo 43 reconoce el derecho a la protección de la salud y encomienda a los poderes públicos organizar y tutelar la salud pública.","Artículo 43 CE",1],
    ["principios","¿En qué artículo se reconoce el derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona?","Artículo 43","Artículo 45","Artículo 47","Artículo 48","B","El artículo 45 reconoce el derecho a disfrutar de un medio ambiente adecuado e impone el deber de conservarlo.","Artículo 45 CE",2],
    ["principios","¿Qué artículo protege el patrimonio histórico, cultural y artístico español?","Artículo 44","Artículo 45","Artículo 46","Artículo 47","C","El artículo 46 obliga a los poderes públicos a garantizar la conservación y promover el enriquecimiento del patrimonio histórico, cultural y artístico.","Artículo 46 CE",2],
    ["principios","¿En qué artículo se regula el derecho a disfrutar de una vivienda digna y adecuada?","Artículo 44","Artículo 46","Artículo 47","Artículo 50","C","El artículo 47 reconoce el derecho a una vivienda digna y adecuada y obliga a los poderes públicos a promover las condiciones necesarias.","Artículo 47 CE",2],

    // Garantías
    ["garantias","Según el artículo 53.2, el procedimiento ante los tribunales ordinarios para tutelar el artículo 14 y la Sección 1 se basa en:","Celeridad y contradicción","Preferencia y sumariedad","Publicidad y gratuidad","Oralidad e inmediación","B","El artículo 53.2 emplea expresamente los términos preferencia y sumariedad.","Artículo 53.2 CE",3],
    ["garantias","El recurso de amparo del artículo 53.2 alcanza también a:","Todo el Capítulo III","Todos los derechos del Capítulo II","La objeción de conciencia reconocida en el artículo 30","El artículo 31","C","El propio artículo 53.2 extiende el amparo a la objeción de conciencia del artículo 30.","Artículo 53.2 CE",3],
    ["garantias","Los principios rectores del Capítulo III, según el artículo 53.3:","Son directamente amparables ante el Tribunal Constitucional","Solo podrán alegarse ante la jurisdicción ordinaria de acuerdo con las leyes que los desarrollen","Carecen de eficacia jurídica","Vinculan solo al legislador estatal","B","La Constitución remite su alegación a las leyes que los desarrollen; no tienen la tutela reforzada del artículo 53.2.","Artículo 53.3 CE",3],
    ["garantias","El Defensor del Pueblo es, conforme al artículo 54:","Alto comisionado del Gobierno","Órgano del Tribunal Constitucional","Alto comisionado de las Cortes Generales","Órgano consultivo del CGPJ","C","El artículo 54 lo define como alto comisionado de las Cortes Generales para la defensa de los derechos del Título I.","Artículo 54 CE",2],
    ["garantias","La suspensión general de determinados derechos del artículo 55.1 puede acordarse cuando se declare el estado de:","Alarma o excepción","Alarma, excepción o sitio","Excepción o sitio","Sitio exclusivamente","C","El artículo 55.1 solo prevé la suspensión para los estados de excepción y de sitio, no para el de alarma.","Artículo 55.1 CE",3],
    ["garantias","La suspensión individual del artículo 55.2 requiere:","Solo autorización del Gobierno","Intervención judicial y adecuado control parlamentario","Decreto-ley y control judicial posterior","Condena penal firme","B","La Constitución exige intervención judicial y adecuado control parlamentario.","Artículo 55.2 CE",3],

    // Estados de alarma, excepción y sitio
    ["alarma","¿Quién declara el estado de alarma?","El Congreso de los Diputados","El Senado","El Gobierno mediante decreto acordado en Consejo de Ministros","El Rey a propuesta del Presidente del Gobierno","C","El artículo 116.2 atribuye la declaración del estado de alarma al Gobierno.","Artículo 116.2 CE",2],
    ["alarma","¿Cuál es la duración máxima inicial del estado de alarma?","7 días","15 días","30 días","60 días","B","El artículo 116.2 fija un plazo máximo inicial de quince días.","Artículo 116.2 CE",2],
    ["alarma","¿Quién autoriza la prórroga del estado de alarma?","El Gobierno","El Rey","El Congreso de los Diputados","El Senado","C","La prórroga del estado de alarma requiere autorización del Congreso de los Diputados.","Artículo 116.2 CE",2],
    ["alarma","¿Permite el estado de alarma la suspensión de los derechos del artículo 55.1?","Sí, igual que el de excepción","Sí, pero solo el artículo 17","No, el artículo 55.1 solo lo prevé para excepción y sitio","Sí, si lo autoriza el Congreso","C","El estado de alarma no habilita la suspensión de derechos fundamentales; esa posibilidad queda reservada a los estados de excepción y de sitio.","Artículo 55.1 CE",3],
    ["alarma","El estado de excepción requiere para su declaración:","Solo acuerdo del Consejo de Ministros","Autorización previa del Congreso de los Diputados","Autorización del Senado por mayoría absoluta","Decreto-ley del Gobierno","B","El artículo 116.3 exige autorización previa del Congreso de los Diputados.","Artículo 116.3 CE",2],
    ["alarma","¿Quién declara el estado de sitio?","El Gobierno directamente","El Rey a propuesta del Presidente del Gobierno","El Congreso de los Diputados por mayoría absoluta, a propuesta del Gobierno","El Senado por mayoría de dos tercios","C","El artículo 116.4 atribuye la declaración del estado de sitio al Congreso de los Diputados por mayoría absoluta.","Artículo 116.4 CE",3],

    // Reforma constitucional
    ["reforma","¿Qué mayoría exige el artículo 167 para el procedimiento ordinario de reforma constitucional?","Mayoría absoluta de cada cámara","Dos tercios de cada cámara","Tres quintos de cada cámara","Mayoría simple en sesión conjunta","C","El artículo 167 exige la aprobación por tres quintos de cada cámara.","Artículo 167 CE",3],
    ["reforma","En el procedimiento del artículo 167, el referéndum sobre la reforma es:","Siempre obligatorio","Obligatorio si lo decide el Gobierno","Facultativo si lo solicita una décima parte de los miembros de alguna cámara en los quince días siguientes","Imposible constitucionalmente","C","El artículo 167.3 prevé un referéndum facultativo a petición de una décima parte de los miembros de cualquier cámara.","Artículo 167.3 CE",3],
    ["reforma","El procedimiento agravado del artículo 168 se aplica obligatoriamente cuando se propone revisar:","Todo el Título I","El Título Preliminar, la Sección 1.ª del Capítulo II del Título I o el Título II, o si es revisión total","Solo el Título II (Corona)","Solo los artículos 1 a 3","B","El artículo 168 protege esas materias y cualquier revisión total de la Constitución.","Artículo 168 CE",3],
    ["reforma","Tras la aprobación en principio por dos tercios de cada cámara en el procedimiento del artículo 168:","Se convoca referéndum de inmediato","Se disuelven las Cortes y se celebran nuevas elecciones","Se remite al Tribunal Constitucional para control previo","El Senado ratifica por mayoría absoluta","B","El artículo 168.1 ordena la disolución inmediata de las Cortes y la convocatoria de nuevas elecciones.","Artículo 168.1 CE",3],
    ["reforma","¿Puede iniciarse una reforma constitucional durante el estado de excepción?","Sí, con autorización del Congreso","Sí, si ya estaba iniciada antes de la declaración","No, el artículo 169 lo prohíbe expresamente","Solo si se trata del procedimiento ordinario del artículo 167","C","El artículo 169 prohíbe iniciar la reforma constitucional durante la vigencia de los estados del artículo 116 o en tiempo de guerra.","Artículo 169 CE",3],
    ["reforma","¿Cuántas reformas constitucionales se han producido desde 1978 hasta 2024?","1","2","3","4","C","Se han producido tres: artículo 13.2 en 1992, artículo 135 en 2011 y artículo 49 en 2024.","BOE-A-1978-31229",1]
];

const topic02Sources = [
    {
        label: "BOE - Constitución Española Título VIII",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229",
        note: "Artículos 137 a 158 sobre organización territorial del Estado."
    },
    {
        label: "Congreso - Índice sistemático Título VIII",
        url: "https://app.congreso.es/consti/constitucion/indice/titulos/articulos.jsp?ini=137&fin=158&titulo=T%CDTULO%20VIII",
        note: "Índice de artículos del Título VIII por el Congreso de los Diputados."
    },
    {
        label: "Ministerio de Hacienda - Financiación autonómica",
        url: "https://www.hacienda.gob.es/es-ES/Areas%20Tematicas/Financiacion%20Autonomica/Paginas/Financiacion%20Autonomica.aspx",
        note: "Sistema de financiación de las Comunidades Autónomas de régimen común."
    },
    {
        label: "Congreso - Elaboración de la Constitución",
        url: "https://app.congreso.es/consti/constitucion/elaboracion/",
        note: "Proceso constituyente y contexto histórico."
    }
];

const topic02Questions = [
    // Principios generales (arts. 137-139)
    ["principios_generales","Según el artículo 137 CE, el Estado se organiza territorialmente en:","Municipios, provincias y regiones","Municipios, comarcas y Comunidades Autónomas","Municipios, provincias y las Comunidades Autónomas que se constituyan","Provincias, Comunidades Autónomas y el Estado central","C","El artículo 137 enumera exactamente: municipios, provincias y las Comunidades Autónomas que se constituyan.","BOE - Constitución Española Título VIII",1],
    ["principios_generales","¿Cuáles son los tres principios vertebradores de la organización territorial que la Constitución recoge?","Legalidad, autonomía y solidaridad","Unidad, autonomía y solidaridad","Igualdad, descentralización y cooperación","Unidad, federalismo y subsidiaridad","B","Los artículos 2 y 138 CE articulan la organización territorial sobre los principios de unidad de la Nación, autonomía de las entidades territoriales y solidaridad entre todas ellas.","BOE - Constitución Española Título VIII",2],
    ["principios_generales","El artículo 138.1 CE atribuye al Estado la garantía de:","La financiación suficiente de las CCAA","La realización efectiva del principio de solidaridad y el equilibrio económico entre las partes del territorio","El reparto equitativo de competencias","La coordinación de las políticas autonómicas","B","El artículo 138.1 encomienda al Estado velar por el establecimiento de un equilibrio económico adecuado y justo entre las partes del territorio español.","BOE - Constitución Española Título VIII",2],
    ["principios_generales","¿Prohíbe la Constitución los privilegios económicos o sociales entre los territorios?","No, cada Comunidad puede establecer sus propios privilegios","Sí, el artículo 138.2 prohíbe expresamente los privilegios económicos o sociales","Solo lo prohíbe si afectan a la libre circulación","Solo lo prohíbe respecto de ciudadanos extracomunitarios","B","El artículo 138.2 establece que las diferencias entre los Estatutos de las distintas Comunidades Autónomas no podrán implicar, en ningún caso, privilegios económicos o sociales.","Artículo 138.2 CE",2],
    ["principios_generales","Según el artículo 139.1, todos los españoles tienen:","Los mismos derechos reconocidos en sus respectivos Estatutos de Autonomía","Los mismos derechos y obligaciones en cualquier parte del territorio del Estado","Libertad de elección de su comunidad de domicilio fiscal","Derecho a acceder a todos los servicios autonómicos independientemente de su residencia","B","La igualdad de derechos y obligaciones en todo el territorio es una garantía esencial frente a la diversidad autonómica.","Artículo 139.1 CE",1],
    ["principios_generales","El artículo 139.2 prohíbe a los poderes públicos adoptar medidas que directa o indirectamente obstaculicen:","El ejercicio de las competencias autonómicas","La libre circulación y establecimiento de personas y la libre circulación de bienes en todo el territorio","El acceso a la función pública en otras Comunidades","La actividad de los partidos políticos de ámbito autonómico","B","El artículo 139.2 protege la unidad del mercado y la libre circulación como garantía del modelo territorial.","Artículo 139.2 CE",2],

    // Administración local (arts. 140-142)
    ["admin_local","El artículo 140 CE garantiza la autonomía de los municipios y reconoce que estos son gobernados por:","La Diputación Provincial","El Ayuntamiento","El Alcalde con el respaldo del Pleno","El Consejo municipal de vecinos","B","El artículo 140 establece que los Ayuntamientos son los órganos de gobierno municipal.","Artículo 140 CE",1],
    ["admin_local","Según el artículo 140 CE, la elección de los Alcaldes puede realizarse:","Solo mediante elección directa por los vecinos","Solo por los Concejales entre sí","Por los Concejales o directamente por los vecinos","Por el Presidente de la Diputación Provincial","C","El artículo 140 prevé que los Alcaldes serán elegidos por los Concejales o directamente por los vecinos.","Artículo 140 CE",2],
    ["admin_local","¿Cuál es la entidad que determina las alteraciones en los términos municipales, según el artículo 141.1?","El Gobierno mediante Real Decreto","La ley","El Congreso de los Diputados por mayoría absoluta","La Comunidad Autónoma mediante decreto","B","El artículo 141.1 dispone que cualquier alteración de los términos municipales será regulada por la ley.","Artículo 141.1 CE",2],
    ["admin_local","Según el artículo 141 CE, la provincia es una entidad local con personalidad jurídica propia, determinada por:","El Estatuto de Autonomía","La agrupación de municipios","La legislación de régimen local","Un decreto del Gobierno","B","El artículo 141.1 define la provincia como agrupación de municipios con personalidad jurídica propia.","Artículo 141.1 CE",1],
    ["admin_local","El gobierno y la administración de las provincias corresponde a:","Los Presidentes provinciales elegidos por sufragio directo","Las Diputaciones u otras Corporaciones de carácter representativo","Los delegados del Gobierno en cada provincia","Las Subdelegaciones del Gobierno","B","El artículo 141.2 atribuye el gobierno provincial a las Diputaciones u otras Corporaciones de carácter representativo.","Artículo 141.2 CE",1],
    ["admin_local","Las Haciendas locales, según el artículo 142, deben disponer de medios suficientes para:","Financiar la prestación de todos los servicios autonómicos","Desempeñar las funciones que la ley atribuye a las Corporaciones respectivas","Igualar el nivel de renta de los ciudadanos de la Comunidad","Cubrir cualquier déficit de la Comunidad Autónoma","B","El artículo 142 garantiza que las Haciendas locales tendrán medios suficientes para el desempeño de sus funciones.","Artículo 142 CE",2],

    // Constitución de las CCAA (arts. 143-145)
    ["constitucion_ccaa","La vía ordinaria del artículo 143 CE para acceder a la autonomía requiere la iniciativa de:","El Gobierno central y las Diputaciones","Las Diputaciones Provinciales y los Ayuntamientos que representen al menos la mayoría de los municipios con mayoría de la población","Solo los Ayuntamientos de la región","Las Cortes Generales por mayoría absoluta","B","El artículo 143.2 exige la iniciativa de las Diputaciones o los órganos interinsulares correspondientes y las 2/3 partes de los municipios que representen la mayoría del censo electoral.","Artículo 143.2 CE",3],
    ["constitucion_ccaa","¿Cuál era el plazo constitucional para ejercer la iniciativa autonómica por la vía del artículo 143?","1 año desde la promulgación de la Constitución","5 años desde la promulgación de la Constitución","No se estableció plazo","3 años desde la entrada en vigor","B","El artículo 143.3 fijó un plazo de cinco años para el ejercicio de esa iniciativa autonómica.","Artículo 143.3 CE",3],
    ["constitucion_ccaa","La vía especial del artículo 151 CE requería, en su iniciativa, el apoyo de:","2/3 de los municipios con mayoría de población en cada provincia","Las Diputaciones de todas las provincias y al menos 3/4 partes de los municipios con mayoría del censo electoral en cada una","El Gobierno central y las Cortes por mayoría absoluta","Solo un referéndum provincial con mayoría simple","B","El artículo 151.1 exigía la iniciativa de las Diputaciones más 3/4 de los municipios con mayoría del censo en cada provincia, y referéndum con mayoría absoluta.","Artículo 151.1 CE",3],
    ["constitucion_ccaa","Las nacionalidades históricas (País Vasco, Cataluña y Galicia) accedieron a la autonomía por:","La vía ordinaria del artículo 143","La vía especial del artículo 151","La Disposición Transitoria 2.ª de la Constitución","Un acuerdo específico del Congreso de los Diputados","C","La Disposición Transitoria 2.ª permitió a los territorios que en el pasado hubieron plebiscitado proyectos de Estatuto de Autonomía acceder directamente al régimen autonómico.","BOE - Constitución Española Título VIII",2],
    ["constitucion_ccaa","Según el artículo 145.1 CE, los Estatutos podrán prever los supuestos, requisitos y términos en que las CCAA podrán celebrar:","Tratados internacionales en materias de su competencia","Convenios entre sí para la gestión y prestación de servicios propios","Acuerdos de libre comercio interprovincial","Federaciones de Comunidades Autónomas","B","El artículo 145.2 permite los convenios entre CCAA para la gestión de servicios propios, debiendo comunicarse a las Cortes.","Artículo 145.2 CE",3],

    // Estatutos de Autonomía (art. 147)
    ["estatutos","¿Cuál es la naturaleza jurídica de los Estatutos de Autonomía?","Decretos legislativos aprobados por el Gobierno","Leyes Orgánicas aprobadas por las Cortes Generales","Normas autonómicas de rango constitucional","Tratados territoriales entre el Estado y la Comunidad","B","El artículo 147.3 establece que la reforma de los Estatutos se ajustará al procedimiento en ellos establecido y requerirá en todo caso la aprobación por las Cortes Generales mediante ley orgánica.","Artículo 147.3 CE",1],
    ["estatutos","Según el artículo 147.1, los Estatutos de Autonomía son la norma institucional básica de cada Comunidad Autónoma y el Estado los reconoce como:","Normas constitucionales de segundo rango","Parte integrante de su ordenamiento jurídico","Tratados de derecho internacional interno","Leyes especiales de las Cortes Generales","B","El artículo 147.1 establece que el Estado reconocerá y amparará los Estatutos como parte integrante de su ordenamiento jurídico.","Artículo 147.1 CE",2],
    ["estatutos","¿Qué debe contener necesariamente un Estatuto de Autonomía según el artículo 147.2?","Solo la denominación y el territorio de la Comunidad","La denominación, el territorio, la organización de las instituciones propias y las competencias asumidas","El detalle de los tributos propios y la financiación autonómica","El nombre del Presidente autonómico y la sede de las instituciones","B","El artículo 147.2 fija el contenido mínimo obligatorio: denominación, territorio, organización institucional y competencias asumidas.","Artículo 147.2 CE",2],
    ["estatutos","¿Cuántas Comunidades Autónomas componen el Estado español?","15","17","19","21","B","España cuenta con 17 Comunidades Autónomas, más las ciudades autónomas de Ceuta y Melilla.","BOE - Constitución Española Título VIII",1],

    // Reparto de competencias (arts. 148-150)
    ["competencias","El artículo 148.1 CE enumera las materias sobre las que las Comunidades Autónomas:","Tienen competencia exclusiva irrenunciable","Pueden asumir competencias","Deben asumir obligatoriamente competencias","Comparten obligatoriamente competencias con el Estado","B","El artículo 148.1 establece que las Comunidades Autónomas podrán asumir competencias en las 22 materias enumeradas.","Artículo 148.1 CE",2],
    ["competencias","¿Qué ocurre en las materias no atribuidas expresamente al Estado por la Constitución ni asumidas por los Estatutos de Autonomía, según el artículo 149.3?","Las ejerce la Comunidad Autónoma más poblada","Las ejerce el Estado","Se regulan por acuerdo entre el Estado y las CCAA","Se someten al Tribunal Constitucional para su atribución","B","La cláusula residual del artículo 149.3 atribuye al Estado las competencias no asumidas por los Estatutos ni atribuidas expresamente.","Artículo 149.3 CE",3],
    ["competencias","El artículo 149.1 enumera las materias de competencia exclusiva del Estado. ¿Cuántas materias enumera dicho artículo?","22","29","32","38","C","El artículo 149.1 recoge 32 materias de competencia exclusiva estatal, entre ellas relaciones exteriores, defensa, legislación mercantil y penal.","Artículo 149.1 CE",3],
    ["competencias","Según el artículo 149.3, en caso de conflicto entre el Derecho estatal y el Derecho autonómico:","Prevalece el Derecho autonómico en materias de su competencia exclusiva","Prevalece el Derecho del Estado en todo caso","Prevalece el Derecho del Estado, en todo caso, salvo en materias del artículo 148","Decide el Tribunal Constitucional en cada caso","B","El artículo 149.3 establece el principio de prevalencia del Derecho estatal: el derecho estatal será, en todo caso, supletorio del derecho de las Comunidades Autónomas.","Artículo 149.3 CE",3],
    ["competencias","Las leyes-marco del artículo 150.1 permiten al Estado:","Atribuir competencias exclusivas a todas las CCAA por igual","Atribuir a todas o algunas CCAA la facultad de dictar normas legislativas en el marco de los principios y bases fijados por una ley estatal","Asumir competencias autonómicas en caso de urgencia","Transferir competencias de forma definitiva e irreversible","B","El artículo 150.1 permite la delegación legislativa a las CCAA dentro de los principios y bases que fije el Estado.","Artículo 150.1 CE",3],
    ["competencias","Las leyes de transferencia o delegación del artículo 150.2 permiten transferir o delegar competencias:","Solo a las CCAA de la vía especial del artículo 151","A todas las CCAA sin distinción","A cualquier Comunidad Autónoma, siempre que sean materias de titularidad estatal susceptibles de transferencia","Solo mediante reforma estatutaria simultánea","C","El artículo 150.2 permite al Estado transferir o delegar a las CCAA, mediante ley orgánica, facultades correspondientes a materia de titularidad estatal.","Artículo 150.2 CE",3],
    ["competencias","Las leyes de armonización del artículo 150.3 permiten al Estado dictar leyes armonizadoras cuando así lo exija:","La eficiencia económica del sector público","El interés general","El interés general así apreciado por mayoría absoluta de cada Cámara","Las solicitudes de al menos cinco CCAA","C","El artículo 150.3 exige apreciación del interés general por mayoría absoluta de cada Cámara para poder dictar leyes de armonización.","Artículo 150.3 CE",3],

    // Instituciones autonómicas (art. 152)
    ["instituciones","Según el artículo 152.1, en las Comunidades Autónomas que accedieron por la vía del artículo 151, la organización institucional debe contar con:","Solo una Asamblea legislativa","Una Asamblea Legislativa elegida por sufragio universal, un Consejo de Gobierno y un Tribunal Superior de Justicia","Un Presidente elegido directamente por los ciudadanos y un Consejo Consultivo","Una Diputación General y un Consejo Autonómico","B","El artículo 152.1 impone ese esquema institucional mínimo para las CCAA de máxima autonomía.","Artículo 152.1 CE",2],
    ["instituciones","¿Qué órgano encabeza el Consejo de Gobierno de una Comunidad Autónoma según el artículo 152.1?","El Delegado del Gobierno en la Comunidad","Un Presidente elegido por la Asamblea Legislativa y nombrado por el Rey","El Presidente autonómico elegido directamente por los ciudadanos","El miembro más votado de la lista más votada en las elecciones autonómicas","B","El Presidente es elegido por la Asamblea y nombrado por el Rey, y dirige el Consejo de Gobierno.","Artículo 152.1 CE",2],
    ["instituciones","Según el artículo 152.1, el Tribunal Superior de Justicia de cada Comunidad Autónoma:","Sustituye al Tribunal Supremo en los recursos de casación","Es el órgano judicial de instancia máxima en la CA, sin perjuicio de la jurisdicción del Tribunal Supremo","Solo tiene competencias en derecho civil foral","Depende jerárquicamente de la Audiencia Nacional","B","El TSJ culmina la organización judicial en el ámbito territorial de la CA, sin perjuicio de la jurisdicción que corresponde al Tribunal Supremo.","Artículo 152.1 CE",2],

    // Control de las CCAA (arts. 153-155)
    ["control","El control de la actividad de los órganos de las Comunidades Autónomas corresponde, entre otros, al Tribunal de Cuentas. ¿Qué ámbito controla específicamente?","La constitucionalidad de las disposiciones normativas","El económico y presupuestario","La actividad de la Administración autonómica en general","La legislación delegada","B","El artículo 153 b) atribuye al Tribunal de Cuentas el control económico y presupuestario de las CCAA.","Artículo 153 CE",2],
    ["control","¿Qué órgano controla la actividad de las Comunidades Autónomas ejercida por delegación estatal, según el artículo 153 c)?","El Tribunal Constitucional","El Congreso de los Diputados","El Gobierno","La Jurisdicción Contencioso-Administrativa","C","El artículo 153 c) atribuye al Gobierno, con el auxilio del Delegado del Gobierno, el control de la actividad delegada a las CCAA.","Artículo 153 CE",2],
    ["control","El artículo 155 CE regula la denominada 'coerción estatal'. ¿Qué mayoría del Senado se requiere para aprobar las medidas del artículo 155?","Mayoría simple","Mayoría de dos tercios","Mayoría absoluta","Mayoría de tres quintos","C","El artículo 155.1 exige la aprobación por mayoría absoluta del Senado para que el Gobierno pueda adoptar las medidas de coerción estatal.","Artículo 155.1 CE",2],
    ["control","¿En qué supuesto puede el Gobierno aplicar las medidas del artículo 155?","Cuando una CA apruebe una ley contraria a la Constitución","Cuando una CA incumpla sus obligaciones constitucionales o legales o atente gravemente al interés general de España","Cuando una CA tenga déficit presupuestario excesivo","Cuando el Tribunal Constitucional declare la inconstitucionalidad de una norma autonómica","B","El artículo 155.1 exige incumplimiento de obligaciones constitucionales o legales, o atentado grave al interés general.","Artículo 155.1 CE",2],
    ["control","¿A quién puede dirigirse el Gobierno, con carácter previo a la aplicación del artículo 155, para exigir el cumplimiento de las obligaciones?","Al Tribunal Constitucional","Al Presidente de la Comunidad Autónoma","Al Defensor del Pueblo autonómico","Al Senado directamente","B","El artículo 155.1 establece que el Gobierno requerirá al Presidente de la CA antes de adoptar las medidas de coerción.","Artículo 155.1 CE",2],

    // Financiación autonómica (arts. 156-158)
    ["financiacion","Según el artículo 156, las Comunidades Autónomas gozan de autonomía financiera para:","Establecer y exigir cualquier tributo sin límite","El desarrollo y ejecución de sus competencias, con arreglo a los principios de coordinación con la Hacienda estatal y de solidaridad entre todos los españoles","Emitir deuda pública sin autorización estatal","Transferir recursos entre Comunidades libremente","B","El artículo 156.1 delimita la autonomía financiera autonómica vinculándola a la coordinación y la solidaridad.","Artículo 156 CE",2],
    ["financiacion","¿Qué prohíbe el artículo 157.2 a las Comunidades Autónomas en materia financiera?","Tener déficit presupuestario","Emitir deuda pública","Adoptar medidas tributarias sobre bienes situados fuera de su territorio o que supongan obstáculo para la libre circulación de mercancías o servicios","Establecer tributos sobre el juego","C","El artículo 157.2 veda adoptar medidas que impliquen doble imposición territorial o barreras a la circulación.","Artículo 157.2 CE",3],
    ["financiacion","¿Mediante qué tipo de ley se establece el sistema de financiación de las Comunidades Autónomas del artículo 157.3?","Ley Orgánica","Ley Ordinaria","Decreto-ley","Tratado internacional","A","El artículo 157.3 reserva a una ley orgánica la regulación de las competencias financieras de las CCAA y las normas para resolver los conflictos.","Artículo 157.3 CE",2],
    ["financiacion","El Fondo de Compensación Interterritorial del artículo 158.2 tiene como finalidad:","Equilibrar los ingresos tributarios entre las CCAA más pobres y más ricas","Corregir desequilibrios económicos interterritoriales y hacer efectivo el principio de solidaridad","Financiar exclusivamente las CCAA de menor renta per cápita","Financiar las inversiones del Estado en infraestructuras","B","El artículo 158.2 crea el Fondo con la finalidad de corregir desequilibrios económicos interterritoriales.","Artículo 158.2 CE",2],
    ["financiacion","¿Quién distribuye el Fondo de Compensación Interterritorial, según el artículo 158.2?","El Gobierno mediante Real Decreto","El Ministerio de Hacienda","Las propias Comunidades Autónomas de mutuo acuerdo","Las Cortes Generales","D","El artículo 158.2 atribuye a las Cortes Generales la distribución del Fondo entre las CCAA y provincias.","Artículo 158.2 CE",2],

    // Regímenes especiales
    ["regimenes_especiales","¿Qué territorios tienen un régimen foral de concierto o convenio económico reconocido constitucionalmente?","Cataluña y País Vasco","País Vasco y Navarra","Cataluña, País Vasco y Navarra","País Vasco, Navarra y Canarias","B","La Disposición Adicional 1.ª CE ampara los derechos históricos de los territorios forales, que comprenden el País Vasco (Concierto Económico) y Navarra (Convenio Económico).","BOE - Constitución Española Título VIII",2],
    ["regimenes_especiales","¿Con qué estatuto jurídico se reconoce a Ceuta y Melilla en la Constitución y en su régimen especial?","Comunidades Autónomas uniprovinciales","Ciudades autónomas con Estatuto de Autonomía aprobado por Ley Orgánica","Municipios de régimen especial bajo tutela estatal directa","Territorios dependientes del Estado sin autonomía propia","B","Las Leyes Orgánicas 1/1995 y 2/1995 dotaron a Ceuta y Melilla del estatuto de ciudades autónomas, con sus propias instituciones de autogobierno.","BOE - Constitución Española Título VIII",2],
    ["regimenes_especiales","Las Islas Canarias y las Islas Baleares tienen un régimen autonómico con particularidades en:","La financiación por tratarse de territorios insulares","La aplicación del régimen económico y fiscal especial, especialmente en Canarias (REF)","La exención del artículo 155 CE","El número mínimo de consejeros de su Consejo de Gobierno","B","Canarias cuenta con un Régimen Económico y Fiscal especial (REF) reconocido en la Disposición Adicional 3.ª CE, con peculiaridades fiscales y de financiación.","BOE - Constitución Española Título VIII",3],
    ["regimenes_especiales","La Disposición Adicional 1.ª de la Constitución ampara y respeta los derechos históricos de los territorios forales. ¿Queda condicionada la actualización de dicho régimen foral?","No, la actualización es completamente libre para los territorios forales","Sí, se llevará a cabo en el marco de la Constitución y de los Estatutos de Autonomía","Sí, requiere referéndum en cada territorio foral","No, pero requiere aprobación del Tribunal Constitucional","B","La DA 1.ª CE establece que la actualización del régimen foral se realizará en el marco de la Constitución y de los Estatutos de Autonomía.","BOE - Constitución Española Título VIII",3]
];

module.exports = {
    topics: [
        {
            slug: "tema-01-constitucion-espanola-1978",
            title: "Tema 1. La Constitución española de 1978. Estructura, principios generales y derechos/deberes fundamentales.",
            shortTitle: "Constitución española de 1978",
            summary: "Tema base de oposición sobre proceso constituyente, estructura, Título preliminar, Título I, garantías y suspensión.",
            studyLevel: "alto",
            contentHtml: topic01Content,
            sourceNote: "Contenido redactado a partir del texto constitucional vigente en BOE y de recursos institucionales del Congreso."
        },
        {
            slug: "tema-02-organizacion-territorial",
            title: "Tema 2. Organización Territorial del Estado. Las Comunidades Autónomas. Los Estatutos de Autonomía.",
            shortTitle: "Organización Territorial del Estado",
            summary: "Título VIII CE: principios territoriales, administración local, vías de acceso a la autonomía, Estatutos, competencias, control autonómico y financiación.",
            studyLevel: "alto",
            contentHtml: topic02Content,
            sourceNote: "Contenido redactado a partir del Título VIII del texto constitucional vigente (arts. 137-158) y fuentes del Ministerio de Hacienda."
        }
    ],
    topicSources: {
        "tema-01-constitucion-espanola-1978": topic01Sources,
        "tema-02-organizacion-territorial": topic02Sources
    },
    topicQuestions: {
        "tema-01-constitucion-espanola-1978": topic01Questions,
        "tema-02-organizacion-territorial": topic02Questions
    }
};
