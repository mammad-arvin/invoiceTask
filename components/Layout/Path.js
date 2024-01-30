import ArrowLeftSvg from "../icons/ArrowLeftSvg";
import AngelRightSvg from "../icons/AngelRightSvg";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

const Path = () => {
    const { pathname, back } = useRouter();
    const splitedPath = pathname.slice(1).split("/");
    const pathTitle =
        splitedPath[0] === ""
            ? "home"
            : splitedPath[0] === "_error"
            ? "NOTE FOUND"
            : splitedPath[splitedPath.length - 1].split("-").join(" ");

    return (
        <div className="grow h-8  flex items-center gap-2 capitalize md:text-[11px] lg:text-[12px] xl:text-sm 2xl:text-[16px]">
            <div className="flex justify-start items-center gap-2">
                <Button
                    onClick={() => back()}
                    variant="ghost"
                    className="p-0 m-0 hover:bg-transparent"
                >
                    <div className="p-1 rounded-lg border border-zinc-300">
                        <ArrowLeftSvg />
                    </div>
                </Button>
                <p className="text-gray-950 font-[510]">{pathTitle}</p>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex justify-start items-center md:gap-[0px] lg:gap-[2px] xl:gap-1 ">
                {splitedPath.map((path, index) => (
                    <div
                        key={index}
                        className={`flex items-center ${
                            index === splitedPath.length - 1
                                ? "text-blue-600"
                                : "text-neutral-400"
                        } font-[400]`}
                    >
                        {path === ""
                            ? "home"
                            : path === "_error"
                            ? "NOT FOUND"
                            : path.split("-").join(" ")}
                        {index !== splitedPath.length - 1 && <AngelRightSvg />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Path;
