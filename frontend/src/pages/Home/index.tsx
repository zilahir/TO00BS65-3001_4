
import Info from '../../components/Info';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.homeRootContainer}>
            <Info />
        </div>
    )
}

export default Home