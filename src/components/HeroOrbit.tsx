import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ 
    children,
    size,
    rotation,
    orbitDuration,
    shouldOrbit = false,
    shouldSpin =false,
    spinDuration,
}: PropsWithChildren<{ size: number; rotation: number; orbitDuration?: string; shouldOrbit?: boolean;  spinDuration?: string; shouldSpin?: boolean }>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className={twMerge(shouldOrbit === true && "animate-spin ")} style={{
                animationDuration: orbitDuration,
            }}>
                <div className="flex items-start justify-start " style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    transform: `rotate(${rotation}deg)`,

                    // transform: `rotate(${Math.random() * 360}deg)`,
                    // animation: `spin 10s linear infinite`,
                    // borderRadius: "50%",
                    // border: "none",
                }}>
                    <div className={twMerge(shouldSpin === true && "animate-spin")}  style={{
                animationDuration: spinDuration,
            }}>
                    <div className="inline-flex"
                        style={{
                            transform: `rotate(${rotation * -1}deg)`,
                        }}>
                        {children}</div>
                        </div>
                </div>
            </div>
        </div>
    )
}