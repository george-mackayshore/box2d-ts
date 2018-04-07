import * as chai from 'chai';
import b2Vec2 from '../../../src/Common/Math/b2Vec2';

const expect = chai.expect;

const createRandomVector: () => b2Vec2 = () => {
  const x = Math.random();
  const y = Math.random();
  return new b2Vec2(x, y);
};

describe('new B2Vec2', () => {
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
});

describe('B2Vec2 operations', () => {
  it('should set vector to {0, 0} after .setZero() call', () => {
    const zeroVec = new b2Vec2();
    const vec = createRandomVector();
    vec.setZero();
    expect(vec.x).to.equal(0);
    expect(vec.y).to.equal(0);
  });

  it('should set vector to {x, y} set after .set(x, y) call', () => {
    const x = Math.random();
    const y = Math.random();
    const vec = new b2Vec2();
    vec.set(x, y);
    expect(vec.x).to.equal(x);
    expect(vec.y).to.equal(y);
  });

  it('should be negated after a .negate() call', () => {
    const vec = createRandomVector();
    const { x, y } = vec;
    const neg = vec.negate();
    expect(neg.x).to.equal(-x);
    expect(neg.y).to.equal(-y);
  });

  it('should be set to the answer after a .add() call', () => {
    const vec1 = createRandomVector();
    const { x, y } = vec1;
    const vec2 = createRandomVector();
    vec1.add(vec2);
    expect(vec1.x).to.equal(x + vec2.x);
    expect(vec1.y).to.equal(y + vec2.y);
  });

  it('should be set to the answer after a .subtract() call', () => {
    const vec1 = createRandomVector();
    const { x, y } = vec1;
    const vec2 = createRandomVector();
    vec1.subtract(vec2);
    expect(vec1.x).to.equal(x - vec2.x);
    expect(vec1.y).to.equal(y - vec2.y);
  });
});
