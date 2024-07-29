//Day-17: Data Structure

//Activity-1: Linked List

//Task-1:
class Node{
    constructor(data = undefined,nextNode = null){
        this.val = data
        this.next = nextNode
    }
}

// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// temp = head
// while(temp){
//     console.log(temp.val);
//     temp = temp.next
// }

//Task-2:
// class LinkedList{
//     head
//     constructor(){
//         this.head = null
//     }

//     display(){
//         let temp = this.head
//         while(temp){
//             console.log(temp.val);
//             temp = temp.next
//         }
//     }

//     insertEnd(val){
//         if(!this.head){
//             this.head = new Node(val)
//             return
//         }

//         let temp = this.head
//         while(temp.next){
//             temp = temp.next
//         }
//         temp.next = new Node(val)
//     }

//     removeEnd(){
//         if(!this.head.next){
//             this.head = null
//             return
//         }

//         let temp = this.head
//         while(temp.next.next){
//             temp = temp.next
//         }

//         temp.next = null
//     }
// }

// head = new LinkedList()
// head.insertEnd(1)
// head.insertEnd(2)
// head.insertEnd(3)
// head.removeEnd()
// head.insertEnd(5)
// head.display()


//Activity-2: Stack

//Task-3:
class Stack{
    constructor(){
        this.arr = new Array()
    }

    empty(){
        return this.arr.length == 0
    }

    push(val){
        this.arr.push(val)
    }

    pop(){
        this.arr.pop()
    }

    peek(){
        return this.arr[this.arr.length-1]
    }
}

function reverseStr(str){
    const st = new Stack()

    for(let i = 0;i < str.length;i++){
        st.push(str[i])
    }

    let res = ""

    while(!st.empty()){
        res += st.peek()
        st.pop()
    }

    return res
    
}

// console.log(reverseStr("LIKA"));

//Activity-3: Queue

class Queue{
    constructor(){
        this.arr = new Array()
    }

    enqueue(val){
        this.arr.unshift(val)
    }

    dequeue(){
        this.arr.pop()
    }

    front(){
        return this.arr[this.arr.length-1]
    }

    empty(){
        return this.arr.length == 0
    }
}

const pQ = new Queue()

function printerJob(pageTitle){
    
    setTimeout( () => {
        console.log(`${pageTitle} has been printed`);
    },5000)
}

function addJob(pageTitle){
    pQ.enqueue(pageTitle)
}

// addJob("Page1")
// addJob("Page2")
// addJob("Page3")
// while(!pQ.empty()){
//     printerJob(pQ.front())
//     pQ.dequeue()
// }

class TreeNode{
    constructor(val,left = null,right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(val){
        const node = new TreeNode(val)

        if(!this.root){
            this.root = node
            return
        }

        let current = this.root
        let prev = null

        while(current){
            prev = current

            if(val == current.val){
                return null
            }
            else if(val < current.val){
                current = current.left
            }else{
                current = current.right
            }
        }

        if(val < prev.val){
            prev.left = node
        }else
            prev.right = node
    }

    inOT(root = this.root){
        if(root){
        this.inOT(root.left)
        console.log(root.val);
        this.inOT(root.right)
        }
    }
}

const tree = new BinaryTree()
tree.insert(5)
tree.insert(39)
tree.insert(6)
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.inOT()