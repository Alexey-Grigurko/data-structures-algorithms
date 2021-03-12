export class Node<E> {
  constructor(
    public prev: Node<E> | null = null,
    public value: E,
    public next: Node<E> | null = null
  ) {}

  toString(): string {
    return `${this.value}`;
  }
}
