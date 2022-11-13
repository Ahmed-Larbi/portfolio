import './App.css';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeliner from './components/Timeliner';
import Github from "./assets/buttons/GitHub_Logo.png"
import React from 'react';


function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if(theme === 'light')
    {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App-${theme}`}>
      <button onClick={toggleTheme} className="toggle__theme">{theme}</button>
      <Intro theme={theme}/>
      <aside> <a href="https://github.com/Ahmed-Larbi" className='github__link'> <img src={Github} alt=""/> </a> </aside>
      <Portfolio theme={theme}/>
      <Timeliner theme={theme}/>
    </div>
  );
}

export default App;
