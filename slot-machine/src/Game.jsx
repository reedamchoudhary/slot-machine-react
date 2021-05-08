import EmojiSet from "./EmojiSet";

const GenRandom = () => {
    var random1 = Math.floor(Math.random()*9);
    
    console.log("The value of random is :-"+random1)

    var random2 = Math.floor(Math.random()*9);
    
    console.log("The value of random is :-"+random2)
    var random3 = Math.floor(Math.random()*9);
    
    console.log("The value of random is :-"+random3)

    var statement = "";

    if(EmojiSet[random1]===EmojiSet[random2] && EmojiSet[random2]===EmojiSet[random3]){
        statement = "Yayy! It's a match!"
    }

    else{
        statement = "Nooo! It's not a match!"
    }


    return (
        <>
        <span>{EmojiSet[random1]}</span>
        <span>{EmojiSet[random2]}</span>
        <span>{EmojiSet[random3]}</span>
        <p>{statement}</p>
        </>
    )
}

function refreshPage(){
    window.location.reload();
} 


const Game = () => {
    return (
        <>
            <div className="table">
                <div className = "oneSet" id = "set1"><GenRandom /></div>
                <div className = "oneSet" id = "set2"><GenRandom /></div>
                <div className = "oneSet" id = "set3"><GenRandom /></div>
            </div>
            <button type="button" onClick={refreshPage}>Play Again</button>
        </>
    )
}

export default Game