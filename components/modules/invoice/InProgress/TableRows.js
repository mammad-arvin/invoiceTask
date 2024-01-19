import {
    deleteProduct,
    editeSelectedProduct,
} from "@/Redux/features/sectedProducts/selectedProductsSlice";
import SubmitSvg from "@/components/icons/SubmitSvg";
import TableEditeSvg from "@/components/icons/TableEditeSvg";
import TableTrashSvg from "@/components/icons/TableTrashSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";

// utility function
import { minDescrip } from "@/utility/utilityFuction";
import { useState } from "react";
import { useDispatch } from "react-redux";

// style
const cellStyle =
    "text-left text-[#040714] text-[13px] leading-[15.51px] py-3 px-0 pl-3 font-[400]";

const TableRows = ({ item, id, final }) => {
    const {
        product,
        qty,
        price,
        bundledUnit,
        warehouse,
        bin,
        tax,
        description,
        total,
        totalWeight,
    } = item;

    const dispatch = useDispatch();

    const [edite, setEdite] = useState(false);
    const [qtyE, setQtyE] = useState(qty);

    const submitHandler = () => {
        dispatch(editeSelectedProduct({ product, qty: qtyE }));
        setEdite(false);
    };

    return (
        <TableRow
            key={id}
            className={`${
                id % 2 === 0 && "bg-[#F8F9F9]"
            }  w-full h-10 flex justify-between border-none `}
        >
            <TableCell className={`${cellStyle} w-[41px] px-3 `}>
                {id < 10 && "0"}
                {id}
            </TableCell>
            <TableCell
                className={`${cellStyle} ${final ? "w-[148px]" : "w-[408px]"}`}
            >
                {product}
            </TableCell>
            <TableCell
                className={`${cellStyle} w-[47px] ${edite && "pl-1 pt-1"}`}
            >
                {!edite ? (
                    qty
                ) : (
                    <Input
                        type="number"
                        className="w-full h-[30px] p-1 m-0"
                        min={1}
                        value={qtyE}
                        onChange={(e) => setQtyE(e.target.value)}
                    />
                )}
            </TableCell>
            <TableCell className={`${cellStyle} w-[57px]`}>{price}€</TableCell>
            <TableCell className={`${cellStyle} w-[106px]`}>
                {bundledUnit}
            </TableCell>
            <TableCell
                className={`${cellStyle}  ${final ? "w-[95px]" : "w-[109px]"}`}
            >
                {warehouse}
            </TableCell>
            <TableCell
                className={`${cellStyle}  ${final ? "w-[50px]" : "w-[66px]"} `}
            >
                {bin}
            </TableCell>
            {final && (
                <TableCell className={`${cellStyle} w-[66px]`}>
                    {totalWeight} kg
                </TableCell>
            )}
            <TableCell className={`${cellStyle} w-[86px]`}>{tax}</TableCell>
            <TableCell className={`${cellStyle} w-[97px] normal-case`}>
                {minDescrip(description) || "-"}
            </TableCell>
            <TableCell className={`${cellStyle} w-[87px]`}>
                {total.toLocaleString() + "€"}
            </TableCell>
            {!final && (
                <TableCell
                    className={`${cellStyle} w-[88px] px-3 flex justify-between items-center`}
                >
                    {!edite ? (
                        <Button
                            variant="ghost"
                            className="p-0 h-6"
                            onClick={() => setEdite(true)}
                        >
                            <TableEditeSvg />
                        </Button>
                    ) : (
                        <Button
                            variant="ghost"
                            className="p-0 h-6"
                            onClick={() => submitHandler()}
                        >
                            <SubmitSvg />
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        className="p-0 h-6"
                        onClick={() => dispatch(deleteProduct(product))}
                    >
                        <TableTrashSvg />
                    </Button>
                </TableCell>
            )}
        </TableRow>
    );
};

export default TableRows;
