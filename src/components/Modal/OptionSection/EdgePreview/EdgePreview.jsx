import React from "react";
import {
  ChoiceWrap,
  FieldChoiceBottom,
  FieldChoiceLeft,
  FieldChoiceRight,
  FieldChoiceTop,
  SpanLabel,
  StyledInputCheckbox,
} from "./EdgePreview.styled";
//import PropTypes from 'prop-types';
import { StyledBlockName } from "../OptionSection.styled";
import { useTranslation } from "react-i18next";

const EdgePreview = ({ setEdgeSide, edgeSide }) => {
  const { t } = useTranslation("edgePreview");

  const handleChange = ({ target }) => {
    const { value, checked } = target;
    // Toggle the value in the state based on checkbox checked status
    setEdgeSide((prev) =>
      checked
        ? [...prev, value]
        : [...prev.filter((choice) => choice !== value)]
    );
  };

  const renderCheckbox = (name, label) => {
    // Determine if the checkbox should be checked based on edgeSide
    const isChecked = edgeSide.includes(name);
    return (
      <>
        <StyledInputCheckbox
          onChange={handleChange}
          className="validate-variable-product-one-required"
          type="checkbox"
          name={name}
          value={name}
          checked={isChecked} // Set the checked attribute based on edgeSide
        />
        <label htmlFor={`rounded_corners_${name}`}>
          <SpanLabel>{label}</SpanLabel>
        </label>
      </>
    );
  };

  return (
    <div className="edge-preview">
      <label className="label">
        <StyledBlockName>{t("edge-preview")}</StyledBlockName>
      </label>
      <div className="height-width-container">
        <div className="height-width">
          <div className="control">
            <ChoiceWrap>
              {[
                { name: "top-choice" },
                { name: "left-choice" },
                { name: "choice-bottom" },
                { name: "choice-right" },
              ].map(({ name, label }) => (
                <React.Fragment key={name}>
                  {name === "top-choice" && (
                    <FieldChoiceTop>
                      {renderCheckbox(name, label)}
                    </FieldChoiceTop>
                  )}
                  {name === "left-choice" && (
                    <FieldChoiceLeft>
                      {renderCheckbox(name, label)}
                    </FieldChoiceLeft>
                  )}
                  {name === "choice-bottom" && (
                    <FieldChoiceBottom>
                      {renderCheckbox(name, label)}
                    </FieldChoiceBottom>
                  )}
                  {name === "choice-right" && (
                    <FieldChoiceRight>
                      {renderCheckbox(name, label)}
                    </FieldChoiceRight>
                  )}
                </React.Fragment>
              ))}
            </ChoiceWrap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgePreview;
