import Header from './components/Header/Header.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';

import Examples from './components/Examples.jsx';


function App() {
    return (
        <> {/* <Fragment></Fragment> alternative*/}
            <Header />
            <main>
                {/*The goal is to make the main app component as compact and lean as possible by just rendering underlying components rather than have the app component handle any real heavy lifting or complex logic. This allows for better organization and maintainability as well as a good visualization of what the page looks like from a code perspective before it is even rendered to the browser. */}

                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default App;