// 建立map，遍历字符串，将所有的左括号都存入`栈`，然后当遇到右括号时，栈顶元素进行匹配，效率不太高
var isValid = function(s) {
    const stack = [];
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    for(let i=0; i< s.length; i++){
        if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
            //入栈
            stack.push(s[i]);
        } else {
            if(stack.length == 0){
                //栈是空的，没有匹配的，说明右括号在前面
                return false;
            }
            //标记栈顶  stack.pop是删除并返回最后一个值
            const top = stack.pop();
            if(top == map.get(s[i])){
                continue;
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
};