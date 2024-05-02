//nested function

const global='global'

const parent=()=>{
    let parentVariable='parent'
    console.log(`parent variable is ${parentVariable}`);
    //console.log(`child variable is ${childVariable}`); - not possible

    const child=()=>{
        let childVariable='child'
        console.log(`parent variable is ${parentVariable}`);
        console.log(`child variable is ${childVariable}`);
    }
    child()
}

parent()