
let myname = "happy"
const mylist: string[] = ['hello', 'happy', 'emart']

type Language = 'TypeScript' | 'JavaScript' | 'Python' | 'Rust' | 'Haskell';

console.log(
    `hello ${myname} ${mylist[0]}, ${mylist[1]} ${mylist[2]}`
)

function getElement<T>(arr:T[]):T {

    let lengthOfArr:number = arr.length

    arr.forEach(
        (item) => {
            console.log(item)
        }
    )
    return arr[lengthOfArr-1]
}


function nothing(count:number) {

    let num_list = 0;

    for (let i = 0; i < count; i++) {
        num_list += i
    }
    return num_list
    
}

// let nothing_two = () => console.log("hello nothing_two")

// nothing_two()
// console.log(nothing(10))


console.log(getElement(mylist))