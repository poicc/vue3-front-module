var durationExports = {};
var duration = {
  get exports() {
    return durationExports;
  },
  set exports(v) {
    durationExports = v;
  }
};
export {
  duration as __module,
  durationExports as exports
};
