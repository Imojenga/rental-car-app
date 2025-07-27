import { Link, NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';
import Container from '../Container/Container';

const getNavStyles = ({ isActive }) => clsx(css.link, isActive && css.active);

const AppBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrp}>
          <Link to="/">
            <svg width="104" height="16">
              <use href="/icons/icons.svg#icon-logo"></use>
            </svg>
          </Link>
          <nav className={css.nav}>
            <NavLink className={getNavStyles} to="/">
              Home
            </NavLink>
            <NavLink className={getNavStyles} to="/catalog">
              Catalog
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
