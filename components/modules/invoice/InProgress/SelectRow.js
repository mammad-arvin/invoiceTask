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

// style
const textResponsiveStyle =
    "md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px]";

const SelectRow = () => {
    // list of product
    const productsList = useSelector((store) => store.productsList);

    // selected list
    const dispatch = useDispatch();

    const [selected, setSelected] = useState({});

    useEffect(() => {
        setSelected({ ...selected, total: +selected.qty * selected.price });
    }, [selected.qty]);

    // give data of product
    useEffect(() => {
        productsList.products.map((item) => {
            item.name === selected.product &&
                setSelected({
                    ...selected,
                    price: item.price,
                    weight: item.weight,
                    totalWeight: item.weight,
                    total: item.price,
                });
        });
    }, [selected.product]);

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
        setSelected({ bin: "", tax: "", warehouse: "", product: "" });
    };

    const cancelHandler = () => {
        setSelected({ bin: "", tax: "", warehouse: "", product: "" });
    };

    const createSelect = (key) => {
        return (
            <Select
                value={selected[key]}
                onValueChange={(value) =>
                    setSelected({ ...selected, [key]: value })
                }
            >
                <SelectTrigger
                    className={`w-full px-0 h-[16px] text-[13px] border-none ${textResponsiveStyle}`}
                >
                    <SelectValue placeholder={"select"} />
                </SelectTrigger>
                <SelectContent>
                    {productsList[key].map((item, index) => (
                        <SelectItem
                            key={index}
                            value={item}
                            className={`md:text-[11px] lg:text-[12px] text-[#040714] p-1 `}
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
                className={`p-0 h-[25px] ${textResponsiveStyle}`}
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
        <TableRow
            className="w-full h-[40px] md:grid md:grid-cols-12 xl:flex 2xl:grid
             justify-between items-center bg-[#F1F4FC] hover:bg-[#F1F4FC] "
        >
            <SelectTableCell className="xl:w-[41px] md:col-span-1">
                ID
            </SelectTableCell>

            <SelectTableCell className="xl:w-[408px] md:col-span-2 2xl:w-auto ">
                <Select
                    value={selected.product}
                    onValueChange={(value) =>
                        setSelected({
                            ...selected,
                            product: value,
                            qty: 1,
                        })
                    }
                >
                    <SelectTrigger
                        className={`w-full px-0 h-[16px] border-none ${textResponsiveStyle}`}
                    >
                        <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                        {productsList.products.map((product, index) => (
                            <SelectItem
                                key={index}
                                value={product.name}
                                className={`md:text-[11px] lg:text-[12px] text-[#040714] p-1 `}
                            >
                                {product.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SelectTableCell>

            <SelectTableCell className="xl:w-[47px] md:col-span-1 p-1">
                {createInput("qty")}
            </SelectTableCell>
            <SelectTableCell className="xl:w-[57px] md:col-span-1">
                {selected.price ? selected.price + " €" : "-"}
            </SelectTableCell>
            <SelectTableCell className="xl:w-[106px] md:col-span-1 p-2">
                {createInput("bundledUnit")}
            </SelectTableCell>

            <SelectTableCell className="xl:w-[109px] md:col-span-1">
                {createSelect("warehouse")}
            </SelectTableCell>

            <SelectTableCell className={` xl:w-[66px] md:col-span-1 `}>
                {createSelect("bin")}
            </SelectTableCell>
            <SelectTableCell className={` xl:w-[86px] md:col-span-1 px-3 `}>
                {createSelect("tax")}
            </SelectTableCell>

            <SelectTableCell className="xl:w-[97px] md:col-span-1 p-1">
                {createInput("description")}
            </SelectTableCell>
            <SelectTableCell className="xl:w-[87px] md:col-span-1 md:text-center lg:text-left">
                {selected.total || "-"}
            </SelectTableCell>
            <SelectTableCell
                className="xl:w-[88px] md:col-span-1 flex xl:justify-between 
                    md:justify-center md:gap-2 2xl:gap-5 items-center"
            >
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
