import { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
}

//? 1.- ts = porque no tiene jsx, sino sería tsx.
//? 2.- Todos los children son un ReactNode = lo que te renderiza el componente.
