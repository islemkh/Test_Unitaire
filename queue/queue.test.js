const{
init ,
getCapacity,
getSize,
isEmpty,
isFull,
addLast,
removeFirst,

} = require("./queue.js")


describe("test the queue initialize",()=>{
    test("should return an object with array and an initialized capacity",()=>{
        for(i=0;i<100;i++)
        let expected={
            list:[],
            capacity:10
        }
        expected(init(i)).toStrictEqual(expected)

    })

    test("should return an exception  with array and an initialized capacity",()=>{
      const capacity = -1
      //expected(()=> init(capacity)).toThrow())

        expected(()=> init(capacity)).toThrowError(/capacity/gi)
    })
})

describe("test the get capacity function ",()=>{

    test("should throw an error if the queue has a wrong structure",()=>{

        const queue ={listValues:[], capacityOfList:10}

        expected(()=> getCapacity(queue).toThrowError(/queue/gi))
})

test("should return the right capacity",()=>{

    for(i=0; i< 10;i++){
        const queue = {list:[],capacity:i}
    }
    const expected=i;
    expected(getCapacity(queue).toBe(expected))

    expected(()=> getCapacity(queue).toThrowError(/queue/gi))
})
})



describe("test the get size function ", ()=>{
    test("throw an error if the queue parameter has a wrong ",()=>{

        const queue = {list:[],capacity:i}
        expected(()=> getCapacity(queue).toThrowError(/queue/gi))
    })
    test("return the right size ",()=>{
        let queue = {list:[],capacity:2}
        let expected =0
        expected(getSize(queue).toBe(expected))

         queue = {list:[5],capacity:2}
         expected = 1
         expected(getSize(queue).toBe(expected))

         queue = {list:[5,7],capacity:10}
         expected = 2
         expected(getSize(queue).toBe(expected))
    })
})



describe("test if the queue is empty ", ()=>{
    test("should the function return true ",()=>{
      const  queue = {list:[],capacity:10}
      expected = true
      expected(isEmpty(queue).toBe(expected))
    })

    test("should the function return true ",()=>{
        const  queue = {list:[2],capacity:10}
        expected = false
        expected(isEmpty(queue).toBe(expected))

    })

})
describe("test if the queue is full ", ()=>{
    test("should the function return true ",()=>{
      const  queue = {list:[2,10],capacity:2}
      expected = true
      expected(isEmpty(queue).toBe(expected))
    })

    test("should the function return false ",()=>{
        const  queue = {list:[2],capacity:10}
        expected = false
        expected(isFull(queue).toBe(expected))

    })
})

describe("test add element to a queue ", ()=>{
    test("should the element be a number",()=>{
      const  queue = {list:[2],capacity:10}
      const element = "element 1"
      expected(()=> addLast(queue,element)).toThrowError(/number/gi)
    })

    test("should the element be add to an empty queue ",()=>{
        const  queue = {list:[],capacity:2}
      const element = 20
      const expected ={
          list:[element],capacity:2}
     
        expected(addLast(queue,element)).toStrictEqual(expected)
    
    })
    test("should the element be add to a not empty queue ",()=>{
        const  queue = {list:[10],capacity:2}
      const element = 20
      const expected ={
          list:[10,element],capacity:2}
     
        expected(addLast(queue,element)).toStrictEqual(expected)
    
    })
    test("should the element be add to a full  queue ",()=>{
        const  queue = {list:[10,20],capacity:2}
      const element = 30
      const expected ={
          list:[10,20],capacity:2}
     
        expected(addLast(queue,element)).toStrictEqual(expected)
    
    })

})
describe("test remove first to a queue ", ()=>{

    test("should the element remove",()=>{
      const  queue = {list:[2,3],capacity:10}
      expected = {list:[3],capacity:10}
      expected(()=> removeFirst(queue)).toStrictEqual(expected)
    })

    test("should the list vide ",()=>{
        const  queue = {list:[],capacity:10}  
        expected(()=> removeFirst(queue)).toThrowError(/vide/gi)
      })
}) 