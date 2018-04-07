import * as chai from 'chai';
import b2Vec2 from '../../../src/Common/Math/b2Vec2';

const expect = chai.expect;

describe('B2Vec2', () => {
  it('should have a zero x and y component on creation', () => {
    const vec = new b2Vec2();
    expect(vec.x).to.equal(0);
    expect(vec.y).to.equal(0);
  });

  it('should take an initial x and y argument on creation', () => {
    const x = Math.random();
    const y = Math.random();
    const vec = new b2Vec2(x, y);
    expect(vec.x).to.equal(x);
    expect(vec.y).to.equal(y);
  });

  it('should be set to {0, 0} after .setZero() call', () => {
    const zeroVec = new b2Vec2();
    const x = Math.random();
    const y = Math.random();
    const vec = new b2Vec2(x, y);
    vec.setZero();
    expect(vec.x).to.equal(0);
    expect(vec.y).to.equal(0);
  });
});
