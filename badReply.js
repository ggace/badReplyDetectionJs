let badWords = []; 

function checkBadReply(element) {
    let text = element.innerText.replaceAll(" ", "");
    text = text.replaceAll("￦n", "");
    text = text.replaceAll(".", "");
    text = text.replaceall(",", "");
    for(let word of badWords){
        if(text.indexof(word) != -1){
            return true;
        }
    }
    return false;
} 

function findBadReplyList(){
    let badReplyList = [];
    let replieList = document.querySelectorAll("");
    for(let element of replieList){
        if(checkBadReply(element.querySelector(""))){
            badReplyList.push(element);
        }
    }
    
    return badReplyList;
}

function reportReply(element){
    element.querySelector("").click();
}

function main(){
    let badReplies = findBadReplyList();
    var i = 0;
    setInterval(function(){
        reportReply(badReplies[i]);
    }, 20* 1000)
}

main();