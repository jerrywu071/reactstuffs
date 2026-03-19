

import TabButton from '../components/TabButton.jsx';
import Section from '../components/Section.jsx';
import { useState } from 'react'; //anything starting with 'use' is a hook, is a regular function but can only be called in react components or other custom hooks.

import { EXAMPLES } from '../data.js';

export default function Examples() {

    //THE GOAL IS TO DO ALL STATE HANDLING IN THEIR OWN COMPONENTS TO SEPARATE CONCERNS AND MAKE COMPONENTS MORE REUSABLE. IN THIS CASE, THE EXAMPLES COMPONENT IS RESPONSIBLE FOR RENDERING THE EXAMPLE TOPICS AND CONTENT, SO IT HANDLES THE STATE OF WHICH TOPIC IS SELECTED WITHOUT REFRESHING THE WHOLE APP'S STATE.

    //must call directly in component function at the top level and not on an inner helper function. 2nd element in the array is a function called to update the data i.e. call the component function again

    //also, the initial state has to be a valid element in the array otherwise an error will persist

    //IMPORTANT ** the state array format is [ state variable (any value), state variable setter function ]
    const [ selectedTopic, setSelectedTopic ] = useState(); 


    function handleSelect(selectedButton) {
        //selected button can be components, jsx, props, or state

        setSelectedTopic(selectedButton);
    }

    //conditional rendering for the tab content
    let tabContent = <p>Please select a topic.</p>;

    if(selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                    {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }
    return(
        <Section title="Examples" id="examples"> {/* id="examples" is a forwarded prop */}

            <menu>
                {/*CHECK WHICH TOPIC IS SELECTED FOR EACH ONE TO DETERMINE HIGHLIGHTING*/}

                {/*Custom "onSelect" prop is no longer needed due to prop forwarding as defined in TabButton.jsx. Now we can use onClick*/}
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </menu>

        {tabContent /*render tab content*/}

        </Section>
    );
}