const seed = require("./seed-data");

// Build indexed question lists per topic slug
const questionsBySlug = {};
for (const [slug, rows] of Object.entries(seed.topicQuestions)) {
    questionsBySlug[slug] = rows.map((row, i) => ({
        id: i + 1,
        category: row[0],
        prompt: row[1],
        optionA: row[2],
        optionB: row[3],
        optionC: row[4],
        optionD: row[5],
        correctOption: row[6],
        explanation: row[7],
        sourceRef: row[8],
        difficulty: row[9]
    }));
}

function getTopics() {
    return seed.topics.map(({ slug, title, shortTitle, summary, studyLevel }) => ({
        slug, title, shortTitle, summary, studyLevel
    }));
}

function getTopic(slug) {
    const topic = seed.topics.find((t) => t.slug === slug);
    if (!topic) return null;

    return {
        slug: topic.slug,
        title: topic.title,
        shortTitle: topic.shortTitle,
        summary: topic.summary,
        studyLevel: topic.studyLevel,
        contentHtml: topic.contentHtml,
        sourceNote: topic.sourceNote,
        sources: seed.topicSources[slug] || [],
        totalQuestions: (questionsBySlug[slug] || []).length
    };
}

function getQuestions(slug, category) {
    const all = questionsBySlug[slug] || [];
    if (category && category !== "all") {
        return all.filter((q) => q.category === category);
    }
    return all;
}

module.exports = { getTopics, getTopic, getQuestions };
