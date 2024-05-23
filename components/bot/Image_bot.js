import React from 'react';

const Image_bot = ({ image, setImage, style }) => {
    const nameImage = (event) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setImage(selectedFile);
        }
    };

    return (
        <div className={`${style.d_flex_column}`}>
            <label>Image de profil du bot :</label>
            <input type="file" onChange={nameImage} />
        </div>
    );
};

export default Image_bot;
