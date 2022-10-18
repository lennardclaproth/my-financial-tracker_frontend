import { StaticImageData } from "next/image";
import { ChangeEvent } from "react";

interface OptionTemplate {
    name:string;
    image: StaticImageData;
    height: number;
    width: number;
    alt: string;
    fileHandler: any
}

interface ImportOptionsProps {
    options: OptionTemplate[]
    handleClick: (clickedItem:OptionTemplate) => void
}

interface FileUploadProps {
    selectedOption: OptionTemplate
    handleUpload: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}


export type {OptionTemplate, ImportOptionsProps, FileUploadProps}