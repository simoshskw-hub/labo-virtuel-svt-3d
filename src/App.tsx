import { useState } from 'react';
import Myogramme from './modules/myogramme';
import Fatigue from './modules/fatigue';
import Zoom3d from './modules/zoom3d';
import Glissement from './modules/glissement';
import Atp from './modules/atp';
const TABS = [
  { id: 'myogramme', label: 'Myogramme', C: Myogramme },
  { id: 'fatigue', label: 'Fatigue musculaire', C: Fatigue },
  { id: 'zoom3d', label: 'Zoom 3D du muscle', C: Zoom3d },
  { id: 'glissement', label: 'Glissement des filaments', C: Glissement },
  { id: 'atp', label: 'Regeneration de l ATP', C: Atp }
];
export default function App() {
  const [tab, setTab] = useState(TABS[0].id);
  const Active = TABS.find((t) => t.id === tab)!.C;
  return (
    <div className="app">
      <header><h1>Labo Virtuel SVT - Le Muscle</h1><nav>
        {TABS.map((t) => (<button key={t.id} data-testid={'tab-' + t.id} className={t.id === tab ? 'active' : ''} onClick={() => setTab(t.id)}>{t.label}</button>))}
      </nav></header>
      <main><Active /></main>
    </div>
  );
}
