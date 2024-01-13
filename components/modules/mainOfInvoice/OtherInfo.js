import SignatureSvg from "@/components/icons/SignatureSvg";

const OtherInfo = () => {
    // styles
    const titleStyle = "text-[13px] leading-[15.51px] font-[400] text-zinc-500";

    const desripStyle =
        "text-[13px] leading-[15.51px] font-[510] text-gray-950";

    const flexStyle = "flex justify-start items-center gap-4 ";

    const leftTextStyle =
        "w-[286px] text-zinc-500 text-[13px] leading-[15.51px] ";

    const rightTextStyle =
        "text-[13px] leading-[15.51px] font-[510] text-[#5E5E5E]";

    return (
        <div className="h-64 flex flex-col justify-start gap-4 ">
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

            <div className="flex gap-4 ">
                <div className="grow flex flex-col  gap-4 ">
                    <div className={flexStyle}>
                        <div className={leftTextStyle}>Base</div>
                        <div className={rightTextStyle}>550.20 €</div>
                    </div>
                    <div className={flexStyle}>
                        <div className={leftTextStyle}>Total Weight</div>
                        <div className={rightTextStyle}>50kg</div>
                    </div>
                    <div className={flexStyle}>
                        <div className={leftTextStyle}>Taxes</div>
                        <div className={rightTextStyle}>50.0 €</div>
                    </div>
                    <div className={flexStyle}>
                        <p className={leftTextStyle}>Invoice Profit</p>
                        <p className="text-[13px] leading-[15.51px] font-[510] text-green-600 ">
                            +600€
                        </p>
                    </div>
                    <div className="flex gap-4 text-[13px] leading-[15.51px] ">
                        <p className="w-[286px] font-[510] text-[#040714] ">
                            Total
                        </p>
                        <p className="font-[510] text-[#040714] ">1200.20 €</p>
                    </div>
                </div>
                <div className="w-[561px] h-[144px]  p-4 rounded-lg border border-zinc-300 flex flex-col justify-start items-center gap-3 ">
                    <p className="w-full text-gray-950 text-sm font-[510] leading-[16.71px] ">
                        Client Signature
                    </p>
                    <SignatureSvg />
                </div>
            </div>
        </div>
    );
};

export default OtherInfo;
