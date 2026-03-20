const path = require("path");
const express = require("express");
const data = require("./data");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
});

app.get("/api/topics", (_req, res) => {
    res.json({ topics: data.getTopics() });
});

app.get("/api/topics/:slug", (req, res) => {
    const topic = data.getTopic(req.params.slug);
    if (!topic) {
        res.status(404).json({ error: "Tema no encontrado" });
        return;
    }
    res.json({ topic });
});

app.get("/api/topics/:slug/test", (req, res) => {
    const count = Math.max(1, Math.min(Number(req.query.count) || 10, 50));
    const category = req.query.category || "all";

    const topic = data.getTopic(req.params.slug);
    if (!topic) {
        res.status(404).json({ error: "Tema no encontrado" });
        return;
    }

    const rows = data.getQuestions(req.params.slug, category);
    const selected = shuffle(rows).slice(0, Math.min(count, rows.length)).map((row) => {
        const options = shuffle([
            { key: "A", text: row.optionA },
            { key: "B", text: row.optionB },
            { key: "C", text: row.optionC },
            { key: "D", text: row.optionD }
        ]);

        return {
            id: row.id,
            category: row.category,
            prompt: row.prompt,
            explanation: row.explanation,
            sourceRef: row.sourceRef,
            difficulty: row.difficulty,
            correctOption: row.correctOption,
            options
        };
    });

    res.json({ questions: selected });
});

app.use((_req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Temario app listening on http://localhost:${port}`);
    });
}

module.exports = app;
