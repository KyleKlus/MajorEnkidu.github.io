/** @format */

import styles from '@/styles/header/NavLink.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavLinkProps {
  className?: string;
  pathName: string;
  displayText: string;
}

export default function NavLink(props: React.PropsWithChildren<INavLinkProps>) {
  const router = useRouter();
  const styleClass =
    router.pathname === props.pathName ? styles.isCurrentWindow : '';

  return (
    <Link
      className={styles.navLink + ' ' + styleClass + ' ' + props.className}
      href={props.pathName}
    >
      {props.displayText}
    </Link>
  );
}
