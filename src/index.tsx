import { InSim } from "node-insim";
import { InSimFlags, IS_ISI_ReqI } from 'node-insim/packets';
import { createRoot } from 'react-node-insim';

import { App } from "./App";

const inSim = new InSim();

inSim.connect({
  IName: 'React InSim',
  Host: '192.168.1.100',
  ReqI: IS_ISI_ReqI.SEND_VERSION,
  Port: 29999,
  Admin: '',
  Flags: InSimFlags.ISF_LOCAL,
})

const root = createRoot(inSim);

root.render(<App />);