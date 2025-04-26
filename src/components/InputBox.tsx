import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { FaImage, FaTimes } from "react-icons/fa";
import { cn } from "../misc/helpers";
import { useMutation } from "react-query";
import { predictPotatoState } from "../api-client";
import { InputBoxProps } from "../misc/types";

const InputBox = ({ setPotato }: InputBoxProps): React.ReactNode => {
  const [image, setImage] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation(predictPotatoState, {
    onMutate: () => setIsLoading(true),
    onSuccess: async (data) => {
      setPotato({
        class: data.class,
        confidence: data.confidence,
        image: URL.createObjectURL(image!),
      });
    },
    onError: () => console.log("Error"),
    onSettled: () => setIsLoading(false),
  });

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

  const onSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    await mutation.mutateAsync(formData);
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
                    className="close-btn p-0 rounded-circle position-absolute"
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

            {isLoading ? (
              <p className="m-0 text-dark">Loading...</p>
            ) : (
              <Button
                type="button"
                variant="primary"
                className="mt-2 mx-auto d-block rounded-pill px-4"
                disabled={!image}
                onClick={onSubmit}
              >
                Predict
              </Button>
            )}
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default InputBox;
