import { TableCell, TableRow } from "@/components/ui/table";

// utility function
import { minDescrip } from "@/utility/utilityFuction";

const TableRows = ({ item }) => {
    const cellStyle =
        "text-left text-[#040714] text-[13px] leading-[15.51px] py-3 px-0 font-[400]";

    return (
        <TableRow
            key={item.id}
            className={`${
                item.id % 2 === 0 && "bg-[#F8F9F9]"
            }  w-full flex justify-between`}
        >
            <TableCell className={`${cellStyle} w-[17px] px-3`}>
                {item.id < 10 && "0"}
                {item.id}
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
                {item.marketer}
                {item.marketer ? "%" : "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[97px]`}>
                {item.marketerShare}
                {item.marketerShare ? "%" : "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[25px]`}>
                {item.dis}
                {item.dis ? "%" : "-"}
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
