import { useEffect } from 'react';
import {
  fetchMachines,
  fetchMachinesAsync,
  fetchMemes,
  fetchTitle,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchMachinesAsync();
    fetchMachines();
    fetchTitle();
    fetchMemes();
  });
  return <h1>Hello World</h1>;
}
