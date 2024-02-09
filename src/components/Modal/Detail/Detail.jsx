import React, { useMemo, useState } from "react";
import ChosenItem from "../ChosenItem/ChosenItem";
import OptionSection from "../OptionSection/OptionSection";

import {
  StyledSaveButton,
  StyledUpdateButton,
  WrapDetail,
  WrapSections,
  WrapToggleDiv,
} from "./Detail.styled";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

const Detail = ({
  i,
  product,
  detail,
  details,
  setDetails,
  setIsSavedDetail,
  setNewDetail,
  setOpenedDetail,
  countDetails,
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
  const [id, setId] = useState(nanoid());
  const { t } = useTranslation("detailPage");

  const [isBigWidth, setIsBigWidth] = useState(false);
  const [isBigHeight, setIsBigHeight] = useState(false);
  const [savedDetails, setSavedDetails] = useState([]);
  const [edgeBlock, setEdgeBlock] = useState(false);
  const [count] = useState(countDetails);

  const clearState = () => {
    setEdgeSide([]);
    setWidth(null);
    setHeight(null);
    setPatternDirection("horizontal");
    setEdgeWidth(null);
    setCustomAmount(null);
    setComment("");

    setId(null);
  };
  const toggleDetail = (i) => {
    if (selected === i) {
      console.log(detail);
      setOpenedDetail(true);
      return setSelected(null);
    }

    setSelected(i);
    setEdgeBlock((prev) => !prev);
  };

  const computedValues = useMemo(() => {
    const horizontalFit =
      width === null ? 0 : Math.floor(product?.dimensions?.width / width);
    const verticalFit =
      height === null ? 0 : Math.floor(product?.dimensions?.height / height);

    const totalFit = horizontalFit * verticalFit;

    const possibleAmountOfPieces = totalFit !== 0 ? totalFit : 0;

    const maxAmount =
      customAmount !== null && totalFit !== 0
        ? Math.ceil(Number(customAmount) / Number(totalFit))
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
      totalFit,
      maxAmount,
    };
  }, [product, width, height, customAmount]);
  console.log(detail);

  const newDetail = {
    id: id,
    productId: product.id,
    width,
    height,
    patternDirection,
    edgeSide,
    edgeWidth,
    customAmount,
    comment,
  };

  const handleAddNewDetail = () => {
    if (width === null || height === null || customAmount === null) {
      toast.error(t("toast_error"));
      return;
    } else if (isBigHeight || isBigWidth) {
      toast.error(t("info_toast"));
    } else {
      const updatedDetails = [...savedDetails, newDetail];
      setSavedDetails(updatedDetails);

      const existingDetailsString = window.localStorage.getItem("details");
      const existingDetails = existingDetailsString
        ? JSON.parse(existingDetailsString)
        : [];

      const updatedLocalStorageDetails = [...existingDetails, newDetail];

      // Update localStorage with the updated details
      window.localStorage.setItem(
        `details`,
        JSON.stringify(updatedLocalStorageDetails)
      );
      setNewDetail(newDetail);

      toggleDetail(i);
      setIsSavedDetail(true);
      setIsSaved(true);
      setOpenedDetail(false);
      setEdgeBlock((prev) => !prev);
    }
  };
  const handleUpdateDetail = (updatedDetail) => {
    const updatedDetails = savedDetails.map((detail) =>
      detail.id === updatedDetail.id ? updatedDetail : detail
    );
    setSavedDetails(updatedDetails);

    const existingDetailsString = window.localStorage.getItem("details");
    const existingDetails = existingDetailsString
      ? JSON.parse(existingDetailsString)
      : [];

    const indexOfUpdatedDetail = existingDetails.findIndex(
      (detail) => detail.id === updatedDetail.id
    );

    if (indexOfUpdatedDetail !== -1) {
      existingDetails[indexOfUpdatedDetail] = updatedDetail;
      window.localStorage.setItem("details", JSON.stringify(existingDetails));
    }
    toggleDetail(i);
    setOpenedDetail(false);
    setEdgeBlock((prev) => !prev);
  };

  const handleDeleteDetail = (id) => {
    console.log(id);
    if (id === undefined) {
      clearState();
      console.log(id);
    } else {
      const existingDetails = JSON.parse(
        window.localStorage.getItem("details")
      );
      const updatedDetails = existingDetails.filter(
        (detail) => detail.id !== id
      );

      setDetails(updatedDetails);
      window.localStorage.setItem("details", JSON.stringify(updatedDetails));
      setIsSavedDetail(true);
      setOpenedDetail(false);
    }
  };

  return (
    <WrapDetail>
      <WrapToggleDiv onClick={() => toggleDetail(i)}>
        <p>
          Деталь №{count} {width ? width : 0} мм на {height ? height : 0} мм
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
              detail={detail}
            />
            <OptionSection
              product={product}
              setWidth={setWidth}
              setHeight={setHeight}
              width={width}
              height={height}
              setEdgeSide={setEdgeSide}
              setPatternDirection={setPatternDirection}
              setCustomAmount={setCustomAmount}
              setComment={setComment}
              computedValues={computedValues}
              edgeSide={edgeSide}
              patternDirection={patternDirection}
              edgeWidth={edgeWidth}
              customAmount={customAmount}
              countDetails={countDetails}
              setEdgeWidth={setEdgeWidth}
              detail={detail}
              details={details}
              handleDeleteDetail={handleDeleteDetail}
              isBigHeight={isBigHeight}
              setIsBigHeight={setIsBigHeight}
              isBigWidth={isBigWidth}
              setIsBigWidth={setIsBigWidth}
              edgeBlock={edgeBlock}
              setEdgeBlock={setEdgeBlock}
              comment={comment}
              id={id}
              newDetail={newDetail}
            />
          </WrapSections>
          {!isSaved ? (
            <StyledSaveButton onClick={() => handleAddNewDetail()}>
              {t("save_button")}
            </StyledSaveButton>
          ) : (
            <StyledUpdateButton onClick={() => handleUpdateDetail(newDetail)}>
              {t("update_button")}
            </StyledUpdateButton>
          )}
        </>
      ) : null}
    </WrapDetail>
  );
};

export default Detail;
