import { Nav, Link, Popup } from '@/components';
import { useState } from 'react';

export const PrimaryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
    setIsClose(false);
  };

  const handleClosePopup = () => {
    setIsClose(true);
    setIsOpen(false);
  };

  return (
    <>
    <Nav>
      <Link variant="white" size="large" onClick={handleOpenPopup}>Jouer</Link>
      <Link variant="white" size="medium">Règles du jeu</Link>
      <Link variant="white" size="medium">Classement</Link>
      <Link variant="white" size="medium">Paramètres</Link>
    </Nav>

    {isOpen && !isClose && (
      <Popup title="Réglage" isOpen={isOpen} onClick={handleClosePopup} />
    )
      }
    </>
  );
};