class SimpleCounter {
  name?: string;
  value?: number;

  constructor(name = "", value = 0) {
    this.name = name;
    this.value = value;
  }
}

export default SimpleCounter;
