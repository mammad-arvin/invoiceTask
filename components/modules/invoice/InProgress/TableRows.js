"use client";

import {
    deleteProduct,
    editeSelectedProduct,
} from "@/Redux/features/sectedProducts/selectedProductsSlice";
import SubmitSvg from "@/components/icons/SubmitSvg";
import TableEditeSvg from "@/components/icons/TableEditeSvg";
import TableTrashSvg from "@/components/icons/TableTrashSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";

// utility function
import { minDescrip } from "@/utility/utilityFuction";
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

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

    const [newData, setNewData] = useState({
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
    });

    const submitHandler = () => {
        dispatch(editeSelectedProduct(newData));
        setEdite(false);
    };

    const productsList = useSelector((store) => store.productsList);

    const createSelect = (key) => {
        return (
            <Select
                defaultValue={newData[key]}
                onValueChange={(value) =>
                    setNewData({ ...newData, [key]: value })
                }
            >
                <SelectTrigger className="w-full px-0 h-[16px] text-[13px] border-none">
                    <SelectValue placeholder={"select"} />
                </SelectTrigger>
                <SelectContent>
                    {productsList[key].map((item, index) => (
                        <SelectItem
                            key={index}
                            value={item}
                            className={`text-[12px] text-[#040714] p-1 `}
                        >
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
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
                className={`${cellStyle} w-[47px] ${edite && "pl-0 pt-2"}`}
            >
                {!edite ? (
                    qty
                ) : (
                    <Input
                        type="number"
                        className="w-full h-[25px] p-1 "
                        min={1}
                        value={newData.qty}
                        onChange={(e) =>
                            setNewData({ ...newData, qty: +e.target.value })
                        }
                    />
                )}
            </TableCell>
            <TableCell className={`${cellStyle} w-[57px]`}>{price}€</TableCell>
            <TableCell
                className={`${cellStyle} w-[106px] ${edite && "pl-0 pt-2"}`}
            >
                {!edite ? (
                    bundledUnit
                ) : (
                    <Input
                        type="text"
                        className="w-[95%] h-[25px] p-1 m-0"
                        value={newData.bundledUnit}
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                bundledUnit: e.target.value,
                            })
                        }
                    />
                )}
            </TableCell>
            <TableCell
                className={`${cellStyle}  ${final ? "w-[95px]" : "w-[109px]"}`}
            >
                {!edite ? warehouse : createSelect("warehouse")}
            </TableCell>
            <TableCell
                className={`${cellStyle}  ${final ? "w-[50px]" : "w-[66px]"} `}
            >
                {!edite ? bin : createSelect("bin")}
            </TableCell>
            {final && (
                <TableCell className={`${cellStyle} w-[66px]`}>
                    {totalWeight} kg
                </TableCell>
            )}
            <TableCell className={`${cellStyle} w-[86px]`}>
                {!edite ? tax : createSelect("tax")}
            </TableCell>
            <TableCell
                className={`${cellStyle} w-[97px] normal-case ${
                    edite && "pl-0 pt-2"
                }`}
            >
                {!edite ? (
                    minDescrip(description) || "-"
                ) : (
                    <Input
                        type="text"
                        className="w-full h-[25px] p-1 m-0"
                        value={newData.description}
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                description: e.target.value,
                            })
                        }
                    />
                )}
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
