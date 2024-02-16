"use client";

import { useRef, useState } from "react";
import classes from "../../styles/imagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const imageInput = useRef();
    const [image, setImage] = useState(null);

    const handleClick = () => {
        imageInput.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!image ? (
                        <p>No image picked yet.</p>
                    ) : (
                        <Image
                            src={image}
                            alt="The image selected by user"
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handleClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
