import React, { useState } from "react";
import {
  PatternRotation,
  StyledBlockName,
  StyledButton,
  StyledDimensions,
  StyledDivDimens,
  StyledImg,
  StyledInput,
  StyledLi,
  StyledP,
  StyledSelect,
  StyledTextArea,
  Wrapper,
  WrapperButtons,
  DeleteDetailButton,
  WrapOptions,
} from "./OptionSection.styled";
import { useTranslation } from "react-i18next";
import EdgePreview from "./EdgePreview/EdgePreview";
import SvgHoverComponent from "./SvgHoverComponent/SvgHoverComponent";
import { toast } from "react-toastify";
import { hoverContent } from "../../data/hoverData";
const OptionSection = ({
  product,
  close,
  setWidth,
  setHeight,
  setEdgeSide,
  setPatternDirection,
  setEdgeWidth,
  setCustomAmount,
  setComment,
  detail,
  language,
  handleDeleteDetail,
}) => {
  const [rotation, setRotation] = useState(90);
  const [edgeBlock, setEdgeBlock] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const { t } = useTranslation("optionSection");
  const { dimensions } = product;

  const handleOpenEdgeBlock = () => {
    setEdgeBlock(true);
  };

  const handleCloseEdgeBlock = () => {
    setEdgeBlock(false);
    setEdgeWidth(null);
    setEdgeSide([]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    close();
  };

  const handleImageClick = (e) => {
    const newRotation = rotation === 0 ? 90 : 0;
    setRotation(newRotation);
    e.target.style.transform = `rotate(${newRotation.toString()}deg)`;
    if (rotation === 90) {
      e.target.style.width = `90px`;
      e.target.style.marginLeft = `0px`;
    } else {
      e.target.style.width = `125px`;
      e.target.style.marginLeft = `25px`;
    }
    setPatternDirection(newRotation !== 0 ? "horizontal" : "vertical");
  };

  const handleInputWidth = (e) => {
    if (e.target.value > dimensions.width) {
      toast.info(t("info_toast"));
      setIsBig(true);
      return;
    } else {
      setIsBig(false);
      setWidth(e.target.value);
    }
  };
  const handleInputHeight = (e) => {
    if (e.target.value > dimensions.height) {
      toast.info(t("info_toast"));
      setIsBig(true);
      return;
    } else {
      setIsBig(false);
      setHeight(e.target.value);
    }
  };
  console.log(detail);
  return (
    <WrapOptions>
      <div className="modal-window">
        <form onSubmit={handleFormSubmit}>
          <Wrapper>
            <StyledBlockName>Деталь</StyledBlockName>

            <StyledBlockName>
              {t("dimensions")}
              <SvgHoverComponent dimensions={hoverContent.dimensions} />
            </StyledBlockName>
            <StyledDimensions>
              <StyledLi>
                <StyledDivDimens>
                  <StyledInput
                    $width={true}
                    onChange={handleInputWidth}
                    type="number"
                    name="width"
                    id="width"
                    className="width"
                    placeholder={t("text_weight")}
                  />
                </StyledDivDimens>
                <StyledP $isBig={isBig}>
                  Max: <span>{dimensions.width} mm</span>
                </StyledP>
              </StyledLi>
              <StyledLi>
                <StyledDivDimens>
                  <StyledInput
                    $width={true}
                    onChange={handleInputHeight}
                    type="number"
                    name="height"
                    id="height"
                    className="height"
                    placeholder={t("text_height")}
                  />
                </StyledDivDimens>
                <StyledP $isBig={isBig}>
                  Max: <span>{dimensions.height} mm</span>
                </StyledP>
              </StyledLi>
            </StyledDimensions>
            <StyledBlockName>
              {t("totalAmount")}
              <SvgHoverComponent amount={hoverContent.totalAmount} />
            </StyledBlockName>
            <StyledInput
              onChange={(e) => setCustomAmount(e.target.value)}
              type="number"
              name="total-amount"
              placeholder="шт."
            />
          </Wrapper>
          <div className="edge-block">
            <StyledBlockName>
              Кромка:
              <SvgHoverComponent edge={hoverContent.edge} />
            </StyledBlockName>
            <WrapperButtons>
              <StyledButton
                $width={true}
                type="button"
                onClick={handleOpenEdgeBlock}
              >
                {t("yes")}
              </StyledButton>
              <StyledButton
                $width={true}
                type="button"
                onClick={handleCloseEdgeBlock}
              >
                {t("no")}
              </StyledButton>
            </WrapperButtons>
            {edgeBlock ? (
              <div>
                <EdgePreview setEdgeSide={setEdgeSide} language={language} />
                <div className="field position">
                  <StyledBlockName>{t("edge")}</StyledBlockName>
                  <StyledSelect
                    onChange={(e) => setEdgeWidth(e.target.value)}
                    name="edge-width"
                    id="edge-width"
                  >
                    <option value="">{t("edge")}</option>
                    <option value="22*0.6">22*0.6 </option>
                    <option value="22*2">22*2</option>
                    <option value="42*2">42*2</option>
                  </StyledSelect>
                </div>
              </div>
            ) : null}
          </div>
          <PatternRotation>
            <StyledBlockName>
              {t("rotation")}
              <SvgHoverComponent rotation={hoverContent.rotation} />
            </StyledBlockName>
            <StyledImg
              onClick={handleImageClick}
              src={require("./wood.jpg")}
              alt="pattern"
            />
          </PatternRotation>
          <div>
            <StyledBlockName>
              {t("comment")}
              <SvgHoverComponent comment={hoverContent.comment} />
            </StyledBlockName>
            <StyledTextArea
              onChange={(e) => setComment(e.target.value)}
              name="comment"
              id=""
              cols="50"
              rows="6"
            ></StyledTextArea>
          </div>
          <DeleteDetailButton
            type="button"
            onClick={() => handleDeleteDetail(detail?.id)}
          >
            {t("deleteButton")}
          </DeleteDetailButton>
        </form>
      </div>
    </WrapOptions>
  );
};

export default OptionSection;
