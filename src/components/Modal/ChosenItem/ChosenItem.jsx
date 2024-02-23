import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import {
  DeleteDetailButton,
  HiddenOnPhone,
  InfoWrapper,
  ModalButton,
  StyledOption,
  StyledSection,
  StyledSpan,
  StyledVisualBlockText,
  WrapDetail,
  WrapInfo,
  WrapList,
  WrapToggleDiv,
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
  totalPrice,
  AmountOfCustomParticles,
  details,
  selected,
  toggleDetail,
  handleDeleteDetail,
}) => {
  const [scale, setScale] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { ref: myRef, inView: myElIsVisible, entry } = useInView();

  const { t } = useTranslation("chosenItem");

  const checkTop = entry?.boundingClientRect?.top < 0;

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

    setIsOpen((prev) => !prev);
  };
  const handleToggleDetail = (id) => {
    toggleDetail(id);
  };

  return (
    <StyledSection
      $detail={details?.length > 0 ? true : false}
      $open={selected === detail.id ? true : false}
    >
      {details && (
        <WrapToggleDiv onClick={() => handleToggleDetail(detail.id)}>
          <p>
            Деталь №{detail.count} {detail.width ? detail.width : 0} мм на{" "}
            {detail.height ? detail.height : 0} мм
          </p>
          <span>{selected === detail.id ? "-" : "+"}</span>
        </WrapToggleDiv>
      )}
      {selected === detail.id ? (
        <>
          <WrapDetail $detail={details?.length > 0 ? true : false}>
            <InfoWrapper $chosenItem={details?.length > 0 ? true : false}>
              <WrapList>
                <WrapInfo>
                  <StyledOption>{t("name")}</StyledOption>
                  <StyledSpan>
                    {t("width")} {product.dimensions.width} мм {t("height")}{" "}
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
                  <StyledOption>{t("totalPrice")}</StyledOption>
                  <StyledSpan>{totalPrice ? totalPrice : 0} грн.</StyledSpan>
                </WrapInfo>
                <WrapInfo>
                  <StyledOption>{t("maxAmount")}</StyledOption>
                  <StyledSpan>
                    {AmountOfCustomParticles ? AmountOfCustomParticles : 0} шт.
                  </StyledSpan>
                </WrapInfo>
                {edgeWidth ? (
                  <WrapInfo>
                    <StyledOption>{t("edgeWidth")}</StyledOption>

                    <StyledSpan>
                      {edgeWidth !== null ? edgeWidth : 0}
                    </StyledSpan>
                  </WrapInfo>
                ) : null}
                {details?.length > 0 && (
                  <>
                    <WrapInfo>
                      <StyledOption>{t("patternDirection")}</StyledOption>

                      <StyledSpan>
                        {detail.patternDirection === "horizontal"
                          ? "горизонтально"
                          : "вертикально"}
                      </StyledSpan>
                    </WrapInfo>
                    <WrapInfo>
                      <StyledOption>{t("comment")}</StyledOption>
                      <StyledSpan>{detail.comment}</StyledSpan>
                    </WrapInfo>
                  </>
                )}
              </WrapList>
              {details && (
                <DeleteDetailButton
                  type="button"
                  onClick={() => handleDeleteDetail(detail.id)}
                >
                  {t("deleteButton")}
                </DeleteDetailButton>
              )}
            </InfoWrapper>
            {details?.length > 0 ? (
              <HiddenOnPhone>
                <StyledVisualBlockText>{t("cut")}</StyledVisualBlockText>
                <ExampleComponent
                  width={width}
                  height={height}
                  scale={scale}
                  edgeSide={edgeSide}
                />
              </HiddenOnPhone>
            ) : (
              <HiddenOnPhone ref={myRef}>
                <StyledVisualBlockText>{t("cut")}</StyledVisualBlockText>
                <ExampleComponent
                  width={width}
                  height={height}
                  scale={scale}
                  edgeSide={edgeSide}
                />
              </HiddenOnPhone>
            )}
          </WrapDetail>
          {!myElIsVisible && checkTop ? (
            <ModalButton onClick={toggleModal}>{t("cut")}</ModalButton>
          ) : null}
          {isOpen ? (
            <VisualModal
              width={width}
              height={height}
              scale={scale}
              edgeSide={edgeSide}
              close={toggleModal}
            />
          ) : null}
        </>
      ) : null}
    </StyledSection>
  );
};

ChosenItem.propTypes = {
  product: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  edgeSide: PropTypes.array,
  edgeWidth: PropTypes.string,
  possibleAmountOfPieces: PropTypes.number,
  totalPrice: PropTypes.number,
  maxAmount: PropTypes.number,
  details: PropTypes.array,
  selected: PropTypes.any,
  toggleDetail: PropTypes.func,
  handleDeleteDetail: PropTypes.func,
};

export default ChosenItem;
