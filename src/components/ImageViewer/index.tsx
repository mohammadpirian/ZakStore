import React, { useEffect, useState } from "react";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function ImageViewer({ imageFiles, setImageFiles, images, setImages }) {
  

  const changeHandler = (e:any) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <div className="App">
      <form className=" flex gap-4">
          <label htmlFor="file">ویرایش عکس محصول :</label>
          <input
            type="file"
            id="file"
            onChange={changeHandler}
            accept="image/png, image/jpg, image/jpeg"
            multiple
          />
      </form>
      {images.length > 0 ? (
        <div className="flex gap-2 p-4">
          {images.map((image, idx) => {
            return (
              <p key={idx}>
                {" "}
                <img src={image} className="w-32 h-32" alt="" />{" "}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default ImageViewer;
