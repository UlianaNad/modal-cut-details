import React from "react";
import { useState } from "react";
import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  ModalHeader,
  WrapButtons,
  StyledButton,
  WrapDetail,
  WrapSections,
  WrapModal,
  StyledTitle,
  StyledAddDetailButton,
  StyledListText,
} from "./Modal.styled";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import {
  addDetail,
  deleteDetail,
  detailsData,
  clearDetailsState,
} from "../../redux/detailsSlice";
import ChosenItem from "./ChosenItem/ChosenItem";
import { nanoid } from "@reduxjs/toolkit";
import OptionSection from "./OptionSection/OptionSection";
import Div100vh from "react-div-100vh";

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
  const [isBigWidth, setIsBigWidth] = useState(false);
  const [isBigHeight, setIsBigHeight] = useState(false);
  const [edgeBlock, setEdgeBlock] = useState(false);
  const [selected, setSelected] = useState(null);

  const clearState = () => {
    setEdgeSide([]);
    setWidth(null);
    setHeight(null);
    setPatternDirection("horizontal");
    setEdgeWidth(null);
    setCustomAmount(null);
    setComment("");
    setEdgeBlock(false);
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
      totalPrice,
      maxAmount,
      AmountOfCustomParticles,
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

  const toggleDetail = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const handleScrollUp = () => {
    document.querySelector(".scrollTo").scrollIntoView();
  };

  const handleAddDetail = (data) => {
    if (width === null || height === null) {
      toast.error(t("toast_error_size"));
    } else if (customAmount === null) {
      toast.error(t("toast_error_amount"));
    } else if (isBigHeight || isBigWidth) {
      toast.error(t("info_toast"));
    } else if (edgeSide.length > 0 && edgeWidth === null) {
      toast.error(t("edgeWidth_error"));
    } else if (edgeSide.length === 0 && edgeWidth !== null) {
      toast.error(t("edgeSide_error"));
    } else {
      setCountDetails((prev) => prev + 1);
      dispatch(addDetail(data));
      setSelected(null);
      setIsSaved(true);

      clearForm();
      clearState();
      handleScrollUp();
    }
  };
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      close();
      clearState();
      dispatch(clearDetailsState());
    }
  };
  const handleClickCloseButton = () => {
    clearState();
    dispatch(clearDetailsState());
    close();
  };

  const handleDeleteDetail = (id) => {
    dispatch(deleteDetail(id));
  };

  const handleSubmit = (data) => {
    if (dataDetails.length === 0) {
      toast.error(t("no_details"));
      return;
    } else {
      dispatch(addDetail(data));

      if (width === null && height === null) {
        window.localStorage.setItem(
          "details",
          JSON.stringify([...dataDetails])
        );
      } else {
        window.localStorage.setItem(
          "details",
          JSON.stringify([...dataDetails, data])
        );
      }

      clearState();
      dispatch(clearDetailsState());
      close();
    }
  };

  return (
    <StyledOverlay onClick={handleClickOutside}>
      <Div100vh>
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
            <div className="scrollTo"></div>
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
            {dataDetails.length > 0 && (
              <StyledListText>{t("list")}</StyledListText>
            )}
            {dataDetails.length > 0
              ? dataDetails?.map((detail, i) => (
                  <ChosenItem
                    key={i}
                    i={detail.id}
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
                    selected={selected}
                    toggleDetail={toggleDetail}
                    showButton={false}
                  />
                ))
              : null}
            <WrapDetail>
              <StyledTitle>
                <span>{t("params")}</span>
                {product.name}
              </StyledTitle>
              <WrapSections $isSaved={isSaved}>
                <ChosenItem
                  product={product}
                  width={width}
                  height={height}
                  edgeSide={edgeSide}
                  patternDirection={patternDirection}
                  edgeWidth={edgeWidth}
                  customAmount={customAmount}
                  detail={dataDetails}
                  AmountOfCustomParticles={
                    computedValues().AmountOfCustomParticles
                  }
                  totalPrice={computedValues().totalPrice}
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
              <StyledButton
                type="button"
                onClick={() => handleSubmit(detailToAdd)}
              >
                {t("submit_button")}
              </StyledButton>
            </WrapButtons>
            <ToastContainer />
          </WrapModal>
        </StyledModal>
      </Div100vh>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default Modal;
