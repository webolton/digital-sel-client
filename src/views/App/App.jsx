import React from 'react';

// Custom components
import Routes from 'config/Routes';
import Footer from 'components/Footer';
import NavigationBar from 'components/NavigationBar';

const App = () => (
  <div>
    <NavigationBar />
    <Routes />
    <Footer />
  </div>
);

export default App;
