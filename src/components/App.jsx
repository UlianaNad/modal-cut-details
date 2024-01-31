import React, { useEffect } from "react";
import Modal from "./Modal/Modal";
import styled from "styled-components";
import { products } from "./data/data";
import { useState } from "react";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [countDetails, setCountDetails] = useState(1);
  const [details, setDetails] = useState([]);

  const toggleModal = (product) => {
    const body = document.body;
    if (!isOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
      setDetails([]);
    }

    setIsOpen((prev) => !prev);
    setProduct(product);
  };

  return (
    <AppWrapper>
      <StyledUl>
        {products.map((product) => (
          <Item onClick={() => toggleModal(product)} key={product.id}>
            {product.name}
            <br />
            <img src={product.image} alt={product.name} />
          </Item>
        ))}
      </StyledUl>
      {isOpen ? (
        <Modal
          countDetails={countDetails}
          setCountDetails={setCountDetails}
          close={toggleModal}
          product={product}
          details={details}
          setDetails={setDetails}
        />
      ) : null}
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 15px;
`;

const Item = styled.li`
  display: block;
  padding: 10px;
  border: 1px solid green;
  border-radius: 10px;
  margin: 5px;
  list-style: none;
  width: 250px;
`;
