const chai = require("chai");
global.expect = chai.expect;
const hasTargetSum = require("../index");

describe("hasTargetSum", () => {
  it("returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10", () => {
    expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
  });
  it("returns true when the array is [22, 19, 4, 6, 30] and the target is 25", () => {
    expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
  });
  it("returns false when the array is [1, 2, 5] and the target is 4", () => {
    expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
  });
  it("returns true when the array is [-7, 10, 4, 8] and the target is 3", () => {
    expect(hasTargetSum([-7, 10, 4, 8], 3)).to.be.true;
  });
  it("returns true when the array is [1, 2, 3, 4] and the target is 5", () => {
    expect(hasTargetSum([1, 2, 3, 4], 5)).to.be.true;
  });
  it("returns true when the array is [2, 2, 3, 3] and the target is 4", () => {
    expect(hasTargetSum([2, 2, 3, 3], 4)).to.be.true;
  });
  it("returns false when the array is [4] and the target is 4", () => {
    expect(hasTargetSum([4], 5)).to.be.false;
  });
});
