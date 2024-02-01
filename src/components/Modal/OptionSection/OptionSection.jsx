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

  const hoverContent = {
    dimensionsContent:
      "Розіміри (Введіть розміри для висоти та ширини вашого продукту в міліметрах (мм). Турбуєтеся про точність? Ми використовуємо новітню технологію різання ЧПК для точного різання з допуском +/- 1 мм)",
    totalAmountContent:
      "Загальна кількість деталей по заданим розмірам (Потрібно вказати необхідну кількість деталей, яку необхідно порізати. Зауважте, що деталі вже мають задані розміри)",
    edgeContent:
      "Кромка (Асортимент продукції, представлений на нашому сайті, пропонує кромку в розмірах 42мм/2,0 мм, 22мм/0,6мм, 22мм/2,0мм і т.д. різного колірного рішення. За допомогою кромки можна виконати якісне облицювання торцевих поверхонь ДСП, створити декор-елемент у виготовленні корпусних меблів. Потрібно вибрати сторони, які кромкувати, чи не кромкувати взагалі.",
    rotationContent:
      "Обертання текстури (Важливо враховувати напрям текстури при замовленні порізки  плитних матеріалів, тому що деякі плитні матеріали можуть мати виражену текстуру або малюнок, і обертання їх може впливати на те, як ця текстура виглядає на поверхні.)",
    commentContent:
      "Залишити коментар (Вкажіть колір кромки, наявність радіусів, пазів, кутів тощо, а також їх розміри)",
  };
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

  return (
    <WrapOptions>
      <div className="modal-window">
        <form onSubmit={handleFormSubmit}>
          <Wrapper>
            <StyledBlockName>Деталь</StyledBlockName>

            <StyledBlockName>
              {language === "ua" ? "Розміри деталі:" : "Рaзмeры детали:"}
              <SvgHoverComponent $dimensions={hoverContent.dimensionsContent} />
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
                <StyledP  $isBig={isBig}>
                  Max: <span>{dimensions.height} mm</span>
                </StyledP>
              </StyledLi>
            </StyledDimensions>
            <StyledBlockName>
              {language === "ua"
                ? "Загальна кількість деталей по заданим розмірам:"
                : "Общее количество деталей по заданым размерам:"}
              <SvgHoverComponent $amount={hoverContent.totalAmountContent} />
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
              <SvgHoverComponent $edge={hoverContent.edgeContent} />
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
              <SvgHoverComponent $rotation={hoverContent.rotationContent} />
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
              <SvgHoverComponent $comment={hoverContent.commentContent} />
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
