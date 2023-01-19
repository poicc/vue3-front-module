/**
 * 从 itemElement 中抽离所有的 imgElements
 */
export const getImgElements = (itemElements) => {
  const imgElements = []
  itemElements.forEach((el) => {
    imgElements.push(...el.getElementsByTagName('img'))
  })
  return imgElements
}

/**
 * 获取所有img标签的图片
 * @param {*} imgElements 
 * @returns 
 */
export const getAllImg = (imgElements) => {
  return imgElements.map(imgElement => {
    return imgElement.src
  })
}

/**
 * 监听所有的图片加载情况
 * @param {*} imgs 
 * @returns 
 */
export const onCompleteImgs = (imgs) => {
  // promise集合
  const promiseAll = []
  imgs.forEach((img, index) => {
    promiseAll[index] = new Promise((reslove, reject) => {
      const imageObj = new Image()
      imageObj.src = img
      imageObj.onload = () => {
        reslove({
          img,
          index
        })
      }
    })
  })

  return Promise.all(promiseAll)
}