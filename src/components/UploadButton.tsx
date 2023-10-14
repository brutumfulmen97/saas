"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

const UploadButton = ({ isSubscribed }: { isSubscribed: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(v) => {
                if (!v) {
                    setIsOpen(v);
                }
            }}
        >
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                <UploadDropzone isSubscribed={isSubscribed} />
            </DialogContent>
        </Dialog>
    );
};

function UploadDropzone({ isSubscribed }: { isSubscribed: boolean }) {
    return <div>123</div>;
}

export default UploadButton;
