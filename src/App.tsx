import AppGrid from './components/grid/AppGrid';
import AppRouter from './router/AppRouter';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.app}>
        <AppGrid />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
