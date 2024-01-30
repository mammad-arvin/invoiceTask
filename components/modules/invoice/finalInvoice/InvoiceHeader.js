import CompletGroupSvg from "@/components/icons/CompletGroupSvg";
import { currentDate } from "@/utility/utilityFuction";

const InvoiceHeader = () => {
    return (
        <div className="h-[72px] flex justify-between items-center gap-6 p-4 bg-[#EAEFFF] rounded-tl-lg rounded-tr-lg ">
            <div className="lg:w-[391px] md:w-[300px]">
                <CompletGroupSvg />
            </div>

            <div className="w-[77px] md:text-xs 2xl:text-[15px] flex-col justify-start items-start gap-2 inline-flex">
                <p className="self-stretch text-neutral-400 font-normal ">
                    Date
                </p>
                <p className="self-stretch text-gray-950 ">{currentDate()}</p>
            </div>
            <div className="w-[1px] h-[40px] self-stretch bg-zinc-300 rounded-sm" />
            <div className="w-[290px] 2xl:w-[310px] flex-col justify-center items-end gap-2 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <p className="text-blue-600 lg:text-sm md:text-[12px] 2xl:text-[16px] font-[510] leading-[16.71px]">
                        DEL-INTERNET TELECOM S.L.U
                    </p>
                    <p className="text-neutral-400 text-[11px] leading-[14.32px]">
                        B55606446
                    </p>
                </div>
                <p className="text-neutral-400 md:text-[11px] 2xl:text-xs leading-[14.32px]">
                    Plaça mercat La Cava 1-Local Delinternet Deltebre-43580
                </p>
            </div>
        </div>
    );
};

export default InvoiceHeader;
