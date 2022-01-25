import { useEffect } from 'react';
import {
  fetchMachines,
  fetchMachinesAsync,
  fetchMemes,
  fetchMemesAsync,
  fetchTitle,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchMachinesAsync();
    fetchMachines();
    fetchTitle();
    fetchMemesAsync();
    fetchMemes();
  });
  return <h1>Hello World</h1>;
}
