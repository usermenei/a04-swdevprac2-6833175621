import styles from './card.module.css'
import Image from 'next/image';
export default function ProductCard() {
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/car1.jpg'}
                alt = 'Product Picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardtext}>
                <h3 className={styles.T1}>IMPACT Arena</h3>
                <h5 className={styles.T2}>
                    One of the largest and most modern entertainment venues in Thailand.
                </h5>
            </div>
        </div>
    );
}