import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Datalogs = () => {
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Waterflow</h1>
				<Link to="/data-logs/add-data">
					<button type="button" className={styles.white_btn}>
						Add
					</button>
				</Link>
                <Link to="/">
                    <button type="button" className={styles.white_btn}>
                        Home
                    </button>
                </Link>
			</nav>
		</div>
        
	);
};

export default Datalogs;
