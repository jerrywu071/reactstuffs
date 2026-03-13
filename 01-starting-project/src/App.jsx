import { useState } from 'react'; //anything starting with 'use' is a hook, is a regular function but can only be called in react components or other custom hooks.



import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  //must call directly in component function at the top level and not on an inner helper function. 2nd element in the array is a function called to update the data i.e. call the component function again

  //also, the initial state has to be a valid element in the array otherwise an error will persist

  //IMPORTANT ** the state array format is [ state variable (any value), state variable setter function ]
  const [ selectedTopic, setSelectedTopic ] = useState(); 


  function handleSelect(selectedButton) {
      //selected button can be components, jsx, props, or state

      setSelectedTopic(selectedButton);

      console.log(selectedTopic);
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


  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>

        
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>


        <section id="examples">
          <h2>Examples</h2>

          <menu>
            {/*CHECK WHICH TOPIC IS SELECTED FOR EACH ONE TO DETERMINE HIGHLIGHTING*/}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

        {tabContent /*render tab content*/}

        </section>


      </main>
    </div>
  );
}

export default App;
