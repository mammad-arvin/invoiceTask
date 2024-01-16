import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvImage from "../../public/Images/AvatarsImage.png";
import BellSvg from "../icons/BellSvg";
import EllipsSvg from "../icons/EllipsSvg";
import Link from "next/link";
import Path from "./Path";

const HeaderUserPath = () => {
   
    return (
        <div className="w-full h-12 p-2 border-b border-gray-200 flex justify-start items-center gap-6">
            <Path />
            <div className="flex justify-end items-center gap-4 ">
                <Link href="">
                    <div className="relative ">
                        <BellSvg />

                        <div className="absolute left-3.5 top-0.5 ">
                            <EllipsSvg />
                        </div>
                    </div>
                </Link>
                <Link href="">
                    <Avatar className="w-8 h-8 relative">
                        <AvatarImage src={AvImage.src} />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                </Link>
            </div>
        </div>
    );
};

export default HeaderUserPath;
