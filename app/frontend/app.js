const state = {
    topics: [],
    activeTopic: null,
    currentQuestions: []
};

const topicNav = document.getElementById("topicNav");
const statusText = document.getElementById("statusText");
const heroTitle = document.getElementById("heroTitle");
const heroSummary = document.getElementById("heroSummary");
const heroLevel = document.getElementById("heroLevel");
const heroQuestions = document.getElementById("heroQuestions");
const sourceNote = document.getElementById("sourceNote");
const topicContent = document.getElementById("topicContent");
const sourcesList = document.getElementById("sourcesList");
const countSelect = document.getElementById("countSelect");
const categorySelect = document.getElementById("categorySelect");
const generateBtn = document.getElementById("generateBtn");
const checkBtn = document.getElementById("checkBtn");
const questionsList = document.getElementById("questionsList");
const resultBox = document.getElementById("resultBox");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const categoryLabels = {
    proceso: "Proceso constituyente",
    preambulo: "Pre\u00e1mbulo",
    estructura: "Estructura y T\u00edtulo preliminar",
    titulo1: "T\u00edtulo I",
    derechos: "Derechos fundamentales",
    deberes: "Derechos y deberes",
    principios: "Principios rectores",
    garantias: "Garant\u00edas y suspensi\u00f3n",
    alarma: "Estados de alarma, excepci\u00f3n y sitio",
    reforma: "Reforma constitucional",
    principios_generales: "Principios generales (arts. 137-139)",
    admin_local: "Administraci\u00f3n local (arts. 140-142)",
    constitucion_ccaa: "Constituci\u00f3n de las CCAA (arts. 143-145)",
    estatutos: "Estatutos de Autonom\u00eda (art. 147)",
    competencias: "Reparto de competencias (arts. 148-150)",
    instituciones: "Instituciones auton\u00f3micas (art. 152)",
    control: "Control de las CCAA (arts. 153-155)",
    financiacion: "Financiaci\u00f3n auton\u00f3mica (arts. 156-158)",
    regimenes_especiales: "Reg\u00edmenes especiales"
};

const topicCategories = {
    "tema-01-constitucion-espanola-1978": [
        { value: "proceso", label: "Proceso constituyente" },
        { value: "preambulo", label: "Pre\u00e1mbulo" },
        { value: "estructura", label: "Estructura y T\u00edtulo preliminar" },
        { value: "titulo1", label: "T\u00edtulo I" },
        { value: "derechos", label: "Derechos fundamentales" },
        { value: "deberes", label: "Derechos y deberes" },
        { value: "principios", label: "Principios rectores" },
        { value: "garantias", label: "Garant\u00edas y suspensi\u00f3n" },
        { value: "alarma", label: "Estados de alarma, excepci\u00f3n y sitio" },
        { value: "reforma", label: "Reforma constitucional" }
    ],
    "tema-02-organizacion-territorial": [
        { value: "principios_generales", label: "Principios generales (arts. 137-139)" },
        { value: "admin_local", label: "Administraci\u00f3n local (arts. 140-142)" },
        { value: "constitucion_ccaa", label: "Constituci\u00f3n de las CCAA (arts. 143-145)" },
        { value: "estatutos", label: "Estatutos de Autonom\u00eda (art. 147)" },
        { value: "competencias", label: "Reparto de competencias (arts. 148-150)" },
        { value: "instituciones", label: "Instituciones auton\u00f3micas (art. 152)" },
        { value: "control", label: "Control de las CCAA (arts. 153-155)" },
        { value: "financiacion", label: "Financiaci\u00f3n auton\u00f3mica (arts. 156-158)" },
        { value: "regimenes_especiales", label: "Reg\u00edmenes especiales" }
    ]
};

function escapeHtml(text) {
    return String(text ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function repairText(value) {
    const text = String(value ?? "");
    if (!text) {
        return "";
    }

    const looksBroken = /(?:Ã.|Â.|â.|€|™|œ|ž)/.test(text);
    if (!looksBroken) {
        return text;
    }

    try {
        return decodeURIComponent(escape(text));
    } catch (_error) {
        return text
            .replaceAll("Ã¡", "\u00e1")
            .replaceAll("Ã©", "\u00e9")
            .replaceAll("Ã­", "\u00ed")
            .replaceAll("Ã³", "\u00f3")
            .replaceAll("Ãº", "\u00fa")
            .replaceAll("Ã±", "\u00f1")
            .replaceAll("Ã", "\u00c1")
            .replaceAll("Ã‰", "\u00c9")
            .replaceAll("Ã", "\u00cd")
            .replaceAll("Ã“", "\u00d3")
            .replaceAll("Ãš", "\u00da")
            .replaceAll("Ã‘", "\u00d1")
            .replaceAll("Â«", "\u00ab")
            .replaceAll("Â»", "\u00bb")
            .replaceAll("â€”", "\u2014")
            .replaceAll("â€“", "\u2013")
            .replaceAll("â€¦", "\u2026")
            .replaceAll("â†’", "\u2192");
    }
}

function normalizeStudyLevel(level) {
    const cleaned = repairText(level);
    if (!cleaned) {
        return "-";
    }

    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
}

function renderTopicNav() {
    topicNav.innerHTML = state.topics
        .map((topic) => {
            const isActive = state.activeTopic && state.activeTopic.slug === topic.slug;
            return `
                <button class="topic-link ${isActive ? "active" : ""}" data-slug="${topic.slug}">
                    ${escapeHtml(repairText(topic.shortTitle))}
                </button>
            `;
        })
        .join("");

    topicNav.querySelectorAll(".topic-link").forEach((button) => {
        button.addEventListener("click", () => loadTopic(button.dataset.slug));
    });
}

function renderCategorySelect(slug) {
    const categories = topicCategories[slug] || [];
    categorySelect.innerHTML = [
        '<option value="all">Todo el tema</option>',
        ...categories.map((category) => `<option value="${category.value}">${escapeHtml(category.label)}</option>`)
    ].join("");
}

function resetResult() {
    resultBox.classList.add("hidden");
    resultTitle.textContent = "";
    resultText.textContent = "";
}

function resetTest() {
    state.currentQuestions = [];
    questionsList.innerHTML = `
        <article class="question-card">
            <h4>Banco listo</h4>
            <p>Genera un test aleatorio para empezar a practicar sobre el tema activo.</p>
        </article>
    `;
    resetResult();
}

function renderSources(sources) {
    sourcesList.innerHTML = sources
        .map((source) => `
            <article class="source-card">
                <h4>${escapeHtml(repairText(source.label))}</h4>
                <p>${escapeHtml(repairText(source.note))}</p>
                <a href="${source.url}" target="_blank" rel="noopener noreferrer">Abrir fuente oficial</a>
            </article>
        `)
        .join("");
}

function renderTopic(topic) {
    state.activeTopic = topic;

    heroTitle.textContent = repairText(topic.title);
    heroSummary.textContent = repairText(topic.summary);
    heroLevel.textContent = normalizeStudyLevel(topic.studyLevel);
    heroQuestions.textContent = String(topic.totalQuestions ?? 0);
    sourceNote.textContent = repairText(topic.sourceNote);
    topicContent.innerHTML = repairText(topic.contentHtml);

    renderSources(topic.sources || []);
    renderCategorySelect(topic.slug);
    renderTopicNav();
    resetTest();
}

function renderQuestions() {
    if (!state.currentQuestions.length) {
        resetTest();
        return;
    }

    questionsList.innerHTML = state.currentQuestions
        .map((question, questionIndex) => `
            <article class="question-card" data-question-index="${questionIndex}">
                <h4>Pregunta ${questionIndex + 1}</h4>
                <div class="question-meta">
                    <span class="tag">${escapeHtml(categoryLabels[question.category] || repairText(question.category))}</span>
                    <span class="tag">Fuente: ${escapeHtml(repairText(question.sourceRef))}</span>
                    <span class="tag">Dificultad ${escapeHtml(String(question.difficulty))}</span>
                </div>
                <p>${escapeHtml(repairText(question.prompt))}</p>
                <div class="option-list">
                    ${question.options
                        .map((option, optionIndex) => `
                            <label class="option" data-option-index="${optionIndex}">
                                <input type="radio" name="question-${questionIndex}" value="${option.key}">
                                <span>${escapeHtml(repairText(option.text))}</span>
                            </label>
                        `)
                        .join("")}
                </div>
                <div class="question-feedback">
                    <strong></strong>
                    <p></p>
                </div>
            </article>
        `)
        .join("");

    resetResult();
}

async function loadTopics() {
    const data = await fetchJson("/api/topics");
    state.topics = data.topics || [];
    renderTopicNav();

    if (state.topics.length) {
        await loadTopic(state.topics[0].slug);
    } else {
        statusText.textContent = "No hay temas disponibles.";
        heroTitle.textContent = "Temario vacio";
        heroSummary.textContent = "No se han encontrado temas cargados en la aplicacion.";
    }
}

async function loadTopic(slug) {
    statusText.textContent = "Cargando tema...";
    const data = await fetchJson(`/api/topics/${slug}`);
    renderTopic(data.topic);
    statusText.textContent = `Tema activo: ${repairText(data.topic.shortTitle)}`;
}

async function generateTest() {
    if (!state.activeTopic) {
        return;
    }

    const count = Number(countSelect.value) || 10;
    const category = categorySelect.value || "all";
    const data = await fetchJson(`/api/topics/${state.activeTopic.slug}/test?count=${count}&category=${category}`);

    state.currentQuestions = data.questions || [];
    renderQuestions();

    if (!state.currentQuestions.length) {
        resultBox.classList.remove("hidden");
        resultTitle.textContent = "Sin preguntas disponibles";
        resultText.textContent = "No hay suficientes preguntas para el filtro seleccionado.";
    }
}

function checkTest() {
    if (!state.currentQuestions.length) {
        resultBox.classList.remove("hidden");
        resultTitle.textContent = "No hay test generado";
        resultText.textContent = "Genera primero un test aleatorio.";
        return;
    }

    let hits = 0;

    state.currentQuestions.forEach((question, questionIndex) => {
        const card = questionsList.querySelector(`[data-question-index="${questionIndex}"]`);
        const selected = card.querySelector(`input[name="question-${questionIndex}"]:checked`);
        const feedback = card.querySelector(".question-feedback");
        const feedbackTitle = feedback.querySelector("strong");
        const feedbackText = feedback.querySelector("p");

        card.querySelectorAll(".option").forEach((optionEl, optionIndex) => {
            optionEl.classList.remove("correct", "incorrect");

            const option = question.options[optionIndex];
            if (option.key === question.correctOption) {
                optionEl.classList.add("correct");
            }

            if (selected && selected.value === option.key && option.key !== question.correctOption) {
                optionEl.classList.add("incorrect");
            }
        });

        if (selected && selected.value === question.correctOption) {
            hits += 1;
            feedbackTitle.textContent = "Correcta";
        } else if (selected) {
            feedbackTitle.textContent = "Incorrecta";
        } else {
            feedbackTitle.textContent = "Sin responder";
        }

        feedbackText.textContent = `${repairText(question.explanation)} Fuente: ${repairText(question.sourceRef)}.`;
        feedback.style.display = "block";
    });

    const total = state.currentQuestions.length;
    const percentage = total ? Math.round((hits / total) * 100) : 0;

    resultBox.classList.remove("hidden");
    resultTitle.textContent = `Resultado: ${hits}/${total} (${percentage}%)`;
    resultText.textContent = "Revisa las literalidades y los articulos concretos en las preguntas falladas.";
}

generateBtn.addEventListener("click", generateTest);
checkBtn.addEventListener("click", checkTest);

loadTopics().catch((error) => {
    statusText.textContent = "Error al cargar la aplicacion";
    heroTitle.textContent = "No se pudo cargar el temario";
    heroSummary.textContent = error.message;
    resetTest();
});
