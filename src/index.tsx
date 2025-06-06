import { InSim } from "node-insim";
import { InSimFlags } from 'node-insim/packets';
import { createRoot } from 'react-node-insim';

import { App } from "./App";

const inSim = new InSim();

inSim.connect({
  IName: 'React InSim',
  Host: '127.0.0.1',
  Port: 29999,
  Admin: '',
  Flags: InSimFlags.ISF_LOCAL,
})

const root = createRoot(inSim);

root.render(<App />);