import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <span>Hello World! <b>{count}</b> </span>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </p>
      <p>Template mad by Makoy</p>
    </div>
  );
};

export default App;
