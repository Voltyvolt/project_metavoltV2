import { useState } from 'react';
import { Navbar, Transfer, Footer, Services, Transactions} from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Transfer />
      </div>
      <Services />
      <Footer />
    </div>
  )
}

export default App;
