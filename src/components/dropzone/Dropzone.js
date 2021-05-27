import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";
import Clip from "../../assets/images/clip.svg";

function Dropzone(props) {
  const [image, setImage] = useState("");
  const [onImage, setOnImage] = useState(false);
  const [progress, setProgress] = useState("");
  const [progressActive, setProgressActive] = useState(true);

  /* const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onerror = function (e) {};
      reader.onprogress = function (e) {
        setProgress(e.loaded);
      };
      reader.onload = function (e) {
        setImage(e.target.result);
        setOnImage(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const recibeImagen = (image) => {
    setImage(image);
  };
 */

  useEffect(() => {
    const recibeImagen = () => {
      props.callback(image);
    };
    recibeImagen();
  }, [image, props]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((e) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onprogress = (e) =>
        setProgress(Math.round((e.loaded * 100) / e.total));
      setProgressActive(true);
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = (e) => {
        setProgressActive(false);
        setImage(e.target.result);
        setOnImage(true);
      };
      reader.readAsDataURL(e);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(progress);
  return (
    <div
      className={`dropzone ${isDragActive && "dropzone__drag"} ${
        progressActive && "dropzone__onProgress"
      }`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {progressActive ? (
        <progress className="dropzone__bar" value={progress} max="100">
          <h1>{progress}</h1>
        </progress>
      ) : !onImage ? (
        <div className="dropzone__inBox">
          <img src={Clip} alt="placeholder" class="modal__clip" />
          <p className="dropzone__boxText">
            <p className="dropzone__boxTextBold">Agregar archivo</p>o
            arrastrarlo y soltarlo aquí
          </p>
        </div>
      ) : (
        <div className="modal__inBoxOn">
          <p className="modal__boxText">
            !Tu imagen a sido cargada{" "}
            <p className="modal__boxTextBold marginLeft"> exitosamente!</p>
          </p>
        </div>
      )}
      {/*!onImage ? (
        
      ) : (
       
      )*/}
    </div>
  );
}

export default Dropzone;
