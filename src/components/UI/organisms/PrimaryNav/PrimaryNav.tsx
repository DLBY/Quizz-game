import { Nav } from '@/components';

export const PrimaryNav = () => {
  return (
    <Nav>
      <span className="text-white font-bold text-4xl lg:text-5xl"> Jouer </span>
      <span className="text-white font-bold text-4xl lg:text-5xl"> Règles du jeu </span>
      <span className="text-white font-bold text-4xl lg:text-5xl"> Classement </span>
      <span className="text-white font-bold text-4xl lg:text-5xl"> Paramètres </span>
    </Nav>
  );
};