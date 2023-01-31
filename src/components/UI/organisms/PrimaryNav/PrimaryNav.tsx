import { Nav, Link } from '@/components';

export const PrimaryNav = () => {
  return (
    <Nav>
      <Link variant="white" size="large">Jouer</Link>
      <Link variant="white" size="medium">Règles du jeu</Link>
      <Link variant="white" size="medium">Classement</Link>
      <Link variant="white" size="medium">Paramètres</Link>
    </Nav>
  );
};