import { Nav, Link } from '@/components';

export const PrimaryNav = () => {
  return (
    <Nav>
      <Link variant="white" size="4xl">Jouer</Link>
      <Link variant="white" size="3xl">Règles du jeu</Link>
      <Link variant="white" size="3xl">Classement</Link>
      <Link variant="white" size="3xl">Paramètres</Link>
    </Nav>
  );
};