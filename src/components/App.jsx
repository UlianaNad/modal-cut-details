import React from "react";
import Modal from "./Modal/Modal";
import { products } from "./data/data";
import { useState } from "react";
import { AppWrapper, Item, StyledUl } from "./App.styled";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  const toggleModal = (product) => {
    const body = document.body;
    if (!isOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
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
      {isOpen ? <Modal close={toggleModal} product={product} /> : null}
    </AppWrapper>
  );
};
