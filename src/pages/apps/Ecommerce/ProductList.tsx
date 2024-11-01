import React, { useEffect, useState } from "react";
import axios from "axios";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";
const instance = axios.create({
    baseURL: 'https://bhanuni.com/admin/api/2021-07',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': '4c06d924830b2e7268b189b4ec47fe33'
    }
  });
const SHOPIFY_API_ENDPOINT =
  "https://bhanuni.com/api/2023-01/graphql.json";
const SHOPIFY_API_TOKEN = "8246fef8bb7523f4548d4500afdf2e87"; // Get this from Shopify
const client = createStorefrontApiClient({
  storeDomain: "http://bhanuni.com",
  apiVersion: "2023-10",
  publicAccessToken: "8246fef8bb7523f4548d4500afdf2e87",
});
const fetchProducts = async () => {
  const query = `
    {
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                    variants(first: 1) {
                        edges {
                            node {
                                price
                            }
                        }
                    }
                }
            }
        }
    }`;

  try {
    const response = await axios({
      url: SHOPIFY_API_ENDPOINT,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": SHOPIFY_API_TOKEN,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ query }),
    });
    return response.data.data.products.edges;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setProducts(products);
    //   const productQuery = `
    //   {
    //       products(first: 10) {
    //           edges {
    //               node {
    //                   id
    //                   title
    //                   description
    //                   images(first: 1) {
    //                       edges {
    //                           node {
    //                               originalSrc
    //                           }
    //                       }
    //                   }
    //                   variants(first: 1) {
    //                       edges {
    //                           node {
    //                               price
    //                           }
    //                       }
    //                   }
    //               }
    //           }
    //       }
    //   }`;
    const productQuery = `
    query ProductQuery($handle: String) {
      product(handle: $handle) {
        id
        title
        handle
      }
    }
  `;
      const { data, errors, extensions } = await client.request(productQuery, {
        variables: {
          handle: "sample-product",
        },
      });

      try {
        const response = await instance.get('/products.json');
        return response.data.products;
      } catch (error) {
        console.error('Error fetching products', error);
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.node.id}>
            <h2>{product.node.title}</h2>
            <p>{product.node.description}</p>
            <img
              src={product.node.images.edges[0].node.originalSrc}
              alt={product.node.title}
            />
            <p>Price: ${product.node.variants.edges[0].node.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
