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

const SideBarMenu = () => {
    const pTagClass =
        "text-center text-xs text-zinc-500 font-normal font-['SF Pro']";

    return (
        <div className="w-24 h-[1080px] px-4 py-6 bg-white border-r border-gray-200 flex-col justify-start items-center gap-10 inline-flex">
            <GroupSvg />

            <div className="w-16 grow basis-0 flex-col justify-start items-start gap-4 flex">
                <Button>
                    <LayoutwebSvg />
                    <p className={`${pTagClass} font-medium font-['Inter']`}>
                        Dashboard
                    </p>
                </Button>
                <Button>
                    <CalculatorSvg />
                    <p className={pTagClass}>Accounting</p>
                </Button>
                <Button>
                    <DocSvg />
                    <p className="text-center text-xs font-normal font-['SF Pro'] text-blue-600">
                        Invoices
                    </p>
                </Button>
                <Button>
                    <UsersSvg />
                    <p className={pTagClass}>Partner</p>
                </Button>
                <Button>
                    <BoxSvg />
                    <p className={pTagClass}>Product</p>
                </Button>
                <Button>
                    <CreditSvg />
                    <p className={pTagClass}>Payment</p>
                </Button>
                <Button>
                    <BuildingSvg />
                    <p className={pTagClass}>Warehouse</p>
                </Button>
                <Button>
                    <ClipboardListSvg />
                    <p className={pTagClass}>Report</p>
                </Button>
                <Button>
                    <UserGroupSvg />
                    <p className={pTagClass}>Users</p>
                </Button>
                <Button>
                    <FileSettingSvg />
                    <p className={pTagClass}>Config</p>
                </Button>
                <Button variant="ghost">
                    <FileUploadSvg />
                    <p className={pTagClass}>Up Center</p>
                </Button>
                <Button>
                    <BoxSearchSvg />
                    <p className={pTagClass}>Cyclecount</p>
                </Button>
                <Button>
                    <SettingSvg />
                    <p className={pTagClass}>Setting</p>
                </Button>
            </div>
            <div className="flex justify-center items-center">
                <div className={pTagClass}>V 1.0.25</div>
                <ArrowExportSvg />
            </div>
        </div>
    );
};

export default SideBarMenu;
