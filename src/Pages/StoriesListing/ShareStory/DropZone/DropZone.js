import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
function Dropzone1({ open }) {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onload = (e) => {
        setImages((prevState) => [...prevState, e.target.result]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
    });
  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1.5px #414141 dashed",
          width: "100%",
          margin: "auto",
        }}
      >
        <input className="input-zone" {...getInputProps()} />

        <div className="text-center">
          <HiOutlinePlus
            size={35}
            style={{ color: "#414141", fontWeight: "600" }}
          />

          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p className="dropzone-content" style={{ color: "#414141" }}>
              Drag and Drop pictures here
            </p>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "row",
          padding: "12px",
        }}
      >
        {images.map((imgsrc) => {
          return (
            <>
              <img
                style={{ width: "70px", height: "70px" }}
                src={imgsrc}
                alt="imaage"
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Dropzone1;
