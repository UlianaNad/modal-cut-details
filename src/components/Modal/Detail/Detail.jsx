import React, { useMemo, useState } from "react";
import ChosenItem from "../ChosenItem/ChosenItem";
import OptionSection from "../OptionSection/OptionSection";

import { WrapDetail, WrapSections } from "./Detail.styled";
import styled from "styled-components";
import { toast } from "react-toastify";

const Detail = ({
  i,
  product,
  language,
  handleDeleteDetail,
  detail,
  details,
  countDetails,
  setNewDetail,
  setIsSavedDetail,
}) => {
  const [edgeSide, setEdgeSide] = useState([]);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [patternDirection, setPatternDirection] = useState("horizontal");
  const [edgeWidth, setEdgeWidth] = useState(null);
  const [customAmount, setCustomAmount] = useState(null);
  const [comment, setComment] = useState("");
  const [selected, setSelected] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const toggleDetail = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const computedValues = useMemo(() => {
    const startSquare = product
      ? product?.dimensions?.width * product?.dimensions?.height
      : 0;

    const customSquare = width && height ? width * height : 0;

    const possibleAmountOfPieces =
      startSquare !== 0 && customSquare !== 0
        ? Math.ceil(startSquare / customSquare)
        : 0;

    const cutItemPrice =
      customAmount !== null
        ? Math.round(product?.offers?.price / possibleAmountOfPieces)
        : null;
    const AmountOfCustomParticles = customAmount
      ? Math.ceil(customAmount / possibleAmountOfPieces)
      : 0;
    const totalPrice =
      customAmount && AmountOfCustomParticles > 0
        ? Math.round(product?.offers.price * AmountOfCustomParticles)
        : null;

    return {
      possibleAmountOfPieces,
      cutItemPrice,
      AmountOfCustomParticles,
      totalPrice,
    };
  }, [product, width, height, customAmount]);
  const newDetail = {
    id: countDetails,
    productId: product.id,
    width,
    height,
    patternDirection,
    edgeSide,
    edgeWidth,
    customAmount,
    comment,
  };
  const handleAddNewDetail = (data) => {
    if (width === null || height === null || customAmount === null) {
      toast.error("Вкажіть розмір деталі і кількість!");
      return;
    } else {
      setNewDetail(data);

      toggleDetail(i);
      setIsSavedDetail(true);
      setIsSaved(true);
    }
  };

  return (
    <WrapDetail>
      <WrapToggleDiv onClick={() => toggleDetail(i)}>
        <p>
          Деталь {width ? width : 0} мм на {height ? height : 0} мм
        </p>
        <span>{selected !== i ? "-" : "+"}</span>
      </WrapToggleDiv>
      {selected !== i ? (
        <>
          <WrapSections $isSaved={isSaved}>
            <ChosenItem
              product={product}
              width={width}
              height={height}
              computedValues={computedValues}
              edgeSide={edgeSide}
              patternDirection={patternDirection}
              edgeWidth={edgeWidth}
              customAmount={customAmount}
              language={language}
            />
            <OptionSection
              countDetails={countDetails}
              product={product}
              setWidth={setWidth}
              setHeight={setHeight}
              setEdgeSide={setEdgeSide}
              setPatternDirection={setPatternDirection}
              setEdgeWidth={setEdgeWidth}
              setCustomAmount={setCustomAmount}
              setComment={setComment}
              detail={detail}
              details={details}
              language={language}
              handleDeleteDetail={handleDeleteDetail}
            />
          </WrapSections>
          {!isSaved && (
            <StyledSaveButton onClick={() => handleAddNewDetail(newDetail)}>
              {language === "ua" ? "Зберегти" : "Сохранить"}
            </StyledSaveButton>
          )}
        </>
      ) : null}
    </WrapDetail>
  );
};

export default Detail;

export const StyledSaveButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: #ffa700;
  margin-left: 52%;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    padding: 6px 10px;
    margin-right: 0;
    min-width: 0;
  }
  @media (max-width: 915px) {
    margin-left: 0;
  }
`;
export const WrapToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c48000;
  cursor: pointer;
  /* margin-top: 20px; */
  color: #001a34;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  /* margin-bottom: 10px; */

  @media (max-width: 425px) {
    margin-top: 10px;
  }

  span {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  p {
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;
