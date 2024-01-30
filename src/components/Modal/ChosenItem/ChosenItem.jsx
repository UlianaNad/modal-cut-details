import React, { useEffect, useState } from 'react';
import {
  Example,
  ExampleItem,
  HiddenOnPhone,
  LeftArrow,
  StyledItemName,
  StyledOption,
  StyledSpan,
  TopArrow,
  WrapInfo,
} from './ChosenItem.styled';

const ChosenItem = ({
  detail,
  product,
  width,
  height,
  edgeSide,
  edgeWidth,
  computedValues,
  language,
}) => {
  const [scale, setScale] = useState(null);

  useEffect(() => {
    let scaleToFit;

    if (width < 500 && height < 500) {
      scaleToFit = 0.6;
    } else if (width >= 500 && width < 1600 && height >= 500 && height < 1600) {
      scaleToFit = 0.4;
    } else if (
      (width >= 1600 || width < 2700) &&
      (height >= 1600 || height < 2700)
    ) {
      scaleToFit = 0.3;
    }

    setScale(scaleToFit);
  }, [width, height]);

  return (
    <section>
      <StyledItemName>{product.name}</StyledItemName>

      <WrapInfo>
        <StyledOption>
          {language === 'ua' ? 'Розмір товару:' : 'Розмeр товара:'}
        </StyledOption>
        <StyledSpan>
          {language === 'ua' ? 'ширина ' : 'ширина '}
          {product.dimensions.width} мм
          {language === 'ua' ? ' і висота ' : 'и высота '}
          {product.dimensions.height} мм
        </StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>
          {language === 'ua' ? 'Товщина листа:' : 'Толщина листа:'}
        </StyledOption>
        <StyledSpan>{product.dimensions.thickness} мм</StyledSpan>
      </WrapInfo>
      <WrapInfo>
        <StyledOption>
          {language === 'ua'
            ? 'Кількість листів у розкрої:'
            : 'Количество листов в разкрое:'}
        </StyledOption>
        <StyledSpan>
          {computedValues.possibleAmountOfPieces
            ? computedValues.possibleAmountOfPieces
            : 0}{' '}
          шт.
        </StyledSpan>
      </WrapInfo>
      <WrapInfo>
        <StyledOption>
          {language === 'ua' ? 'Ціна за 1 лист: ' : 'Цена за 1 лист: '}
        </StyledOption>
        <StyledSpan>
          {' '}
          {product.offers.price} {product.offers.priceCurrency}
        </StyledSpan>
      </WrapInfo>

      <WrapInfo>
        <StyledOption>
          {language === 'ua'
            ? 'Загальна вартість листів для порізки: '
            : 'Общее стоимость листов для порезки:'}
        </StyledOption>
        <StyledSpan>
          {computedValues.totalPrice ? computedValues.totalPrice : 0} грн.
        </StyledSpan>
      </WrapInfo>
      {edgeWidth ? (
        <WrapInfo>
          <StyledOption>
            {language === 'ua' ? 'Товщина кромки:' : 'Толщина кромки:'}
          </StyledOption>
          <StyledSpan>{edgeWidth ? edgeWidth : 0}</StyledSpan>
        </WrapInfo>
      ) : null}

      <HiddenOnPhone>
        <StyledItemName>
          {language === 'ua' ? 'Візуалізація порізки' : 'Визуализация порезки'}
        </StyledItemName>
        <Example $width={width} $height={height}>
          <LeftArrow></LeftArrow>
          <TopArrow></TopArrow>
          <LeftArrow $rotate={true}></LeftArrow>
          <TopArrow $rotate={true}></TopArrow>
          <ExampleItem $width={width} $height={height} $scale={scale} />
          {Array.isArray(edgeSide) &&
            edgeSide.map((edge, i) => (
              <ExampleItem
                $key={i}
                $width={width}
                $height={height}
                $scale={scale}
                $edgeside={edge}
              ></ExampleItem>
            ))}
        </Example>
      </HiddenOnPhone>
    </section>
  );
};

export default ChosenItem;
