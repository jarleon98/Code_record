/**
 * 
 * vue有个编译器模块compiler ，将用户编写的template编译为js中可执行的render函数
 * 
 * vue会先对template进行解析：parse。得到一个js对象：抽象语法树AST。对AST进行深加工的转换过程，称为transform。
 * 最后将得到的AST生成为js代码：render函数。
 * 
 * 
*/