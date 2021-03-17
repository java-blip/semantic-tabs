import React from 'react';
import TabSwitcher from "./components/TabSwitcher";

class App extends React.Component {
  render() {
    return (
      <div>
        <TabSwitcher items={[
          {
            label: 'Hello i am a tab',
            href: '#Hello'
          },
          {
            label: 'hELLO',
            href: '#hello'
          }
        ]} />
      </div>
    );
  }
}

export default App;
