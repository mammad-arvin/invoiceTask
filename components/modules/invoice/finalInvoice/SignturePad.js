import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

import SignatureCanvas from "react-signature-canvas";

const SignturePad = ({ children, setUrl }) => {
    const [sign, setSign] = useState();

    const saveHandler = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    };
    const clearHandler = () => {
        sign.clear();
        setUrl("");
    };

    return (
        <Dialog>
            <DialogTrigger className="w-[439px] h-[49px] flex justify-center items-center gap-2 text-[14px] font-[510] rounded-[8px] text-white bg-[#2E5BFF] hover:bg-blue-500">
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col gap-4">
                    <DialogTitle className="flex justify-center">
                        <SignatureCanvas
                            ref={(data) => setSign(data)}
                            canvasProps={{
                                width: 400,
                                height: 200,
                                className:
                                    "sigCanvas border-2 border-[#1f1f1e]",
                            }}
                        />
                    </DialogTitle>
                    <DialogDescription className="flex justify-center gap-12">
                        <Button
                            onClick={clearHandler}
                            variant="outlined"
                            className=" text-black"
                        >
                            Clear
                        </Button>
                        <DialogClose
                            onClick={saveHandler}
                            className="px-3 text-black"
                        >
                            Save
                        </DialogClose>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default SignturePad;
