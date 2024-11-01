import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Form } from "react-bootstrap"; // Add Form for file input
import axios from "axios";
import { Modal } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";

// Define ProductItemTypes interface
interface ProductItemTypes {
  id: number;
  title: string;
  status: string;
  description: string;
  media: string;
  category: string;
  publishing: string | null;
  insights: string;
  productType: string;
  vendor: string;
  discount_price: string;
  price: string;
  collections: string | null;
  tags: string | null;
  quantity: number;
  color: any;
  size: string | null;
  fitDetails: string;
  shipping: string;
}

const Products = () => {
  const [products, setProducts] = useState<ProductItemTypes[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false); // State for bulk upload modal
  const [selectedProductColors, setSelectedProductColors] = useState([]);
  const [file, setFile] = useState<File | null>(null); // Store the selected file

  const navigate = useNavigate();

  const openModal = (colors: any) => {
    setSelectedProductColors(colors);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openBulkUploadModal = () => {
    setShowBulkUploadModal(true);
  };

  const closeBulkUploadModal = () => {
    setShowBulkUploadModal(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleBulkUploadSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/ecommerce/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Bulk upload successful!");
      closeBulkUploadModal();
    } catch (error) {
      console.error("Error during bulk upload:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/ecommerce/user/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        const fetchedProducts = data.map((product: any) => ({
          ...product,
          color: JSON.parse(product.color),
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const searchProduct = (value: string) => {
    if (value === "") setProducts(products);
    else {
      const modifiedProducts = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(modifiedProducts);
    }
  };

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/products" },
          { label: "Products", path: "/apps/ecommerce", active: true },
        ]}
        title={"Products"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="justify-content-between">
                <Col className="col-auto">
                  <form className="d-flex flex-wrap align-items-center">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                      Search
                    </label>
                    <div className="me-3">
                      <input
                        type="search"
                        className="form-control my-1 my-lg-0"
                        id="inputPassword2"
                        placeholder="Search..."
                        onChange={(e: any) => searchProduct(e.target.value)}
                      />
                    </div>
                    <label htmlFor="status-select" className="me-2">
                      Sort By
                    </label>
                    <div className="me-sm-3">
                      <select
                        className="form-select my-1 my-lg-0"
                        id="status-select"
                      >
                        <option defaultValue="all">All</option>
                        <option value="popular">Popular</option>
                        <option value="pricelow">Price Low</option>
                        <option value="pricehigh">Price High</option>
                        <option value="soldout">Sold Out</option>
                      </select>y
                    </div>
                  </form>
                </Col>

                <Col className="col-auto">
                  <div className="text-lg-end my-1 my-lg-0">
                    <Button
                      className="btn btn-success waves-effect waves-light me-1"
                      onClick={openBulkUploadModal}
                    >
                      <i className="mdi mdi-upload"></i> Bulk Upload
                    </Button>

                    <Button
                      className="btn btn-danger waves-effect waves-light"
                      onClick={() => navigate("/apps/ecommerce/edit-product")}
                    >
                      <i className="mdi mdi-plus-circle me-1"></i> Add New
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bulk Upload Modal */}
      <Modal show={showBulkUploadModal} onHide={closeBulkUploadModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bulk Upload Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Excel file (.xlsx)</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeBulkUploadModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBulkUploadSubmit}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Product Images Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {selectedProductColors.map((color: any, index) => (
              <Col key={index} md={4} className="mb-3">
                <img
                  src={color.imgSrc}
                  alt={color.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      {/* Render products */}
      <Row>
        {(products || []).map((product, index) => {
          return (
            <Col key={index} md={6} xl={3}>
              <Card className="product-box">
                <Card.Body>
                  <div className="product-action">
                    <Link to="#" className="btn btn-success btn-xs waves-effect waves-light me-1">
                      <i className="mdi mdi-eye" onClick={() => openModal(product.color)}></i>
                    </Link>
                  </div>
                  <div className="bg-light">
                    <img src={product.color[0].imgSrc} alt="" className="img-fluid" />
                  </div>
                  <div className="product-info">
                    <div className="row align-items-center">
                      <div className="col">
                        <h5 className="font-16 mt-0 sp-line-1">
                          <Link to="/apps/ecommerce/product-details" className="text-dark">
                            {product.title}
                          </Link>
                        </h5>
                        <div className="text-warning mb-2 font-13">
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <h5 className="m-0">
                          <span className="text-muted">
                            Stocks: {product.quantity} pcs
                          </span>
                        </h5>
                      </div>
                      <div className="col-auto">
                        <div className="product-price-tag">
                          ₹{product.discount_price}{" "}
                          <small className="text-muted">
                            <del>₹{product.price}</del>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col>
          <ul className="pagination pagination-rounded justify-content-end mb-3">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="visually-hidden">Previous</span>
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="visually-hidden">Next</span>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Products;
