import { TooltipArrow } from "@radix-ui/react-tooltip";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const IconButton = ({ text, icon }) => {
    return (
        <Tooltip>
            <TooltipTrigger className="my-2 mx-3">{icon}</TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
                <TooltipArrow />
            </TooltipContent>
        </Tooltip>
    );
};

export default IconButton;
