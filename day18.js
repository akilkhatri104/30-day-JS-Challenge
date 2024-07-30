// Day-18: Algorithms

const { min } = require("lodash")

//Activity-1: Sorting

//Task-1:
function bubbleSort(arr = []){
    const n = arr.length
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n-i+1;j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
    }
}

// const arr = [1,5,3,20,10,2]
// console.log(arr);
// bubbleSort(arr)
// console.log(arr);

//Task-2:
function selectionSort(arr = []){
    const n = arr.length
    for(let i = 0;i < n-1;i++){
        let minIndex = i
        for(let j = i+1;j < n;j++){
            minIndex = (arr[j] < arr[minIndex])?(j):(minIndex)
        }
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}

// const arr = [1,5,3,20,10,2]
// console.log(arr);
// selectionSort(arr)
// console.log(arr);

// Task-3: Quick

//Activity-2: Searching

//Task-4:
function linearSearch(arr = [],key = undefined){
    if(key === undefined){
        console.log("Given key is undefined");
        return
    }

    if(arr == []){
        console.log("Given array is empty");
        return
    }

    for(let i = 0;i < arr.length;i++){
        if(arr[i] == key)
            return i
    }

    return -1
}

// const arr = [2,32,1,56,23]
// console.log(linearSearch(arr,51));

//Task-5:
function binarySearch(arr = [],key = undefined){
    if(key === undefined){
        console.log("Given key is undefined");
        return
    }

    if(arr == []){
        console.log("Given array is empty");
        return
    }

    let low = 0
    let high = arr.length-1

    while(low<high){
        let mid = Math.floor((high+low)/2)

        if(arr[mid] == key)
            return mid
        else if(arr[mid] > key)
            high = mid
        else 
            low = mid
    }

    return -1
}

// const arr = [1,2,3,4,5,6,19,243]
// console.log(binarySearch(arr,5));

// Activity-3: String 

//Task-6:
function countChar(str = ""){
    let count = 0

    Array.from(str).forEach( (c) => {
        if(c != " ")
            count++
    } )

    return count
}
// console.log(countChar("Akil Khatri"));

//Task-7:
function longestSubstring(str = ""){
    let windowStart = 0
    const map = {}
    let res = ""
    let maxLen =  0  

    for(let windowEnd = 0;windowEnd < str.length;windowEnd++){
        if(!map[str[windowEnd]]){
            map[str[windowEnd]] = 0
        }
        map[str[windowEnd]]++

        while(map[str[windowEnd]] > 1){
            map[str[windowStart]]--
            windowStart++
        }

        if(windowEnd-windowStart+1 > maxLen){
            maxLen = windowEnd-windowStart+1
            res = str.substring(windowStart,windowEnd+1)
        }
    }

    return res
}

// console.log(longestSubstring(""));

//Activity-4: Array
//Task-8:
function rotateByK(arr = [],k = 0){
    const n = arr.length
    const i = n-k

    const firstHalf = arr.slice(0,i)
    const secondHalf = arr.slice(i,n)

    return [...secondHalf,...firstHalf]

}

// const nums = [1,2,3,4,5,6,7], k = 3
// console.log(rotateByK(nums,k));

//Task-9:
function mergeSortedArray(nums1 = [],nums2 = []){
    let i1 = 0
    let i2 = 0
    let r = 0
    const res = []

    while(i1 < nums1.length && i2 < nums2.length){
        if(nums1[i1] < nums2[i2]){
            res[r] = nums1[i1]
            i1++
        }else{
            res[r] = nums2[i2]
            i2++
        }

        r++
    }

    if(i1 < nums1.length){
        res.push(...nums1.slice(i1,nums1.length))
    }else{
        res.push(...nums2.slice(i2,nums2.length))
    }

    return res
}

console.log(mergeSortedArray([1,3,5,7,9],[2,4,6,8,10]));