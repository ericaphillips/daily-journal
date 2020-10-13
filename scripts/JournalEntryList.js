/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    // DOM reference to where all entries will be rendered
    const entryLog = document.querySelector(".entryList")
    // debugger
    let entryList = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryList += JournalEntryComponent(entry)
    }
    entryLog.innerHTML += `
    <section class="entriesList">
        ${entryList}
    </section>
    `
}