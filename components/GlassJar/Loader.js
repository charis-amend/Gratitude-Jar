import { Html, useProgress } from "@react-three/drei";
import Image from "next/image";
export default function Loader() {
    const { progress } = useProgress();

    return (
        <Html>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                    <Image
                        priority
                        src="/preloadedGlasJar.png"
                        alt="placeholder-glasjar"
                        width={500}
                        height={500}
                    />

                    <p className="text-sm color text-white-100 font-extrabold p-3 justify-items-center">
                        {progress.toFixed(2)}%
                    </p>
                </div>
            </div>
        </Html >
    );
};