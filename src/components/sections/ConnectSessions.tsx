import { Box, Button } from '@mui/material';
import { useRef, useState } from 'react';
import { HoverCard } from '../HoverCard';
import { MajorSection } from '../Newsletter';

export const ConnectSessions = () => {
    const [selectedImage, setSelectedImage] = useState<Blob[]>([]);
    const fileInputRef = useRef<any>(null);

    const handleImageChange = async (e: any) => {
        const file: Blob = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const images = Array.from(selectedImage);
                images.push(event.target.result);
                setSelectedImage(images);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        // Trigger the file input click event
        fileInputRef.current.click();
    };

    const handleImageClick = () => {
        // Clear the selected image
        setSelectedImage([]);
        // Trigger the file input click event
        fileInputRef.current.click();
    };

    return (
        <Box sx={{ mb: 2, p: 2 }}>
            <MajorSection text={"Few Moments from our Connect Sessions"}></MajorSection>
            <div className="image-selector">
                {selectedImage.length > 0 ? (
                    selectedImage.map((image: any, index: number) => {
                        return <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <HoverCard content={<img key={index} style={{ maxHeight: "300px" }}
                                src={image}
                                alt="Selected"
                                onClick={handleImageClick}
                            />}></HoverCard>
                        </Box>
                    })
                ) : (
                    <></>
                )}
                <Box sx={{ mt: 2, border: '1px dashed grey' }} onClick={handleClick}>
                    <Button size='small' disableRipple>Select an image</Button>
                </Box>
            </div >
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                multiple={false}
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
        </Box >
    );

}
