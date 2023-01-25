//!Mariia Batanova

//Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.
// Зміниться метод повернути інформацію про товар.

class Product {
    constructor(name, price, currency, amount) {
      this.name = name;
      this.price = price;
      this.currency = currency;
      this.amount = amount;
    }
    set name(value) {
      if (typeof value !== "string") {
        throw new TypeError("Name must be string");
      }
      if (value.length === 0) {
        throw new RangeError("Name cant be empty");
      }
      this._name = value;
    }
    get name() {
      return this._name;
    }
    set price(value) {
      if (typeof value !== "number") {
        throw new TypeError("price must be number");
      }
      if (value < 0) {
        throw new RangeError("price must be bigger than 0");
      }
      this._price = value;
    }
    get price() {
      return this._price;
    }
    set currency(value) {
      if (typeof value !== "string") {
        throw new TypeError("currency must be string");
      }
      if (value.length === 0) {
        throw new RangeError("currency cant be empty");
      }
      this._currency = value;
    }
    get currency() {
      return this._currency;
    }
    set amount(value) {
      if (typeof value !== "number") {
        throw new TypeError("amount must be number");
      }
      if (value < 0) {
        throw new RangeError("amount must be bigger than 0");
      }
      this._amount = value;
    }
    get amount() {
      return this._amount;
    }
    get productInfo() {
      return `Name:${this._name}\nPrice:${this._price} ${this._currency}\nAmount:${this._amount}\n`;
    }
    buy(value) {
      if (typeof value !== "number") {
        throw new TypeError("Amount must be number");
      }
      if (value > this._amount || value < 0) {
        throw new RangeError("AmountSale must be 0...currentAmount");
      }
      const sellPrice = value * this._price;
      this._amount -= value;
      return sellPrice;
    }
  }
  
  class PhysicalProduct extends Product {
    constructor(name, price, currency, amount, weight) {
      super(name, price, currency, amount);
      this.weight = weight;
    }
    set weight(value) {
      if (typeof value !== "number") {
        throw new TypeError("weight must be number");
      }
      if (value < 0) {
        throw new RangeError("weight must be bigger than 0");
      }
      this._weight = value;
    }
    get weight() {
      return this._weight;
    }
    get productInfo() {
      return super.productInfo + `Weight: ${this._weight}`;
    }
  }
  
  class VirtualProduct extends Product {
    constructor(name, price, currency, amount, memory) {
      super(name, price, currency, amount);
      this.memory = memory;
    }
    set memory(value) {
      if (typeof value !== "number") {
        throw new TypeError("memory must be number");
      }
      if (value < 0) {
        throw new RangeError("memory must be bigger than 0");
      }
      this._memory = value;
    }
    get memory() {
      return this._memory;
    }
    get productInfo() {
      return super.productInfo + `Memory: ${this._memory}`;
    }
  }
  
  try {
    const product1 = new PhysicalProduct("Milk", 30, "EUR", 10, 1);
    console.log(product1.buy(4));
    const product2 = new VirtualProduct("Chrome", 20, "EUR", 5, 2);
    console.log(product2.buy(4));
    console.log(product2.buy(4));
  } catch (error) {
    console.log(error);
  }