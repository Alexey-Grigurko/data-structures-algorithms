import { Node } from './Node';

export class LinkedList<E> {
  constructor() {}

  private firstNode: Node<E>;
  private lastNode: Node<E>;

  public size: number = 0;

  private linkFirst(value: E) {
    const f = this.firstNode;
    const newNode = new Node<E>(null, value, f);
    this.firstNode = newNode;
    !f ? (this.lastNode = newNode) : (f.prev = newNode);
    this.size++;
  }

  private linkLast(value: E) {
    const l = this.lastNode;
    const newNode = new Node<E>(l, value, null);
    this.lastNode = newNode;
    !l ? (this.firstNode = newNode) : (l.next = newNode);
    this.size++;
  }

  private checkIndex(index: number) {
    if (index < 0 || index >= this.size)
      throw new Error('[LinkedListError] Index out of bound Exception');
  }

  public add(value: E, index: number) {
    if (index === 0) {
      this.linkFirst(value);
      return;
    }
    if (index === this.size) {
      this.linkLast(value);
      return;
    }
    this.checkIndex(index);
    let p = this.firstNode;
    let n = p.next;
    const newNode = new Node(null, value, null);
    for (let i = 1; i <= this.size; i++) {
      if (i === index) {
        newNode.prev = p;
        newNode.next = n;
        p.next = newNode;
        n.prev = newNode;
        break;
      }
      p = n;
      n = p.next;
    }
    this.size++;
  }

  public addFirst(value: E) {
    this.linkFirst(value);
  }

  public addLast(value: E) {
    this.linkLast(value);
  }

  public remove(value: E): boolean {
    if (!this.firstNode) {
      return false;
    }
    if (this.firstNode.value === value) {
      this.firstNode = this.firstNode.next;
      this.firstNode.prev = null;
      this.size--;
      return true;
    }
    for (let n = this.firstNode; n; n = n.next) {
      if (n.value === value) {
        if (n.prev) {
          n.prev.next = n.next;
        }
        if (n.next) {
          n.next.prev = n.prev;
        }
        this.size--;
        return true;
      }
    }
    return false;
  }

  public removeFirst(): boolean {
    if (!this.firstNode) {
      return false;
    } else {
      this.firstNode = this.firstNode.next;
      this.size--;
      return true;
    }
  }

  public removeLast(): boolean {
    if (!this.lastNode) {
      return false;
    } else {
      this.lastNode = this.lastNode.prev;
      this.size--;
      return true;
    }
  }

  public get(index: number): E {
    this.checkIndex(index);
    let n = this.firstNode;
    for (let i = 1; i <= index; i++) {
      n = n.next;
    }
    return n.value;
  }

  public getFirst(): E {
    return this.firstNode.value;
  }

  public getLast(): E {
    return this.lastNode.value;
  }

  private toArray(): Node<E>[] {
    const nodes = [];
    let n = this.firstNode;
    while (n) {
      nodes.push(n);
      n = n.next;
    }
    return nodes;
  }

  public toString(): string {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}
