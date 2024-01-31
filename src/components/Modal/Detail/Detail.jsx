import React, { useMemo, useState } from "react";
import ChosenItem from "../ChosenItem/ChosenItem";
import OptionSection from "../OptionSection/OptionSection";

import { WrapDetail, WrapSections } from "./Detail.styled";
import styled from "styled-components";

const Detail = ({
  i,
  product,
  language,
  handleDeleteDetail,
  detail,
  details,
  countDetails,
  setNewDetail,
  isSavedDetail,
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
    setNewDetail(data);
    toggleDetail(i);
    setIsSavedDetail(true);
  };
  console.log(isSavedDetail);
  return (
    <WrapDetail>
      {/* {selected !== i ? null : ( */}
      <WrapToggleDiv onClick={() => toggleDetail(i)}>
        <h2>
          Деталь з шириною {width}мм і висотою {height} мм
        </h2>
        <span>{selected !== i ? "-" : "+"}</span>
      </WrapToggleDiv>
      {/* )} */}
      {selected !== i ? (
        <>
          <WrapSections>
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
          <StyledSaveButton onClick={() => handleAddNewDetail(newDetail)}>
            {language === "ua" ? "Зберегти деталь" : "Сохранить деталь"}
          </StyledSaveButton>
        </>
      ) : null}
    </WrapDetail>
  );
};

export default Detail;

export const StyledSaveButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: #ffa700;
  margin-left: 557px;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #c48000;
  }
  @media (max-width: 425px) {
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 0;
    min-width: 0;
  }
`;
export const WrapToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffeac4;
  cursor: pointer;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
