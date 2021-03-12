import { LinkedList } from '../LinkedList';

describe('Linked List', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  test('Add value to first position', () => {
    linkedList.addFirst(1);
    linkedList.addFirst(2);
    expect(linkedList.size).toBe(2);
    expect(linkedList.toString()).toBe('2,1');
  });

  test('Add value to last position', () => {
    linkedList.addLast(2);
    linkedList.addLast(1);
    expect(linkedList.size).toBe(2);
    expect(linkedList.toString()).toBe('2,1');
  });

  test.each([
    ['to the first position', 0, '4,1,2,3'],
    ['to the last position', 3, '1,2,3,4'],
    ['to the middle', 2, '1,2,4,3'],
  ])(`Add value by index '%s'`, (s, index, res) => {
    linkedList.addFirst(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.add(4, index);
    expect(linkedList.size).toBe(4);
    expect(linkedList.toString()).toBe(res);
  });

  test('Get first value', () => {
    linkedList.addFirst(1);
    linkedList.addFirst(2);
    expect(linkedList.getFirst()).toBe(2);
  });

  test('Get last value', () => {
    linkedList.addLast(2);
    linkedList.addLast(1);
    expect(linkedList.getLast()).toBe(1);
  });

  test('Get value by index', () => {
    linkedList.add(4, 0);
    linkedList.add(1, 1);
    linkedList.add(3, 2);
    linkedList.add(2, 3);
    expect(linkedList.get(0)).toBe(4);
    expect(linkedList.get(1)).toBe(1);
    expect(linkedList.get(2)).toBe(3);
    expect(linkedList.get(3)).toBe(2);
  });

  test('Get value by invalid index and get Error', () => {
    expect(() => {
      linkedList.get(0);
    }).toThrow('[LinkedListError] Index out of bound Exception');
  });

  test('Remove first value', () => {
    linkedList.add(1, 0);
    linkedList.add(2, 1);
    expect(linkedList.removeFirst()).toBe(true);
    expect(linkedList.size).toBe(1);
    expect(linkedList.getFirst()).toBe(2);
  });

  test('Remove first with empty List', () => {
    expect(linkedList.removeFirst()).toBeFalsy();
  });

  test('Remove last value', () => {
    linkedList.add(1, 0);
    linkedList.add(2, 1);
    expect(linkedList.removeLast()).toBe(true);
    expect(linkedList.size).toBe(1);
    expect(linkedList.getLast()).toBe(1);
  });

  test('Remove last with empty List', () => {
    expect(linkedList.removeLast()).toBeFalsy();
  });

  test.each([
    ['the first', 1, '2,3,4,5'],
    ['the last', 5, '1,2,3,4'],
    ['the middle', 3, '1,2,4,5'],
  ])(`Remove '%s' value `, (s, value, res) => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.addLast(5);
    expect(linkedList.remove(value)).toBe(true);
    expect(linkedList.size).toBe(4);
    expect(linkedList.toString()).toBe(res);
  });

  test('Remove value with empty List', () => {
    expect(linkedList.remove(1)).toBe(false);
  });

  test('Remove excluded value', () => {
    linkedList.addLast(2);
    expect(linkedList.remove(1)).toBe(false);
  });
});
