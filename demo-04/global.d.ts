interface Array<T> {
  getSum(): T extends number ? number : void;
}