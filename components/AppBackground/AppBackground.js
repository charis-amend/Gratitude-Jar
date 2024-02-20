import Image from "next/image"

export default function AppBackground() {
    <>
        <div className=" min-h-screen flex justify-center items-center z-0">
            <Image
                src="/assets/imgAppBackground.jpg"
                alt="blackAppBackground"
                style={{ width: '100%', height: '100%' }}
                priority
                layout="fill"
                objectFit="cover"
            />

        </div>
    </>
} 
