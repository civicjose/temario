const db = require("./db");
const seed = require("./seed-data");

function upsertTopic(topic) {
    const existing = db.prepare("SELECT id FROM topics WHERE slug = ?").get(topic.slug);

    if (existing) {
        db.prepare(`
            UPDATE topics
            SET title = ?, short_title = ?, summary = ?, study_level = ?, content_html = ?, source_note = ?
            WHERE slug = ?
        `).run(
            topic.title,
            topic.shortTitle,
            topic.summary,
            topic.studyLevel,
            topic.contentHtml,
            topic.sourceNote,
            topic.slug
        );
        return existing.id;
    }

    const result = db.prepare(`
        INSERT INTO topics (slug, title, short_title, summary, study_level, content_html, source_note)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        topic.slug,
        topic.title,
        topic.shortTitle,
        topic.summary,
        topic.studyLevel,
        topic.contentHtml,
        topic.sourceNote
    );

    return result.lastInsertRowid;
}

function seedTopicSources(topicId, slug) {
    db.prepare("DELETE FROM topic_sources WHERE topic_id = ?").run(topicId);
    const insert = db.prepare(`
        INSERT INTO topic_sources (topic_id, label, url, note, sort_order)
        VALUES (?, ?, ?, ?, ?)
    `);

    (seed.topicSources[slug] || []).forEach((source, index) => {
        insert.run(topicId, source.label, source.url, source.note, index + 1);
    });
}

function seedQuestions(topicId, slug) {
    db.prepare("DELETE FROM questions WHERE topic_id = ?").run(topicId);
    const insert = db.prepare(`
        INSERT INTO questions (
            topic_id, category, prompt, option_a, option_b, option_c, option_d,
            correct_option, explanation, source_ref, difficulty
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    (seed.topicQuestions[slug] || []).forEach((row) => {
        insert.run(topicId, ...row);
    });
}

function initDb() {
    const transaction = db.transaction(() => {
        seed.topics.forEach((topic) => {
            const topicId = upsertTopic(topic);
            seedTopicSources(topicId, topic.slug);
            seedQuestions(topicId, topic.slug);
        });
    });

    transaction();
}

module.exports = initDb;
