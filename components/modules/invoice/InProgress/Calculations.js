import {
    selectBasicInfo,
    selectTotalOFSelectedProduct,
} from "@/Redux/features/sectedProducts/inProgressSlice";
import { useSelector } from "react-redux";

// styles
const flexStyle = "flex justify-center items-center lg:gap-4 md:gap-2";
const valStyle = "font-[510] text-zinc-600 ";

const Calculations = () => {
    const { discount } = useSelector(selectBasicInfo);
    const { base, taxes, total } = useSelector(selectTotalOFSelectedProduct);

    return (
        <div className="flex justify-between">
            <div></div>

            <div
                className="xl:w-[44%] lg:w-[49%] md:w-[58%] h-10 p-3 md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] text-zinc-500
                    leading-[15.51px] rounded-bl-lg rounded-br-lg border-l border-r border-b border-zinc-300
                     flex justify-between items-center xl:gap-4 md:gap-2 "
            >
                <div className={flexStyle}>
                    <p>Base</p>

                    <p className={valStyle}>{base} €</p>
                </div>
                <div className="w-[1px] h-[16px] self-stretch bg-[#EAEFFF]" />
                <div className={flexStyle}>
                    <p>Discount</p>
                    <p className={valStyle}>{discount}%</p>
                </div>
                <div className="w-[1px] h-[16px] self-stretch bg-[#EAEFFF]" />

                <div className={flexStyle}>
                    <p>Taxes</p>
                    <p className={valStyle}>{taxes.toFixed(2)} €</p>
                </div>

                <div className="w-[1px] h-[16px] self-stretch bg-[#EAEFFF]" />

                <div className={flexStyle}>
                    <p className="text-[#040714] font-[510]">Total</p>

                    <p className="text-[#040714] font-[510]">{total} €</p>
                </div>
            </div>
        </div>
    );
};

export default Calculations;
