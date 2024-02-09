import React, { useState } from "react";
import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  WrapButtons,
  StyledButton,
  StyledMoreButton,
  StyledText,
  ModalHeader,
  StyledItemName,
  StyledInfo,
} from "./Modal.styled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import Detail from "./Detail/Detail";

const Modal = ({ close, product, details, setDetails }) => {
  const [isSavedDetail, setIsSavedDetail] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation("modalPage");
  const [newDetail, setNewDetail] = useState({});
  const [openedDetail, setOpenedDetail] = useState(false);
  const [countDetails, setCountDetails] = useState(0);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  const handleClickCloseButton = () => {
    close();
  };

  const handleAddDetail = () => {
    setIsSavedDetail(false);
    setDetails((prevDetails) => [...prevDetails, newDetail]);
    setCountDetails((prev) => prev + 1);
    setOpenedDetail(true);
  };

  const handleSubmit = () => {
    close();
  };
  console.log(details);
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
        <ModalHeader>
          {" "}
          <StyledItemName>{product.name}</StyledItemName>
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

        {details.length === 0 && <StyledInfo>{t("styled_info")}</StyledInfo>}
        {details.map((detail, i) => (
          <Detail
            key={`${product.id}-${i}`}
            i={i}
            product={product}
            setDetails={setDetails}
            detail={detail}
            handleSubmit={handleSubmit}
            details={details}
            setNewDetail={setNewDetail}
            isSavedDetail={isSavedDetail}
            setIsSavedDetail={setIsSavedDetail}
            handleAddDetail={handleAddDetail}
            openedDetail={openedDetail}
            setOpenedDetail={setOpenedDetail}
            countDetails={countDetails}
            setCountDetails={setCountDetails}
          />
        ))}

        {(!isSavedDetail && !openedDetail) ||
        (isSavedDetail && !openedDetail) ? (
          <WrapButtons>
            <StyledMoreButton onClick={handleAddDetail}>
              {t("more_button")}
            </StyledMoreButton>
            <StyledButton type="button" onClick={handleSubmit}>
              {t("submit_button")}
            </StyledButton>
          </WrapButtons>
        ) : (
          <StyledText>{t("text_info")}</StyledText>
        )}
        <ToastContainer />
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
