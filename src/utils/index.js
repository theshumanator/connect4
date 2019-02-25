function checkConnect (array, index) {
    const column = index % 6
    let deepIndex = column + 6 * 3
    let row = 0
    let collArr = []
    while (deepIndex >= column) {
        collArr.unshift(array[deepIndex])
        if (array[deepIndex] === 'placeholder') {;
            array[deepIndex] = 'userEmoji';
            row = Math.floor(deepIndex / 6)
            break;
        }
        deepIndex -= 6
    }
    const rowArr = array.slice(6 * row, (6 * row) + 6 )
    console.log(collArr)
    if (collArr.length === 4)
    console.log(rowArr)
}

checkConnect(Array(24).fill('placeholder'), 22)