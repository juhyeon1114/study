function delayP(sec){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString());
        }, sec*1000);
    });
}

async function myAsync(){ 
    await delayP(3);
    return 'async';
}

myAsync().then((result)=>{
    console.log(result); // myAsync의 return 값인 'async'가 result이다.
});

/* 
    [async]
    함수 앞에 async를 붙이게 되면 promise 객체를 return하는 함수로 만들어줌.
    즉, async와 promise 의 동작은 같다.
*/

/*
    [await]   
    await은 async 함수 내에서 사용됨.
    await이 붙은 함수가 일반함수라면, await은 제 기능을 하지 않고 그냥 비동기적으로 동작함.
    await이 붙은 함수가 promise를 리턴하는 함수라면, 그 함수가 resolve가 된 후에 아래의 코드를 읽어나간다.
*/