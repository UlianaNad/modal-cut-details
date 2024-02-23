import React from "react";
import PropTypes from "prop-types";
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
  WrapOptions,
} from "./OptionSection.styled";
import { useTranslation } from "react-i18next";
import EdgePreview from "./EdgePreview/EdgePreview";
import SvgHoverComponent from "./SvgHoverComponent/SvgHoverComponent";
import { toast } from "react-toastify";

const OptionSection = ({
  product,
  setWidth,
  setHeight,
  setEdgeSide,
  setPatternDirection,
  setEdgeWidth,
  setCustomAmount,
  setComment,
  isBigHeight,
  setIsBigHeight,
  isBigWidth,
  setIsBigWidth,
  edgeSide,
  edgeBlock,
  setEdgeBlock,
  patternDirection,
}) => {
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

  const handleImageClick = () => {
    setPatternDirection(
      patternDirection === "horizontal" ? "vertical" : "horizontal"
    );
  };

  const handleInputWidth = (e) => {
    if (e.target.value > dimensions.width) {
      toast.info(t("info_toast"));
      setIsBigWidth(true);
      return;
    } else {
      setIsBigWidth(false);
      setWidth(Number(e.target.value));
    }
  };
  const handleInputHeight = (e) => {
    if (e.target.value > dimensions.height) {
      toast.info(t("info_toast"));
      setIsBigHeight(true);
      return;
    } else {
      setIsBigHeight(false);
      setHeight(Number(e.target.value));
    }
  };

  const handleAmountInput = (e) => {
    const amount = Number(e.target.value);

    if (amount <= 0) {
      toast.info(t("amount_info"));
    } else if (amount > 0) {
      setCustomAmount(amount);
    }
  };
  return (
    <WrapOptions>
      <div className="modal-window">
        <form id="form">
          <Wrapper>
            <StyledBlockName>
              {t("dimensions")}
              <SvgHoverComponent dimensions={t("dimensions-hover")} />
            </StyledBlockName>
            <StyledDimensions>
              <StyledLi>
                <StyledDivDimens>
                  <StyledInput
                    onChange={handleInputWidth}
                    type="number"
                    name="width"
                    id="width"
                    className="width"
                    placeholder={t("text_weight")}
                  />
                </StyledDivDimens>
                <StyledP $isBig={isBigWidth}>
                  Max: <span>{dimensions.width} mm</span>
                </StyledP>
              </StyledLi>
              <StyledLi>
                <StyledDivDimens>
                  <StyledInput
                    onChange={handleInputHeight}
                    type="number"
                    name="height"
                    id="height"
                    className="height"
                    placeholder={t("text_height")}
                  />
                </StyledDivDimens>
                <StyledP $isBig={isBigHeight}>
                  Max: <span>{dimensions.height} mm</span>
                </StyledP>
              </StyledLi>
            </StyledDimensions>
            <StyledBlockName>
              {t("totalAmount")}
              <SvgHoverComponent amount={t("totalAmount-hover")} />
            </StyledBlockName>
            <StyledInput
              $half={true}
              onChange={handleAmountInput}
              type="number"
              name="total-amount"
              placeholder={"шт."}
            />
          </Wrapper>
          <div className="edge-block">
            <StyledBlockName>
              Кромка:
              <SvgHoverComponent edge={t("edge-hover")} />
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
                <EdgePreview setEdgeSide={setEdgeSide} edgeSide={edgeSide} />
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
              <SvgHoverComponent rotation={t("rotation-hover")} />
            </StyledBlockName>
            <StyledImg
              $patternDirection={patternDirection}
              onClick={handleImageClick}
              src={require("./wood.jpg")}
              alt="pattern"
            />
          </PatternRotation>
          <div>
            <StyledBlockName>
              {t("comment")}
              <SvgHoverComponent comment={t("comment-hover")} />
            </StyledBlockName>
            <StyledTextArea
              onChange={(e) => setComment(e.target.value)}
              name="comment"
              id=""
              cols="50"
              rows="6"
            ></StyledTextArea>
          </div>
        </form>
      </div>
    </WrapOptions>
  );
};

OptionSection.propTypes = {
  product: PropTypes.object.isRequired,
  setWidth: PropTypes.func,
  setHeight: PropTypes.func,
  setEdgeSide: PropTypes.func,
  setPatternDirection: PropTypes.func,
  setEdgeWidth: PropTypes.func,
  setCustomAmount: PropTypes.func,
  setComment: PropTypes.func,
  isBigHeight: PropTypes.bool,
  setIsBigHeight: PropTypes.func,
  isBigWidth: PropTypes.bool,
  setIsBigWidth: PropTypes.func,
  edgeSide: PropTypes.array,
  edgeBlock: PropTypes.bool,
  setEdgeBlock: PropTypes.func,
  patternDirection: PropTypes.oneOf(["horizontal", "vertical"]),
};
export default OptionSection;
