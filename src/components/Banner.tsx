import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt = 'cover'
            fill = {true}
            priority
            objectFit="cover"/>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue </h1>
                <h3>Find Your Space, Create Your Story. From weddings to workshops, we have the perfect spot for you.</h3>
            </div>
        </div>
    );
}