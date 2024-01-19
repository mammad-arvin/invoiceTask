import { TooltipArrow } from "@radix-ui/react-tooltip";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import InProgress from "../InProgress/InProgress";

const IconButton = ({ text, icon, setPage }) => {
    return (
        <Tooltip>
            <TooltipTrigger
                className="my-2 mx-3"
                onClick={() =>
                    icon.type.name === "Edit" && setPage(<InProgress />)
                }
            >
                {icon}
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
                <TooltipArrow />
            </TooltipContent>
        </Tooltip>
    );
};

export default IconButton;
