import * as chai from 'chai';
import b2Vec2 from '../../../src/Common/Math/b2Vec2';

const expect = chai.expect;

describe('b2Vec2', () => {
  it('should have a zero x and y component on creation', () => {
    const vec = new b2Vec2();
    expect(vec.x).to.equal(0);
    expect(vec.y).to.equal(0);
  });
});
