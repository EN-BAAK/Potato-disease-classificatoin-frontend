import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { FaImage, FaTimes } from "react-icons/fa";
import { cn } from "../misc/helpers";

const InputBox = (): React.ReactNode => {
  const [image, setImage] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files ? event.dataTransfer.files[0] : null;
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div id="input-box" className="flex-center">
      <Card
        className={cn(
          isDragOver,
          "border-success",
          "border-light",
          "p-3 flex-center border-3 rounded-3 text-center position-relative pointer"
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        <Form>
          <Form.Group>
            <div onClick={() => document.getElementById("imageInput")?.click()}>
              {image ? (
                <div className="position-relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Selected image"
                    className="rounded-3"
                  />

                  <Button
                    variant="danger"
                    className="p-0 rounded-circle position-absolute"
                    onClick={handleRemoveImage}
                  >
                    <FaTimes size={16} />
                  </Button>
                </div>
              ) : (
                <>
                  <FaImage size={50} className="text-muted" />
                  <p className="my-2">Drag/Select an image</p>
                </>
              )}
            </div>

            <Form.Control
              id="imageInput"
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default InputBox;
