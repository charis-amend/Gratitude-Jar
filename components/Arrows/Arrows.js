import styles from "./Arrows.module.css"
import Image from "next/image"

export default function Arrows() {

    return (
        <>
            <div className={`${styles.arrows} animated`}>
                <Image
                    className="imagefinger"
                    priority
                    src={"/arrowsfinger3.png"}
                    alt="placeholder-glasjar"
                    width={60}
                    height={60}
                />
            </div>
        </>

    )
}