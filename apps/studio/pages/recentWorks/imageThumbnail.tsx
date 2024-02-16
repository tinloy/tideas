import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function ImageThumbnail(props: {
    thumbnailSrc: StaticImageData;
    alt: string;
    openBackdrop(src: StaticImageData): void;
}) {
    return (
        <Box
            component={"div"}
            className='image-frame'
            onClick={() => {
                props.openBackdrop(props.thumbnailSrc);
            }}
        >
            <Image src={props.thumbnailSrc} alt={props.alt} className='image-thumbnail'></Image>
        </Box>
    );
}
