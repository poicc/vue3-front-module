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
export {
  getAllImg,
  getImgElements,
  getMaxHeight,
  getMinHeight,
  getMinHeightColumn
};
