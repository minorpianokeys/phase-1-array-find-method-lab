const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function isW(obj) {
    return (obj["result"] === "W")
}

function superbowlWin(array) {
    const winner = array.find(isW)
    if (winner === undefined) {
        return undefined
    } else {
        return winner["year"]
    }
}
