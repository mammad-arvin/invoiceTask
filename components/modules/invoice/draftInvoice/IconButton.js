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
            <TooltipTrigger className="my-2 mx-3">
                <Link
                    href={
                        "/invoice/choose-a-template/configuration/new-invoice-page/in-progress-page"
                    }
                >
                    {icon}
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
                <TooltipArrow />
            </TooltipContent>
        </Tooltip>
    );
};

export default IconButton;
