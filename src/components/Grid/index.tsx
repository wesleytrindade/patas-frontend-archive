import { ReactNode } from 'react';
import styles from './Grid.module.scss';

interface GridProps {
    background?: 'white' | 'transparent';
    children: ReactNode;
}
export function Grid({ background = 'white', children }: GridProps) {
    
    return (background === 'white' ?
        <div className={`${styles.grid__white} ${styles.grid}`}>
            {children}
        </div>
        :
        <div className={`${styles.grid__transparent} ${styles.grid}`}>
            {children}
        </div>)



}