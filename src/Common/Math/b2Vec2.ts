/** A 2D column vector */
export default class B2Vec2 {
  public x: number;
  public y: number;

  /**
   * Create a new column vector
   * @param x the x coordinate
   * @param y the y coordinate
   */
  public constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /** Set this vector to 0 */
  public setZero(): void {
    this.x = this.y = 0;
  }

  /** Set this vector to the given coordinates */
  public set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  /** Negate this vector */
  public negate(): B2Vec2 {
    return new B2Vec2(-this.x, -this.y);
  }

  /**
   * Add another vector to this vector, storing the answer in this vector.
   * @param vec the vector to add
   */
  public add(vec: B2Vec2): void {
    this.x += vec.x;
    this.y += vec.y;
  }
}
