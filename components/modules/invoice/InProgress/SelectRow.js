"use client";

// ui
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { SelectTableCell, TableRow } from "@/components/ui/table";

// redux
import { useDispatch, useSelector } from "react-redux";
import SubmitSvg from "@/components/icons/SubmitSvg";
import CancelSvg from "@/components/icons/CancelSvg";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { submitSelect } from "@/Redux/features/sectedProducts/inProgressSlice";
import { Input } from "@/components/ui/input";

const SelectRow = () => {
    // list of product
    const productsList = useSelector((store) => store.productsList);

    // selected list
    const dispatch = useDispatch();

    const [selected, setSelected] = useState({});

    useEffect(() => {
        setSelected({ ...selected, total: +selected.qty * selected.price });
    }, [selected.qty]);

    const disalbleBtns =
        selected.product &&
        selected.qty &&
        selected.price &&
        selected.bundledUnit &&
        selected.warehouse &&
        selected.bin &&
        selected.tax
            ? true
            : false;

    const submitHandler = () => {
        dispatch(submitSelect(selected));
        setSelected({ ...selected, product: "" });
    };

    const cancelHandler = () => {
        setSelected({});
    };

    const createSelect = (key) => {
        return (
            <Select
                defaultValue={selected[key]}
                onValueChange={(value) =>
                    setSelected({ ...selected, [key]: value })
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

    const createInput = (text) => {
        return (
            <Input
                type={text === "qty" ? "number" : "text"}
                min={text === "qty" ? 1 : ""}
                className="p-0 h-[25px]"
                value={selected[text] || ""}
                onChange={(e) =>
                    text === "qty"
                        ? setSelected({ ...selected, [text]: +e.target.value })
                        : setSelected({ ...selected, [text]: e.target.value })
                }
            />
        );
    };

    return (
        <TableRow className="w-full h-[40px] flex justify-between items-center bg-[#F1F4FC] hover:bg-[#F1F4FC] ">
            <SelectTableCell className="w-[41px]">ID</SelectTableCell>

            <SelectTableCell className="w-[408px]">
                <Select
                    defaultValue={selected.product}
                    onValueChange={(value) =>
                        setSelected({
                            ...selected,
                            product: value.name,
                            qty: 1,
                            price: value.price,
                            weight: 3,
                            totalWeight: 3,
                            total: value.price,
                        })
                    }
                >
                    <SelectTrigger className="w-full px-0 h-[16px] text-[13px] border-none">
                        <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                        {productsList.products.map((product, index) => (
                            <SelectItem
                                key={index}
                                value={product}
                                className={`text-[12px] text-[#040714] p-1 `}
                            >
                                {product.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SelectTableCell>

            <SelectTableCell className="w-[47px] p-1">
                {createInput("qty")}
            </SelectTableCell>
            <SelectTableCell className="w-[57px]">
                {selected.price ? selected.price + " €" : "-"}
            </SelectTableCell>
            <SelectTableCell className="w-[106px] p-2">
                {createInput("bundledUnit")}
            </SelectTableCell>

            <SelectTableCell className="w-[109px]">
                {createSelect("warehouse")}
            </SelectTableCell>

            <SelectTableCell className={` w-[66px]`}>
                {createSelect("bin")}
            </SelectTableCell>
            <SelectTableCell className={` w-[86px] px-3 `}>
                {createSelect("tax")}
            </SelectTableCell>

            <SelectTableCell className="w-[97px] p-1">
                {createInput("description")}
            </SelectTableCell>
            <SelectTableCell className="w-[87px]">
                {selected.total || "-"}
            </SelectTableCell>
            <SelectTableCell className="w-[88px] flex justify-between items-center">
                <Button
                    variant="ghost"
                    disabled={!disalbleBtns}
                    className="p-0 h-6"
                    onClick={() => submitHandler()}
                >
                    <SubmitSvg />
                </Button>
                <Button
                    variant="ghost"
                    className="p-0 h-6"
                    onClick={() => cancelHandler()}
                >
                    <CancelSvg />
                </Button>
            </SelectTableCell>
        </TableRow>
    );
};

export default SelectRow;
