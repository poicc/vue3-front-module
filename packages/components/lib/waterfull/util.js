"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getImgElements = (itemElements) => {
  const imgElements = [];
  itemElements.forEach((el) => {
    imgElements.push(...el.getElementsByTagName("img"));
  });
  return imgElements;
};
const getAllImg = (imgElements) => {
  return imgElements.map((imgElement) => {
    return imgElement.src;
  });
};
const getMinHeight = (columnHeightObj) => {
  const columnHeightArr = Object.values(columnHeightObj);
  return Math.min(...columnHeightArr);
};
const getMaxHeight = (columnHeightObj) => {
  const columnHeightArr = Object.values(columnHeightObj);
  return Math.max(...columnHeightArr);
};
const getMinHeightColumn = (columnHeightObj) => {
  const minHeight = getMinHeight(columnHeightObj);
  return Object.keys(columnHeightObj).find((key) => {
    return columnHeightObj[key] === minHeight;
  });
};
exports.getAllImg = getAllImg;
exports.getImgElements = getImgElements;
exports.getMaxHeight = getMaxHeight;
exports.getMinHeight = getMinHeight;
exports.getMinHeightColumn = getMinHeightColumn;
