'use client';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import BurgerMenu from './BurgerMenu';
import Large_Screen_nav from './Large-Screen_nav';

export default function Nav() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [clickedBurgerMenu, setClickedBurgerMenu] = useState(false);

  useEffect(() => {
    if (clickedBurgerMenu) {
      document.body.style.cssText = `overflowY: hidden; position:fixed;`;
    }
    if (!clickedBurgerMenu) {
      document.body.style.cssText = `overflowY: visible ; position:relative; `;
    }
  }, [clickedBurgerMenu]);

  useEffect(() => {
    async function getUserSession() {
      const session = await getSession();
      if (session?.user.name && session?.user.email) {
        setUserName(session.user.name);
        setUserEmail(session.user.email);
      }
    }
    getUserSession();
  }, []);

  function handleClickedBurgerMenu() {
    setClickedBurgerMenu(!clickedBurgerMenu);
  }

  return (
    <>
      {clickedBurgerMenu ? (
        <BurgerMenu
          userName={userName}
          handleClickedBurgerMenu={handleClickedBurgerMenu}
        />
      ) : (
        <Large_Screen_nav
          userName={userName}
          handleClickedBurgerMenu={handleClickedBurgerMenu}
          userEmail={userEmail}
        />
      )}
    </>
  );
}
