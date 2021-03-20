import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import '.App.css'

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />
      case 'Contact':
        return <ContactForm/>;
        case 'Resume':
          return <Resume />;
          case 'Portoflio':
            return <Portfolio />

    }
  };

return (
  <div>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
      {
        // Render the component returned by 'renderPage()'
        // YOUR CODE HERE
        <div>{renderPage(currentPage)}</div>
        //
      }
    </div>
  </div>
);
}

export default App;


