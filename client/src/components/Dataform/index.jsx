import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PostForm from "../PostForm";

const Dataform = () => {
	
    return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Waterflow</h1>
				<Link to="/data-logs">
						<button type="button" className={styles.white_btn}>
							Data
						</button>
				</Link>
                <Link to="/">
                    <button type="button" className={styles.white_btn}>
                        Home
                    </button>
                </Link>
			</nav>
		</div>
			<PostForm />
		</>
	);
};

export default Dataform;