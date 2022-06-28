

class myPromise {
    // promise有三种状态 初始pending fulfilled rejected
    // pennding可以转为fulfilled和rejected 但是都不能逆转
    static PENDING = '待定';
    static FULFILLED = '成功';
    static REJECTED = '拒绝';

    constructor(func) {

        // 为每个实例添加初始状态属性
        this.status = myPromise.PENDING;
        // 为每个实例添加result属性用于resolve和reject传参
        this.result = null;
        // 让then比resolve后执行
        // 一个保存resolve函数，一个保存reject函数
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        
        try {
            // 使用bind解决class指向问题
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch(error) {
            //捕捉执行异常
            this.reject(error);
        }
        
    };
    
    resolve(result) {
        setTimeout(() => {
            // 先判断状态
            if(this.status === myPromise.PENDING) {
                this.status = myPromise.FULFILLED;
                // 传参
                this.result = result;
                // 遍历数组进行执行
                this.resolveCallbacks.forEach(callback => {
                    callback(result);
                });
             }
        })     
    };

    reject(result) {
        setTimeout(() => {
            // 先判断状态
            if(this.status === myPromise.PENDING) {
                this.status = myPromise.REJECTED;
                // 传参
                this.result = result;
                this.rejectCallbacks.forEach(callback => {
                    callback(result);
                });
            }
        })
    };

    // 携带两个参数
    then(onFULFILLED, onREJECTED) {
        // (Promise规定then的两个参数不是函数就要忽略)
        // 对于参数，将不是函数的参数转为函数
        onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {};
        onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {};
        
        if(this.status === myPromise.PENDING) {
            // 将then的参数分别存入数组中
            this.resolveCallbacks.push(onFULFILLED);
            this.rejectCallbacks.push(onREJECTED);
        }
        // 状态判断,模拟then的两个参数
        if(this.status === myPromise.FULFILLED) {
            // 异步设置,将任务放入任务队列中,和同步任务区分开
            setTimeout(() => {
                onFULFILLED(this.result);
            });
        }
        if(this.status === myPromise.REJECTED) {
            // 异步设置
            setTimeout(() => {
                onREJECTED(this.result);
            });
            
        }
    }


}


console.log('第一步');
// 创建实例
let tryPromise = new myPromise((resolve, reject) => {
    console.log('第二步');
    setTimeout(() => {
        resolve('animuss');
        reject('annn');
        console.log('第四步');
    });
});
tryPromise.then(
    result => {console.log(result)},
    result => {console.log('嗨嗨嗨')}
);
console.log('第三步');