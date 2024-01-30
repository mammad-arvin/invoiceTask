// icons
import GroupSvg from "../icons/GroupSvg";
import LayoutwebSvg from "../icons/LayoutwebSvg";
import CalculatorSvg from "../icons/CalculatorSvg";
import DocSvg from "../icons/DocSvg";
import UsersSvg from "../icons/UsersSvg";
import BoxSvg from "../icons/BoxSvg";
import CreditSvg from "../icons/CreditSvg";
import BuildingSvg from "../icons/BuildingSvg";
import ClipboardListSvg from "../icons/ClipboardListSvg";
import UserGroupSvg from "../icons/UserGroupSvg";
import FileSettingSvg from "../icons/FileSettingSvg";
import FileUploadSvg from "../icons/FileUploadSvg";
import BoxSearchSvg from "../icons/BoxSearchSvg";
import SettingSvg from "../icons/SettingSvg";
import ArrowExportSvg from "../icons/ArrowExportSvg";

//  shadcn-ui
import { Button } from "../ui/sideBarButton";

const btns = [
    { icon: <LayoutwebSvg />, text: "Dashboard" },
    { icon: <CalculatorSvg />, text: "Accounting" },
    { icon: <DocSvg />, text: "Invoices" },
    { icon: <UsersSvg />, text: "Partner" },
    { icon: <BoxSvg />, text: "Product" },
    { icon: <CreditSvg />, text: "Payment" },
    { icon: <BuildingSvg />, text: "Warehouse" },
    { icon: <ClipboardListSvg />, text: "Report" },
    { icon: <UserGroupSvg />, text: "Users" },
    { icon: <FileSettingSvg />, text: "Config" },
    { icon: <FileUploadSvg />, text: "Up Center" },
    { icon: <BoxSearchSvg />, text: "Cyclecount" },
    { icon: <SettingSvg />, text: "Setting" },
];

const SideBarMenu = () => {
    return (
        <div className=" md:w-[70px] lg:w-20 xl:w-24 h-[1080px] 2xl:h-[1380px] px-4 py-6 border-r border-gray-200 flex-col justify-start items-center gap-10 inline-flex">
            <GroupSvg />

            <div className="w-16 grow basis-0 flex-col justify-start items-start gap-4 flex">
                {btns.map((btn, index) => (
                    <Button key={index} className="2xl:h-[65px]">
                        {btn.icon}
                        <p
                            className={`text-center md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm leading-[14.32px] ${
                                index === 0
                                    ? "font-[500] font-['Inter']"
                                    : "font-[400]"
                            }
                            ${index === 2 ? "text-blue-600" : "text-zinc-500"}`}
                        >
                            {btn.text}
                        </p>
                    </Button>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <div
                    className={
                        "text-center md:text-[10px] lg:text-[11px] xl:text-xs  text-zinc-500 font-[400] leading-[14.32px]"
                    }
                >
                    V 1.0.25
                </div>
                <ArrowExportSvg />
            </div>
        </div>
    );
};

export default SideBarMenu;
