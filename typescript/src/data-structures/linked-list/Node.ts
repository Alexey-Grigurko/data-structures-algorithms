export class Node<T> {
  constructor(
    public prev: Node<T> | null = null,
    public value: T,
    public next: Node<T> | null = null
  ) {}

  toString(): string {
    return `${this.value}`;
  }
}
