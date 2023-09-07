import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div>
      <Banner title="My React Website" />
      <Exhibit title="Sample Exhibit">
        {/* Add any content or child components here */}
        <p>This is some content inside the exhibit.</p>
      </Exhibit>
    </div>
  );
}

export default App;
