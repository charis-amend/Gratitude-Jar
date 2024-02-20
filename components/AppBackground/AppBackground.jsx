import Image from "next/image"

export default function AppBackground() {
    <>
        <Image src="/assets/imgAppBackground.jpg"
            alt="blackAppBackground"
            style={{ width: '100%', height: '100%' }}
            priority
            layout="fill"
            objectFit="cover"
        />
    </>
} 
