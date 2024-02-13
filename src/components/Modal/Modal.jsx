import React from "react";
import { useState } from "react";
import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  ModalHeader,
  StyledItemName,
  WrapButtons,
  StyledButton,
  WrapDetail,
  WrapSections,
  StyledSaveButton,
  WrapModal,
  StyledTitle,
  StyledAddDetailButton,
} from "./Modal.styled";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { addDetail, deleteDetail, detailsData } from "../../redux/detailsSlice";
import ChosenItem from "./ChosenItem/ChosenItem";
import { nanoid } from "@reduxjs/toolkit";
import OptionSection from "./OptionSection/OptionSection";

const Modal = ({ close, product }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("modalPage");
  const [countDetails, setCountDetails] = useState(1);
  const dispatch = useDispatch();
  const dataDetails = useSelector(detailsData);
  const [edgeSide, setEdgeSide] = useState([]);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [patternDirection, setPatternDirection] = useState("horizontal");
  const [edgeWidth, setEdgeWidth] = useState(null);
  const [customAmount, setCustomAmount] = useState(null);
  const [comment, setComment] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  // const { t } = useTranslation("detailPage");
  const [isBigWidth, setIsBigWidth] = useState(false);
  const [isBigHeight, setIsBigHeight] = useState(false);

  const [openedDetail, setOpenedDetail] = useState(false);
  const [edgeBlock, setEdgeBlock] = useState(false);

  const clearState = () => {
    setEdgeSide([]);
    setWidth(null);
    setHeight(null);
    setPatternDirection("horizontal");
    setEdgeWidth(null);
    setCustomAmount(null);
    setComment("");
  };

  const computedValues = () => {
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
  };

  let detailToAdd = {
    id: nanoid(),
    productId: product.id,
    width,
    height,
    patternDirection,
    edgeSide,
    edgeWidth,
    customAmount,
    comment,
    possibleAmountOfPieces: computedValues().possibleAmountOfPieces,
    cutItemPrice: computedValues().cutItemPrice,
    AmountOfCustomParticles: computedValues().AmountOfCustomParticles,
    totalPrice: computedValues().totalPrice,
    totalFit: computedValues().totalFit,
    maxAmount: computedValues().maxAmount,
    count: countDetails,
  };
  const clearForm = () => {
    document.getElementById("form").reset();
  };
  const handleAddDetail = (data) => {
    if (width === null || height === null || customAmount === null) {
      toast.error(t("toast_error"));
      return;
    } else if (isBigHeight || isBigWidth) {
      toast.error(t("info_toast"));
    } else {
      setCountDetails((prev) => prev + 1);
      dispatch(addDetail(data));
      setOpenedDetail(false);
      console.log(data);

      setIsSaved(true);
      setEdgeBlock((prev) => !prev);
      clearForm();
      clearState();
    }
  };
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  const handleClickCloseButton = () => {
    close();
  };

  const handleDeleteDetail = (id) => {
    console.log(id);
    dispatch(deleteDetail(id));
  };
  const handleSubmit = (data) => {
    dispatch(addDetail(data));
    close();
  };

  return (
    <StyledOverlay onClick={handleClickOutside}>
      <StyledModal>
        <div>
          <button data-lang="ua" onClick={() => i18n.changeLanguage("ua")}>
            ua
          </button>
          <button data-lang="ru" onClick={() => i18n.changeLanguage("ru")}>
            ru
          </button>
        </div>
        <WrapModal>
          <ModalHeader>
            <StyledCloseButton onClick={handleClickCloseButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 72 72"
              >
                <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
              </svg>
            </StyledCloseButton>
          </ModalHeader>
          {dataDetails.map((detail, i) => (
            <ChosenItem
              key={i}
              i={i}
              product={product}
              detail={detail}
              width={detail.width}
              height={detail.height}
              possibleAmountOfPieces={detail.possibleAmountOfPieces}
              cutItemPrice={detail.cutItemPrice}
              AmountOfCustomParticles={detail.AmountOfCustomParticles}
              totalPrice={detail.totalPrice}
              totalFit={detail.totalFit}
              maxAmount={detail.maxAmount}
              edgeSide={detail.edgeSide}
              patternDirection={detail.patternDirection}
              edgeWidth={detail.edgeWidth}
              customAmount={detail.customAmount}
              details={dataDetails}
              handleDeleteDetail={handleDeleteDetail}
              setOpenedDetail={setOpenedDetail}
              openedDetail={openedDetail}
            />
          ))}
          <WrapDetail>
            <StyledTitle>
              <span>Введіть параметри порізки для </span>
              {product.name}
            </StyledTitle>
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
                detail={dataDetails}
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
                details={dataDetails}
                isBigHeight={isBigHeight}
                setIsBigHeight={setIsBigHeight}
                isBigWidth={isBigWidth}
                setIsBigWidth={setIsBigWidth}
                edgeBlock={edgeBlock}
                setEdgeBlock={setEdgeBlock}
                comment={comment}
              />
            </WrapSections>
          </WrapDetail>
          <WrapButtons>
            <StyledAddDetailButton
              type="button"
              onClick={() => handleAddDetail(detailToAdd)}
            >
              {t("more_button")}
            </StyledAddDetailButton>
            <StyledButton type="button" onClick={() => handleSubmit()}>
              {t("submit_button")}
            </StyledButton>
          </WrapButtons>
          <ToastContainer />
        </WrapModal>
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
