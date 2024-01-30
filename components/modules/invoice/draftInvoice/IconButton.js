import { TooltipArrow } from "@radix-ui/react-tooltip";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const IconButton = ({ text, icon }) => {
    return (
        <Tooltip>
            <TooltipTrigger className="my-2 md:mx-1.5 lg:mx-2 xl:mx-3 2xl:mx-5">
                {text === "Edit" ? (
                    <Link
                        href={
                            "/invoice/choose-a-template/configuration/new-invoice-page/in-progress-page"
                        }
                    >
                        {icon}
                    </Link>
                ) : (
                    icon
                )}
            </TooltipTrigger>
            <TooltipContent className="2xl:text-[14px]">
                <p>{text}</p>
                <TooltipArrow />
            </TooltipContent>
        </Tooltip>
    );
};

export default IconButton;
