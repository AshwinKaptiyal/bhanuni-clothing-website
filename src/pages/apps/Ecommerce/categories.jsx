import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FormInput } from "../../../components/";

const CategoriesEdit = () => {
  const [bannerImage, setBannerImage] = useState('');
  const { handleSubmit, register, formState: { errors } } = useForm();

  const convertFileToBase64 = (file)=> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = async (file) => {
    try {
      const base64Image = await convertFileToBase64(file);
      setBannerImage(base64Image);
    } catch (error) {
      console.error("Error uploading banner image: ", error);
    }
  };

  const onSubmit = async (data) => {
    const formData = {
      imgSrc: bannerImage,
      alt: data.alt,
      title: data.title,
      description: data.description,
      active: data.active,
    };

    try {
      const response = await fetch("http://localhost:8080/ecommerce/api/admin/products/AddBanner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("authToken"),
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Banner added/edited successfully: ", result);
        alert("Banner added successfully!");
      } else {
        console.error("Error adding/editing banner: ", result);
        alert("Error adding/editing banner");
      }
    } catch (error) {
      console.error("Error submitting banner form: ", error);
      alert("Error submitting banner form");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">Categories</h5>

                <FormInput
                  name="title"
                  label="Banner Title"
                  placeholder="e.g., Accessories Galore"
                  containerClass="mb-3"
                  register={register}
                  key="title"
                  errors={errors}
                />

                <FormInput
                  name="description"
                  label="Description"
                  placeholder="e.g., Shop through our latest selection of Fashion"
                  containerClass="mb-3"
                  register={register}
                  key="description"
                  errors={errors}
                />

                <FormInput
                  name="alt"
                  label="Image Alt Text"
                  placeholder="e.g., banner-collection"
                  containerClass="mb-3"
                  register={register}
                  key="alt"
                  errors={errors}
                />

                <Form.Group className="mb-3">
                  <Form.Label>Active</Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="Is Active"
                    {...register("active")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Banner Image</Form.Label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />
                  {bannerImage && (
                    <img src={bannerImage} alt="Banner Preview" width="200" />
                  )}
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <button type="submit" className="btn btn-success">
          Save Banner
        </button>
      </form>
    </>
  );
};

export default CategoriesEdit;
