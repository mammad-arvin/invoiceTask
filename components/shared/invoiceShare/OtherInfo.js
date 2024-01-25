import { selectTotalOFSelectedProduct } from "@/Redux/features/sectedProducts/inProgressSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

// styles
const titleStyle = "text-[13px] leading-[15.51px] font-[400] text-zinc-500";

const desripStyle = "text-[13px] leading-[15.51px] font-[510] text-gray-950";

const flexStyle = "flex justify-start items-center gap-4 ";

const leftTextStyle = "w-[286px] text-zinc-500 text-[13px] leading-[15.51px] ";

const rightTextStyle =
    "text-[13px] leading-[15.51px] font-[510] text-[#5E5E5E]";

const OtherInfo = ({ draft, sign, signtureUrl }) => {
    const signWidth = sign ? sign : "w-[561px]";

    const { base, totalWeight, taxes, invoiceProfit, total } = useSelector(
        selectTotalOFSelectedProduct
    );

    return (
        <div className="flex flex-col justify-start gap-4 ">
            {draft && (
                <>
                    <p className="text-gray-950 text-sm font-[510] leading-[16.71px] ">
                        Other Information
                    </p>

                    <div className={flexStyle}>
                        <div className="w-[286px] flex flex-col gap-2 ">
                            <p className={titleStyle}>Factor Name</p>
                            <p className={desripStyle}>Factor Name</p>
                        </div>
                        <div className="w-[286px] flex flex-col gap-2 ">
                            <p className={titleStyle}>Type</p>
                            <p>
                                <span className="text-green-600 text-[13px] font-[510] leading-[15.51px]">
                                    +
                                </span>
                                <span className={desripStyle}>Increase</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className={titleStyle}>Amount</p>
                            <p className={desripStyle}>50.0 €</p>
                        </div>
                    </div>

                    <div>
                        <div className="w-full h-[1px] bg-zinc-300 rounded-sm" />
                    </div>
                </>
            )}

            <div className="flex gap-4 ">
                <div className="grow flex flex-col  gap-4 ">
                    <div className={flexStyle}>
                        <div className={leftTextStyle}>Base</div>
                        <div className={rightTextStyle}>{base} €</div>
                    </div>
                    <div className={flexStyle}>
                        <div className={leftTextStyle}>Total Weight</div>
                        <div className={rightTextStyle}>{totalWeight} kg</div>
                    </div>
                    <div className={flexStyle}>
                        <div className={leftTextStyle}>Taxes</div>
                        <div className={rightTextStyle}>{taxes} €</div>
                    </div>
                    <div className={flexStyle}>
                        <p className={leftTextStyle}>Invoice Profit</p>
                        <p className="text-[13px] leading-[15.51px] font-[510] text-green-600 ">
                            +{invoiceProfit} €
                        </p>
                    </div>
                    <div className="flex gap-4 text-[13px] leading-[15.51px] ">
                        <p className="w-[286px] font-[510] text-[#040714] ">
                            Total
                        </p>
                        <p className="font-[510] text-[#040714] ">{total} €</p>
                    </div>
                </div>
                <div
                    className={`${signWidth} h-[144px]  p-4 rounded-lg border border-zinc-300 flex flex-col justify-start items-center gap-3`}
                >
                    <p className="w-full text-gray-950 text-sm font-[510] leading-[16.71px] ">
                        Client Signature
                    </p>
                    {signtureUrl && (
                        <Image
                            width={145}
                            height={95}
                            src={signtureUrl}
                            className="w-[145px] h-[95px]"
                            alt="signture"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OtherInfo;
