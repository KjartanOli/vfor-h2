import NavBar from "./NavBar";
import SessionButtons from "./SessionButtons";
import styles from "./Header.module.css";

export default function Header() {
  return (<header className={styles.container}>
            <div className={styles.NavBarContainer}>
              <NavBar></NavBar>
            </div>
            <div className={styles.SessionButtonsContainer}>
              <SessionButtons></SessionButtons>
            </div>
          </header>);
}
