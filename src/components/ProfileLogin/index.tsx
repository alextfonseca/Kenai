import Link from "next/link";

import styles from "./style.module.scss";

interface ProfileLoginProps {
  name: string;
}

export const ProfileLogin = ({ name }: ProfileLoginProps) => {
  return (
    <Link href="/home" passHref>
      <div className={styles.profile}>
        <div></div>

        <span>{name}</span>
      </div>
    </Link>
  );
};
