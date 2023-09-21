
const sinon = require('sinon');
const getUser = require('./user');

describe('getUser', function () {
  it('should call getUser with the correct arguments', function () {
    const userId = 123;
    const getUserSpy = sinon.spy(getUser);

    getUserSpy(userId);

    sinon.assert.calledOnce(getUserSpy);
    sinon.assert.calledWith(getUserSpy, userId);
  });
});
