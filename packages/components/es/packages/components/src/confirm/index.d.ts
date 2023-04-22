/**
 * 展示Confrim 若用户只传递一个参数 就会作为content
 * @param {*} title 标题(若不传内容 标题就会作为内容)
 * @param {*} content 内容(若不传标题 内容就会作为标题)
 * @param {*} cancelText 取消按钮文本
 * @param {*} confirmText 确定按钮文本
 * @returns
 */
declare const confirm: (title: any, content: any, cancelText?: string, confirmText?: string) => Promise<unknown>;
export default confirm;
