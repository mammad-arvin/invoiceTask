import { selectBasicInfo } from "@/Redux/features/sectedProducts/inProgressSlice";
import { useSelector } from "react-redux";

// styles
const titleStyle = " leading-[15.51px] font-[400] text-zinc-500";
const desripStyle = "leading-[15.51px] font-[510] text-gray-950";
const divStyle = "w-[286px] flex flex-col gap-2";

const BasicInfo = () => {
    const { costCenter, client, description } = useSelector(selectBasicInfo);

    return (
        <div className="flex flex-col justify-start items-start gap-4 md:text-xs lg:text-[13px] 2xl:text-[15px] ">
            <div className="h-4 text-gray-950 md:text-[13px] lg:text-sm 2xl:text-[16px] leading-[16.71px] font-[510]">
                Basic Information
            </div>

            <div className="flex flex-col gap-2">
                <div className={titleStyle}>Cost Center</div>
                <div className={desripStyle}>{costCenter}</div>
            </div>

            <div className="flex items-center gap-4">
                <div className={divStyle}>
                    <div className={titleStyle}>Client</div>
                    <div className={desripStyle}>{client}</div>
                </div>
                <div className={divStyle}>
                    <div className={titleStyle}>Invoice Description</div>
                    <div className={desripStyle}>{description}</div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
