import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";
import Clip from "../../assets/images/clip.svg";

function Dropzone(props) {
  const [image, setImage] = useState("");
  const [onImage, setOnImage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressActive, setProgressActive] = useState(false);
  const [onError, setOnError] = useState(false);

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
      reader.onerror = () => setOnError(true);
      reader.onload = (e) => {
        setProgressActive(false);
        setImage(e.target.result);
        setOnImage(true);
      };
      reader.readAsDataURL(e);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className={`dropzone  ${progressActive && "dropzone__onProgress"} ${
        onError && "dropzone__onProgress"
      } ${onImage && "dropzone__onProgress"}`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {progressActive ? (
        <div className="dropzone__content">
          <h3 className="dropzone__barTextProgress">Cargando %{progress}</h3>
          <div className="dropzone__bar">
            <div
              style={{ width: `${progress}%`, backgroundColor: "#7ed321" }}
              className="dropzone__bar"
            />
          </div>
          <h3 className="dropzone__barTextCancel">CANCELAR</h3>
        </div>
      ) : onError ? (
        <div className="dropzone__content">
          <h3 className="dropzone__barTextProgress">
            <strong>Error!</strong> No se pudo cargar la película
          </h3>
          <div className="dropzone__bar">
            <div
              style={{ width: "100%", backgroundColor: "#ff0000" }}
              className="dropzone__bar"
            />
          </div>
          <h3 className="dropzone__barTextCancel">
            <strong>REINTENTAR</strong>
          </h3>
        </div>
      ) : onImage ? (
        <div className="dropzone__content">
          <h3 className="dropzone__barTextProgress bold">100% Cargado</h3>
          <div className="dropzone__bar center">
            <div
              style={{ width: "100%", backgroundColor: "#7ed321" }}
              className="dropzone__bar"
            />
          </div>
        </div>
      ) : (
        <div className="dropzone__inBox">
          <img src={Clip} alt="placeholder" class="dropzone__boxClip" />
          <p className="dropzone__boxText">
            <p className="dropzone__boxTextBold">Agregar archivo</p>o
            arrastrarlo y soltarlo aquí
          </p>
        </div>
      )}
    </div>
  );
}

export default Dropzone;
