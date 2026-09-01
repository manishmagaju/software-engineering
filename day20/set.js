const newSet = new Set([1,3,"b",4,7,"f",7,7,3,4,6,"a"]);
console.log(newSet);

const newMap = new Map([
    ["a","b"],
    [1,"b"],
    [[2,3],[4,5]],
    [{"a": 1},{"b": 2}]
])
console.log(newMap)
console.log(newMap.set("manish","boy"))
console.log(newMap.get("manish"))
console.log(newMap.has("manish"))
console.log(newMap.get([2,3]))


