import { Nav, Link, Popup } from '@/components';
import { useState } from 'react';

export const PrimaryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
    console.log('test');
  };
  return (
    <>
    <Nav>
      <Link variant="white" size="large" onClick={handleOpenPopup}>Jouer</Link>
      <Link variant="white" size="medium">Règles du jeu</Link>
      <Link variant="white" size="medium">Classement</Link>
      <Link variant="white" size="medium">Paramètres</Link>
    </Nav>

    {isOpen && (
      <Popup title="Réglage" isOpen={isOpen}/>
    )
      }
    </>
  );
};