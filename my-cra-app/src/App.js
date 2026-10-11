import React, { useState } from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import * as Bs from 'react-icons/bs';
import * as Fi from 'react-icons/fi';
import * as Ai from 'react-icons/ai';

const packs = { Fa, Md, Bs, Fi, Ai };

function App() {
  const [packName, setPackName] = useState('Fa');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState('');

  const icons = Object.entries(packs[packName])
    .filter(([name]) => name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 300); // show max 300 at a time so the page stays fast

  const copyName = (name) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Hey, welcome to new React!</h1>
      <p>Icon gallery: click an icon to copy its name</p>

      <select value={packName} onChange={(e) => setPackName(e.target.value)}>
        {Object.keys(packs).map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      <input
        placeholder="Search (e.g. facebook, home, user)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: 10, padding: 6, width: 260 }}
      />

      <p>{copied && `Copied: ${copied}`}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {icons.map(([name, Icon]) => (
          <button
            key={name}
            onClick={() => copyName(name)}
            title={name}
            style={{ width: 90, padding: 10, cursor: 'pointer' }}
          >
            <Icon size={30} />
            <div style={{ fontSize: 10, marginTop: 5, wordBreak: 'break-all' }}>{name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;