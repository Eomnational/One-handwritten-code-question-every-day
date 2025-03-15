const a = async ()=>{
    console.log('1')
}

const b = ()=>{
    console.log('2')
    setTimeout(()=>{
        console.log('3')
    },0)
}

const c = async ()=>{
    console.log('4')
    await b()
    await a()
    console.log('5')
}

c().then(()=>{
    console.log('6')
})