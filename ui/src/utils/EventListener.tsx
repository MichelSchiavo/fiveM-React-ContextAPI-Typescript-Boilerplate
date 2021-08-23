import { useEffect } from 'react';
import { useOppenedContext } from '../contexts/OppenedContext';

export function EventListener() {
  const { changeStatus } = useOppenedContext();
  useEffect(() => {
    window.addEventListener("message", (e) => {
      changeStatus(e.data.value ?? false);
    })
  }, []);

  return null;
};