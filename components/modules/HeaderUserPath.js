import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvImage from "../../public/Images/AvatarsImage.png";
import ArrowLeftSvg from "../icons/ArrowLeftSvg";
import AngelRightSvg from "../icons/AngelRightSvg";
import BellSvg from "../icons/BellSvg";
import EllipsSvg from "../icons/EllipsSvg";
import Link from "next/link";

const HeaderUserPath = () => {
    const gonePathStyle = "text-neutral-400 text-sm font-[400]";
    return (
        <div className="w-full h-12 p-2 border-b border-gray-200 flex justify-start items-center gap-6">
            <div className="grow h-8  flex items-center gap-2">
                <div className="flex justify-start items-center gap-2">
                    <Link href="">
                        <div className="p-1 rounded-lg border border-zinc-300">
                            <ArrowLeftSvg />
                        </div>
                    </Link>
                    <div className="text-gray-950 text-sm font-[510]">
                        New Invoice
                    </div>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex justify-start items-center gap-1 ">
                    <div className={gonePathStyle}>Invoice</div>

                    <AngelRightSvg />

                    <div className={gonePathStyle}>Choose a template</div>

                    <AngelRightSvg />

                    <div className={gonePathStyle}>Configutarion</div>

                    <AngelRightSvg />

                    <div className="text-blue-600 text-sm font-[400] ">
                        New invoice page
                    </div>
                </div>
            </div>
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
                        <AvatarImage {...AvImage} />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                </Link>
            </div>
        </div>
    );
};

export default HeaderUserPath;
