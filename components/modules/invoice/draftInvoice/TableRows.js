import { selectBasicInfo } from "@/Redux/features/sectedProducts/inProgressSlice";
import { TableCell, TableRow } from "@/components/ui/table";

// utility function
import { minDescrip } from "@/utility/utilityFuction";
import { useSelector } from "react-redux";

// style
const cellStyle =
    "text-left text-[#040714] text-[13px] leading-[15.51px] py-3 px-0 font-[400]";

const TableRows = ({ item, id }) => {
    const { marketer, marketerShare, discount } = useSelector(selectBasicInfo);

    return (
        <TableRow
            key={id}
            className={`${
                id % 2 === 0 && "bg-[#F8F9F9]"
            }  w-full flex justify-between border-none`}
        >
            <TableCell className={`${cellStyle} w-[17px] px-3`}>
                {id < 10 && "0"}
                {id}
            </TableCell>
            <TableCell className={`${cellStyle} w-[183px]`}>
                {item.product}
            </TableCell>
            <TableCell className={`${cellStyle} w-[23px]`}>
                {item.qty}
            </TableCell>
            <TableCell className={`${cellStyle} w-[33px]`}>
                {item.price}€
            </TableCell>
            <TableCell className={`${cellStyle} w-[82px]`}>
                {item.bundledUnit}
            </TableCell>
            <TableCell className={`${cellStyle} w-[71px]`}>
                {item.warehouse}
            </TableCell>
            <TableCell className={`${cellStyle} w-[26px]`}>
                {item.bin}
            </TableCell>
            <TableCell className={`${cellStyle} w-[44px]`}>
                {item.weight}kg
            </TableCell>
            <TableCell className={`${cellStyle} w-[62px]`}>
                {item.tax || "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[57px]`}>
                {marketer}
                {marketer ? "%" : "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[97px]`}>
                {marketerShare}
                {marketerShare ? "%" : "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[25px]`}>
                {discount}
                {discount ? "%" : "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[73px] normal-case`}>
                {minDescrip(item.description) || "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[63px]`}>
                {(item.qty * item.price).toLocaleString() + "€"}
            </TableCell>
        </TableRow>
    );
};

export default TableRows;
