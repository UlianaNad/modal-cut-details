import React, { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import {
  Example,
  ExampleItem,
  HiddenOnPhone,
  LeftArrow,
  ModalButton,
  StyledItemName,
  StyledOption,
  StyledSpan,
  TopArrow,
  WrapInfo,
} from "./ChosenItem.styled";
import VisualModal from "./VisualModal/VisualModal";
import ExampleComponent from "./Example/ExampleComponent";

const ChosenItem = ({
  product,
  width,
  height,
  edgeSide,
  edgeWidth,
  computedValues,
  language,
}) => {
  const [scale, setScale] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { ref: myRef, inView: myElIsVisible } = useInView();
  const [memorized, setMemorized] = useState({});

  useEffect(() => {
    let scaleToFit;

    if (width < 500 && height < 500) {
      scaleToFit = 0.6;
    } else if (width >= 500 && width < 1600 && height >= 500 && height < 1600) {
      scaleToFit = 0.4;
    } else if (
      (width >= 1600 || width < 2700) &&
      (height >= 1600 || height < 2700)
    ) {
      scaleToFit = 0.3;
    }

    setScale(scaleToFit);
  }, [width, height]);

  const toggleModal = () => {
    const section = document.querySelector("section");
    if (!isOpen) {
      section.classList.add("modal-open");
    } else {
      section.classList.remove("modal-open");
    }
    setMemorized({
      width: width,
      height: height,
      scale: scale,
      edgeSide: edgeSide,
    });

    setIsOpen((prev) => !prev);
  };
  return (
    <section>
      <StyledItemName></StyledItemName>

      <WrapInfo>
        <StyledOption>
          {language === "ua" ? "Розмір товару:" : "Розмeр товара:"}
        </StyledOption>
        <StyledSpan>
          {language === "ua" ? "ширина " : "ширина "}
          {product.dimensions.width} мм
          {language === "ua" ? " і висота " : "и высота "}
          {product.dimensions.height} мм
        </StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>
          {language === "ua" ? "Товщина листа:" : "Толщина листа:"}
        </StyledOption>
        <StyledSpan>{product.dimensions.thickness} мм</StyledSpan>
      </WrapInfo>
      <WrapInfo>
        <StyledOption>
          {language === "ua"
            ? "Кількість листів у розкрої:"
            : "Количество листов в разкрое:"}
        </StyledOption>
        <StyledSpan>
          {computedValues.possibleAmountOfPieces
            ? computedValues.possibleAmountOfPieces
            : 0}{" "}
          шт.
        </StyledSpan>
      </WrapInfo>
      <WrapInfo>
        <StyledOption>
          {language === "ua" ? "Ціна за 1 лист: " : "Цена за 1 лист: "}
        </StyledOption>
        <StyledSpan>
          {" "}
          {product.offers.price} {product.offers.priceCurrency}
        </StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>
          {language === "ua"
            ? "Загальна вартість листів для порізки: "
            : "Общее стоимость листов для порезки:"}
        </StyledOption>
        <StyledSpan>
          {computedValues.totalPrice ? computedValues.totalPrice : 0} грн.
        </StyledSpan>
      </WrapInfo>
      {edgeWidth ? (
        <WrapInfo>
          <StyledOption>
            {language === "ua" ? "Товщина кромки:" : "Толщина кромки:"}
          </StyledOption>
          <StyledSpan>{edgeWidth ? edgeWidth : 0}</StyledSpan>
        </WrapInfo>
      ) : null}

      <HiddenOnPhone ref={myRef}>
        <StyledItemName>
          {language === "ua" ? "Візуалізація порізки" : "Визуализация порезки"}
        </StyledItemName>
        <ExampleComponent
          width={width}
          height={height}
          scale={scale}
          edgeSide={edgeSide}
        />
      </HiddenOnPhone>
      {!myElIsVisible && (
        <ModalButton onClick={toggleModal}>
          {language === "ua" ? "Візуалізація порізки" : "Визуализация порезки"}
        </ModalButton>
      )}
      {isOpen ? <VisualModal memorized={memorized} /> : null}
    </section>
  );
};

export default ChosenItem;
