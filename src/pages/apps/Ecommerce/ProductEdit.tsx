import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { FormInput } from "../../../components/";

interface Color {
  name: string;
  colorClass: string;
  imgSrc: string;
}

const ProductEdit = () => {
  const [colors, setColors] = useState<Color[]>([{ name: "", colorClass: "", imgSrc: "" }]);
  const [sizes, setSizes] = useState<string[]>(["S", "M", "L", "XL"]);
  const [media, setMedia] = useState('');
  const [collections, setCollections] = useState<string[]>(["Summer Collection", "Winter Collection"]);
  const [tags, setTags] = useState<string[]>(["mini dress", "maxi", "suit", "skirt"]); // Example tags
  const { handleSubmit, register, formState: { errors } } = useForm();

  const addColor = () => {
    setColors([...colors, { name: "", colorClass: "", imgSrc: "" }]);
  };

  const removeColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleColorChange = (index: number, field: keyof Color, value: string) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? { ...color, [field]: value } : color
    );
    setColors(updatedColors);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadImage = async (index: number, file: File) => {debugger
    try {
      const base64Image = await convertFileToBase64(file);
      const fileName = file.name;

      const response = await fetch("http://localhost:8080/ecommerce/api/admin/products/uploadImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer "+localStorage.getItem('authToken')
        },
        body: JSON.stringify({ base64Image, fileName }),
      });

      const data = await response.json();

      if (response.ok) {
        handleColorChange(index, "imgSrc", data.imageUrl.replace('C:/apache-tomcat-9.0.96/webapps/ROOT\\','http://localhost:8080/'));
        var arr = []
        arr.push(data.imageUrl.replace('C:/apache-tomcat-9.0.96/webapps/ROOT\\','http://localhost:8080/'))
        setMedia(String(arr))
      } else {
        console.error("Image upload failed: ", data);
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const handleColorImageChange = (index: number, file: File) => {
    uploadImage(index, file);
  };

  const onSubmit = async (data: any) => {debugger
    const formData = {
      title: data.title,
      status: "Available",
      description: data.description,
      media:  media,
      category: "Dress",
      publishing: data.publishing,
      insights: "Top-rated for quality and comfort.",
      productType: "Clothings",
      discount_price: data.discount_price,
      price: data.price,
      vendor: data.vendor,
      collections:JSON.stringify( data.collections) ,
      tags: JSON.stringify(data.tags),
      quantity: data.quantity,
      size: JSON.stringify(data.sizes),
      fitDetails: "Adjustable headband for a comfortable fit.",
      shipping: "Free standard shipping within 5-7 business days.",
      color: JSON.stringify(colors),
    };
  
    try {
      const response = await fetch("http://localhost:8080/ecommerce/api/admin/products/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("authToken"),
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log("Product added successfully: ", result);
        alert("Product added successfully: ")
      } else {
        console.error("Error adding product: ", result);
        alert("Error adding product: ")

      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form:  ")

    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">
                  General Information
                </h5>
                <FormInput
                  name="title"
                  label="Product Title"
                  placeholder="e.g: Wireless Bluetooth Headphones"
                  containerClass={"mb-3"}
                  register={register}
                  key="title"
                  errors={errors}
                />

                <FormInput
                  name="description"
                  label="Product Description"
                  placeholder="Enter product description"
                  containerClass={"mb-3"}
                  register={register}
                  key="description"
                  errors={errors}
                />

                <FormInput
                  name="price"
                  label="Price"
                  placeholder="Enter price"
                  containerClass={"mb-3"}
                  register={register}
                  key="price"
                  errors={errors}
                />

                <FormInput
                  name="discount_price"
                  label="Discount Price"
                  placeholder="Enter discount price"
                  containerClass={"mb-3"}
                  register={register}
                  key="discount_price"
                  errors={errors}
                />

                <FormInput
                  name="vendor"
                  label="Vendor"
                  placeholder="e.g: SoundWave Inc."
                  containerClass={"mb-3"}
                  register={register}
                  key="vendor"
                  errors={errors}
                />

                <FormInput
                  name="publishing"
                  label="Publishing Date"
                  placeholder="2024-04-15"
                  containerClass={"mb-3"}
                  register={register}
                  key="publishing"
                  errors={errors}
                />

                <FormInput
                  name="quantity"
                  label="Quantity"
                  placeholder="Enter available quantity"
                  containerClass={"mb-3"}
                  register={register}
                  key="quantity"
                  errors={errors}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            {/* <Card>
              <Card.Body>
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">Product Images</h5>
                <FormInput
                  name="media"
                  label="Media URLs"
                  placeholder="Enter image URLs separated by commas"
                  containerClass={"mb-3"}
                  register={register}
                  key="media"
                  errors={errors}
                />
              </Card.Body>
            </Card> */}

            <Card>
              <Card.Body>
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">Sizes, Collections, and Tags</h5>

                {/* Size Dropdown */}
                <Form.Group className="mb-3">
                  <Form.Label>Sizes</Form.Label>
                  <Select
                    isMulti
                    name="sizes"
                    options={sizes.map(size => ({ label: size, value: size }))}
                  />
                </Form.Group>

                {/* Collection Dropdown */}
                <Form.Group className="mb-3">
                  <Form.Label>Collections</Form.Label>
                  <Select
                    isMulti
                    name="collections"
                    options={collections.map(collection => ({ label: collection, value: collection }))}
                  />
                </Form.Group>

                {/* Tags Dropdown */}
                <Form.Group className="mb-3">
                  <Form.Label>Tags</Form.Label>
                  <Select
                    isMulti
                    name="tags"
                    options={tags.map(tag => ({ label: tag, value: tag }))}
                  />
                </Form.Group>

                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">Colors</h5>

                {/* Dynamic Color and Image Upload */}
                {colors.map((color, index) => (
                  <div key={index} className="mb-3">
                    <FormInput
                      name={`colors[${index}].name`}
                      label="Color Name"
                      placeholder="e.g : Black"
                      containerClass={"mb-2"}
                      value={color.name}
                      onChange={(e) => handleColorChange(index, "name", e.target.value)}
                    />
                    <FormInput
                      name={`colors[${index}].colorClass`}
                      label="Color Class"
                      placeholder="e.g : bg_black"
                      containerClass={"mb-2"}
                      value={color.colorClass}
                      onChange={(e) => handleColorChange(index, "colorClass", e.target.value)}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleColorImageChange(index, e.target.files[0]);
                        }
                      }}
                    />
                    {color.imgSrc && (
                      <img src={color.imgSrc} alt="Color Preview" width="100" />
                    )}
                    <button type="button" onClick={() => removeColor(index)} className="btn btn-danger">
                      Remove Image
                    </button>
                  </div>
                ))}

                <button type="button" onClick={addColor} className="btn btn-secondary">
                  + Add Image
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <button type="submit" className="btn btn-success">
          Save Product
        </button>
      </form>
    </>
  );
};

export default ProductEdit;
