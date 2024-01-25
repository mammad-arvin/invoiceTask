import PluseCycleSvg from "@/components/icons/PluseCycleSvg";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// redux
import { useDispatch } from "react-redux";

// toster
import { useToast } from "@/components/ui/use-toast";
import { addNewItem } from "@/Redux/features/basicInfoInitialValue/basicInfoInitialValueSlice";

const AddBasicItemModal = ({ itemKey, addedNew, setAddedNew }) => {
    const dispatch = useDispatch();
    const { toast } = useToast();

    const [item, setItem] = useState("");

    const createHandler = () => {
        dispatch(addNewItem({ item, itemKey }));
        setAddedNew(!addedNew);
        setItem();

        toast({
            className: "bg-[#A8DF8E]",
            title: "Item Created",
            description: "Now you can select Item from list",
        });
    };

    const changeHandler = (e) => {
        if (
            itemKey === "marketer" ||
            itemKey === "discount" ||
            itemKey === "marketerShare"
        ) {
            setItem(+e.target.value);
        } else {
            setItem(e.target.value);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger className="w-full flex justify-start items-center gap-1 text-[13px] text-[#2E5BFF] font-[510] leading-[15.51px] pl-1.5 py-2 ">
                    <PluseCycleSvg /> Create New
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-2 text-center">
                            Enter value
                        </DialogTitle>

                        <div className=" flex flex-col gap-2">
                            <div>
                                <Input
                                    type={
                                        itemKey === "marketer" ||
                                        itemKey === "discount" ||
                                        itemKey === "marketerShare"
                                            ? "number"
                                            : "text"
                                    }
                                    min={
                                        itemKey === "marketer" ||
                                        itemKey === "discount" ||
                                        itemKey === "marketerShare"
                                            ? 1
                                            : ""
                                    }
                                    value={item || ""}
                                    onChange={changeHandler}
                                    maxLength={20}
                                />
                            </div>

                            <DialogClose
                                onClick={createHandler}
                                disabled={!item}
                                className=" m-0-auto mt-2 p-1 rounded-lg bg-[#7D7C7C]"
                            >
                                Create
                            </DialogClose>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddBasicItemModal;
