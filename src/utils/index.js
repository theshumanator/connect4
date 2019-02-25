function checkConnect (array, currentPlayer, index) {    

    //console.log(array)
    //console.log(index, currentPlayer)
    const column = index % 6
    let deepIndex = column + 6 * 3
    let row = 0
    let collArr = []
    while (deepIndex >= column) {        
        if (array[deepIndex] === 'placeholder') {
            array[deepIndex] = currentPlayer;
            collArr.unshift(currentPlayer);        
            row = Math.floor(deepIndex / 6)
            break;
        } else {
            collArr.unshift(array[deepIndex]);
        }
        deepIndex -= 6
    }
    const rowArr = array.slice(6 * row, (6 * row) + 6 )
    console.log(rowArr);
   
    let foundColWinner = false;    
    if (collArr.length === 4) {        
        const regex = new RegExp(currentPlayer, 'g')        
        if (collArr.join('').match(regex).length === 4) {
            foundColWinner=true;
        }
    }
    let matchCount = 0;
    let foundRowWinner = false;
    for (let x=1; x<rowArr.length; x++) {   
        console.log(matchCount);
        //if (x!==0) {
            if (rowArr[x] === rowArr[x-1] && row[x] === currentPlayer) {
                matchCount++;
                if (matchCount===3) {
                    foundRowWinner=true;
                    break;
                }
            } else {
                matchCount=0;
            } 
        //}
    }
    
    return (foundColWinner || foundRowWinner) 

    //TODO if no winner across board

}

export default checkConnect;