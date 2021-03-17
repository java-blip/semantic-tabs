import React from 'react';
import TabSwitcher from "./components/TabSwitcher";

class App extends React.Component {
  render() {
    return (
      <div>
        <TabSwitcher items={[{
          label: 'Hello i am a tab',
          href: '#Hello'
        }]} />
      </div>
    );
  }
}

export default App;
