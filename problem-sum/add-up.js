// find indices of two numbers in a list that add up to a given number
const findTwoIndices = (number, list) => {
  // set empty array to store indices (store multiple indices)
  const find = []
  // loop through list
  for (let i = 0; i < list.length; i++) {
    // set sum
    let sum = 0
    // loop through list from i+1
    for (let j = i; j < list.length; j++) {
      // add list[j] to sum
      sum += list[j]
      // check if sum is greater than number and equal to number, then push indices and break
      if (sum > number && i !== j && i !== j - 1) {
        console.log(sum - list[j], i, j)
        find.push([i, j - 1])
        break
      } else if (sum === number) {
        find.push([i, j - 1])
        break
      } else if (sum > number) {
        break
      }
    }
  }
  // show all indices
  if (find.length === 0) {
    console.log("No indices found")
  } else {
    console.log("Indices found:")
    find.forEach((indices) => {
      console.log(`[${indices[0]}, ${indices[1]}]`)
    })
  }
}

// assign number and list
let number = 34
let list = [35, 3, 77, 7, 9, 84, 9345, 2]

// call function
const result = findTwoIndices(number, list)
