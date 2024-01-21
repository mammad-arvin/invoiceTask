import PluseCycleSvg from "@/components/icons/PluseCycleSvg";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { addNewProduct } from "@/Redux/features/productsList/productsListSlice";

const CreateProductModal = ({ setAddedNew, addedNew }) => {
    const dispatch = useDispatch();

    const [createdProduct, setCreatedProduct] = useState({
        product: [{ name: "", price: "" }],
        warehouse: "",
        bin: "",
        tax: "",
    });
    const { tax, bin, warehouse, product } = createdProduct;

    const changeHandler = (e) => {
        if (e.target.id === "name") {
            setCreatedProduct({
                ...createdProduct,
                product: [
                    { ...createdProduct.product[0], name: e.target.value },
                ],
            });
        } else if (e.target.id === "price") {
            setCreatedProduct({
                ...createdProduct,
                product: [
                    { ...createdProduct.product[0], price: +e.target.value },
                ],
            });
        } else {
            setCreatedProduct({
                ...createdProduct,
                [e.target.id]: e.target.value,
            });
        }
    };

    const createHandler = () => {
        dispatch(addNewProduct(createdProduct));
        setAddedNew(!addedNew);
    };

    const createInput = (text) => {
        const joined = text.split(" ").join("");
        return (
            <>
                <Label className="capitalize" htmlFor={joined}>
                    {text}
                </Label>
                <Input
                    type="text"
                    maxLength={20}
                    id={joined}
                    value={createdProduct[joined]}
                    onChange={changeHandler}
                />
            </>
        );
    };

    const disableBtn =
        tax && bin && warehouse && product[0].name && product[0].price
            ? false
            : true;

    return (
        <Dialog>
            <DialogTrigger className="flex justify-center items-center gap-1 text-[13px] text-[#2E5BFF] font-[510] leading-[15.51px] pr-2 ">
                <PluseCycleSvg /> Create New Product
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-2 text-center">
                        Enter your data
                    </DialogTitle>

                    <div className=" flex flex-col gap-2">
                        <div>
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                                type="text"
                                value={product[0].name}
                                onChange={changeHandler}
                                maxLength={30}
                                id="name"
                            />
                        </div>

                        <div>
                            <Label htmlFor="price">Price</Label>
                            <Input
                                type="number"
                                id="price"
                                value={product[0].price}
                                onChange={changeHandler}
                            />
                        </div>

                        <div>{createInput("warehouse")}</div>

                        <div>{createInput("bin")}</div>

                        <div>{createInput("tax")}</div>
                        <Button disabled={disableBtn} onClick={createHandler}>
                            Create
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateProductModal;
