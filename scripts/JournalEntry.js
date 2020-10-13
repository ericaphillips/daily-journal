/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry__concept">${entry.concept}</div>
            <div class="entry__body">${entry.entry}</div>
            <div class="entry__date__mood">${entry.date} Feeling: ${entry.mood}</div>
        </section>
    `
}