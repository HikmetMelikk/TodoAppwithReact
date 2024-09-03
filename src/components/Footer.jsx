import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
    return (
        <div className={styles.footer}>
            <span className={styles.item}>
                Completed TO-DO's: {completedTodos}
            </span>
            <span className={styles.item}>Total TO-DO's: {totalTodos}</span>
        </div>
    );
}
