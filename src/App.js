import './animals.css';
import Container from './container';
import { DropdownMenu, Header, LogoImage } from './components/header';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hunde from './routes/hunde';
import Katzen from './routes/katzen';
import Tier from './routes/tier';
import CreateMitHook from './routes/create-hook-form';

function App() {
  //JSX
  return (
    <>
      <BrowserRouter>
        <Header>
          <LogoImage src={logo} alt="logo" />
          <DropdownMenu />
        </Header>
        <Routes>
          {/** Index/Startseiten Route mit Container Komponente */}
          <Route index element={<Container />} />
          <Route path="hunde" element={<Hunde />} />
          <Route path="hunde/:id" element={<Tier />} />
          <Route path="katzen" element={<Katzen />} />
          <Route path="katzen/:id" element={<Tier />} />
          <Route path="create" element={<CreateMitHook />} />
          {/** no match Route */}
          <Route path="*" element={<div>Nichts gefunden</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
