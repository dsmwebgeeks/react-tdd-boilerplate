function emptyStub() {
  let callCount = 0,
    args = [];

  function _stub() {
    callCount++;
    args.push(arguments);
  };

  _stub.wasCalledOnce = () => callCount > 0;
  _stub.wasCalledOnlyOnce = () => callCount === 1;
  _stub.wasNotCalled = () => callCount === 0;

  Object.defineProperty(_stub, 'firstCallArgs', {
    get: () => args.length > 0 ? args[0] : null
  });

  Object.defineProperty(_stub, 'lastCallArgs', {
    get: () => args.length > 0 ? args[args.length - 1] : null
  });

  return _stub;
}

export default {};

export {
  emptyStub as stub
};
