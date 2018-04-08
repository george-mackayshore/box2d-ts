import * as chai from 'chai';
import b2Vec2 from '../../../src/Common/Math/b2Vec2';

const expect = chai.expect;

type VectorData = {
  vec: b2Vec2;
  x: number;
  y: number;
};

const createRandomVector: () => VectorData = () => {
  const x = Math.random();
  const y = Math.random();
  const vec = new b2Vec2(x, y);
  return { vec, x, y };
};

describe('new B2Vec2', () => {
  it('should have a zero x and y component on creation', () => {
    const vec = new b2Vec2();
    expect(vec.x).to.equal(0);
    expect(vec.y).to.equal(0);
  });

  it('should take an initial x and y argument on creation', () => {
    const { vec, x, y } = createRandomVector();
    expect(vec.x).to.equal(x);
    expect(vec.y).to.equal(y);
  });
});

describe('B2Vec2 operations', () => {
  it('should set vector to {0, 0} after .setZero() call', () => {
    const zeroVec = new b2Vec2();
    const { vec } = createRandomVector();
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
    const { vec, x, y } = createRandomVector();
    const neg = vec.negate();
    expect(neg.x).to.equal(-x);
    expect(neg.y).to.equal(-y);
  });

  it('should be set to the answer after a .add() call', () => {
    const { vec, x, y } = createRandomVector();
    const vec2 = createRandomVector();
    vec.add(vec2.vec);
    expect(vec.x).to.equal(x + vec2.x);
    expect(vec.y).to.equal(y + vec2.y);
  });

  it('should be set to the answer after a .subtract() call', () => {
    const { vec, x, y } = createRandomVector();
    const vec2 = createRandomVector();
    vec.subtract(vec2.vec);
    expect(vec.x).to.equal(x - vec2.x);
    expect(vec.y).to.equal(y - vec2.y);
  });

  it('should be set to the answer after a scalar .multiply() call', () => {
    const scalar = Math.random();
    const { vec, x, y } = createRandomVector();
    vec.multiply(scalar);
    expect(vec.x).to.equal(x * scalar);
    expect(vec.y).to.equal(y * scalar);
  });
});
