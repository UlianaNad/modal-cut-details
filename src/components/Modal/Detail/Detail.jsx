import React, { useMemo, useState } from "react";
import ChosenItem from "../ChosenItem/ChosenItem";
import OptionSection from "../OptionSection/OptionSection";

import {
  BodyWrapper,
  StyledMoreButton,
  WrapDetail,
  WrapSections,
} from "./Detail.styled";

const Detail = ({
  product,
  language,
  handleDeleteDetail,
  detail,
  details,
  countDetails,
  setNewDetail,
}) => {
  const [edgeSide, setEdgeSide] = useState([]);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [patternDirection, setPatternDirection] = useState("horizontal");
  const [edgeWidth, setEdgeWidth] = useState(null);
  const [customAmount, setCustomAmount] = useState(null);
  const [comment, setComment] = useState("");

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
  };

  return (
    <WrapDetail>
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
      <StyledMoreButton onClick={() => handleAddNewDetail(newDetail)}>
        {language === "ua" ? "Зберегти деталь" : "Сохранить деталь"}
      </StyledMoreButton>
    </WrapDetail>
  );
};

export default Detail;
