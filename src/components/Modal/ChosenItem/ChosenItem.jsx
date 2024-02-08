import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  HiddenOnPhone,
  ModalButton,
  StyledItemName,
  StyledOption,
  StyledSpan,
  WrapInfo,
} from "./ChosenItem.styled";
import VisualModal from "./VisualModal/VisualModal";
import ExampleComponent from "./Example/ExampleComponent";
import { useTranslation } from "react-i18next";
const ChosenItem = ({
  product,
  width,
  detail,
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
  const { t } = useTranslation("chosenItem");

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
        <StyledOption>{t("name")}</StyledOption>
        <StyledSpan>
          {t("width")}
          {product.dimensions.width} мм
          {t("height")}
          {product.dimensions.height} мм
        </StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>{t("thickness")}</StyledOption>
        <StyledSpan>{product.dimensions.thickness} мм</StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>{t("price1")}</StyledOption>
        <StyledSpan>
          {" "}
          {product.offers.price} {product.offers.priceCurrency}
        </StyledSpan>
      </WrapInfo>
      <WrapInfo>
        <StyledOption>{t("possibleAmountOfPieces")}</StyledOption>
        <StyledSpan>
          {computedValues.possibleAmountOfPieces
            ? computedValues.possibleAmountOfPieces
            : 0}{" "}
          шт.
        </StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>{t("totalPrice")}</StyledOption>
        <StyledSpan>
          {computedValues.totalPrice ? computedValues.totalPrice : 0} грн.
        </StyledSpan>
      </WrapInfo>
      <WrapInfo>
        <StyledOption>{t("maxAmount")}</StyledOption>
        <StyledSpan>{computedValues.maxAmount} шт.</StyledSpan>
      </WrapInfo>
      {edgeWidth ? (
        <WrapInfo>
          <StyledOption>{t("edgeWidth")}</StyledOption>
          <StyledSpan>{edgeWidth ? edgeWidth : 0}</StyledSpan>
        </WrapInfo>
      ) : null}

      <HiddenOnPhone ref={myRef}>
        <StyledItemName>{t("cut")}</StyledItemName>
        <ExampleComponent
          width={width}
          height={height}
          scale={scale}
          edgeSide={edgeSide}
        />
      </HiddenOnPhone>
      {!myElIsVisible && (
        <ModalButton onClick={toggleModal}>{t("cut")}</ModalButton>
      )}
      {isOpen ? (
        <VisualModal memorized={memorized} close={toggleModal} />
      ) : null}
    </section>
  );
};

export default ChosenItem;
