import styles from "./progress-bar.module.css";
import { useProgress } from "./use-progress";

export const ProgressBar = () => {
  const progressWidth = useProgress();

  console.log(`progressWidth `, progressWidth);

  return (
    <div className={styles.progress} style={{ width: progressWidth }}></div>
  );
};
