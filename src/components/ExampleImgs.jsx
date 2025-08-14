import React from "react";
import Image from "next/image";
import styles from "../styles/ExampleImgs.module.css";


export default function ExampleImgs() {
    return (
        <div className={styles.exampleImgs}>
            <Image className={styles.img} src="/images/nextjs.png" alt="Next.js" width={50} height={50} />
            <Image className={styles.img} src="/images/gatsby.png" alt="Gatsby" width={50} height={50} />
            <Image className={styles.img} src="/images/remix.png" alt="Remix" width={50} height={50} />
            <Image className={styles.img} src="/images/nuxtjs.png" alt="Nuxt.js" width={50} height={50} />
            <Image className={styles.img} src="/images/sveltekit.png" alt="SvelteKit" width={50} height={50} />
        </div>
    );
}