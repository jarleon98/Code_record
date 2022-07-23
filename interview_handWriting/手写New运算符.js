
const Fun = (age, name) => {
    this.age = age;
    this.name = name;
};

const myNew = (fn, ...args) => {
    // 1. 创建空对象
    var obj = Object.create({});
    // 2. 将空对象的原型指向构造函数原型
    Object.setPrototypeOf(obj, fn.prototype);
    // 3. 将空对象作为构造函数的上下文 改变this指向
    var result = fn.apply(obj.args);
    // 4. 返回值判断， 基本类型还是引用类型
    return result instanceof Object ? result : obj;
}

console.log(myNew(Fun, 18, 'Animuss'));