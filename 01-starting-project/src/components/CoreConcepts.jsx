import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from '../components/CoreConcept.jsx';

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />) /*dynamically output the core concepts as list items, spread operator to pass all the properties of the concept item as props to the component*/}
            </ul>
        </section>
    );
}