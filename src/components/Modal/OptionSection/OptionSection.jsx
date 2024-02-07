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
      toast.info("Введіть менше значення!");
      setIsBig(true);
      return;
    } else {
      setIsBig(false);
      setWidth(e.target.value);
    }
  };
  const handleInputHeight = (e) => {
    if (e.target.value > dimensions.height) {
      toast.info("Введіть менше значення!");
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
              {language === "ua" ? "Розміри деталі:" : "Рaзмeры детали:"}
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
                    placeholder={
                      language === "ua" ? "Ширина, мм" : "Ширина, мм"
                    }
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
                    placeholder={
                      language === "ua" ? "Висота, мм" : "Высота, мм"
                    }
                  />
                </StyledDivDimens>
                <StyledP $isBig={isBig}>
                  Max: <span>{dimensions.height} mm</span>
                </StyledP>
              </StyledLi>
            </StyledDimensions>
            <StyledBlockName>
              {language === "ua"
                ? "Загальна кількість деталей по заданим розмірам:"
                : "Общее количество деталей по заданым размерам:"}
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
                {language === "ua" ? "Так" : "Да"}
              </StyledButton>
              <StyledButton
                $width={true}
                type="button"
                onClick={handleCloseEdgeBlock}
              >
                {language === "ua" ? "Ні" : "Нет"}
              </StyledButton>
            </WrapperButtons>
            {edgeBlock ? (
              <div>
                <EdgePreview setEdgeSide={setEdgeSide} language={language} />
                <div className="field position">
                  <StyledBlockName>
                    {language === "ua"
                      ? "Вибрати ширину кромки:"
                      : "Выбрать ширину кромки:"}
                  </StyledBlockName>
                  <StyledSelect
                    onChange={(e) => setEdgeWidth(e.target.value)}
                    name="edge-width"
                    id="edge-width"
                  >
                    <option value="">
                      {language === "ua"
                        ? "Вибрати ширину кромки"
                        : "Выбрать ширину кромки"}{" "}
                    </option>
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
              {language === "ua" ? "Обертання текстури:" : "Вращение текстуры:"}
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
              {language === "ua"
                ? "Залиште свій коментар щодо замовлення:"
                : "Оставьте свой коментарий к заказу:"}
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
            {language === "ua" ? "Видалити" : "Удалить"}
          </DeleteDetailButton>
        </form>
      </div>
    </WrapOptions>
  );
};

export default OptionSection;
