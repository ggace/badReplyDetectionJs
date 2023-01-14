let badWords = []; 

function checkBadReply(element) {
    let text = element.innerText.replaceAll(" ", "");
    text = text.replaceAll("￦n", "");
    text = text.replaceAll(".", "");
    text = text.replaceAll(",", "");
    for(let word of badWords){
        if(text.indexOf(word) != -1){
            return true;
        }
    }
    return false;
} 

function findBadReplyList(){
    let badReplyList = [];
    let replieList = document.querySelectorAll(".comment_item.CommentView_comment_item__pDMEf");
    for(let element of replieList){
        if(checkBadReply(element.querySelector(".CommentView_comment_text__tlVgA"))){
            badReplyList.push(element);
        }
    }
    
    return badReplyList;
}

function reportReply(element){
    setTimeout(function(){element.querySelector(".MoreButtonView_button_menu__05Y26.MoreButtonView_-comment__GmpKR.MoreButtonView_-post__Zd-wn").click();}, 500);
    setTimeout(function(){element.querySelector(".ContentMetaActionLayerView_button_item__vfsVC.ContentMetaActionLayerView_-report__ptrHq").click();}, 1000);
    setTimeout(function(){document.querySelectorAll(".ModalButtonView_button__B5k-Z")[1].click();}, 1500);
}

function main(){
    let badReplies = findBadReplyList();
    var i = 0;
    setInterval(function(){
        reportReply(badReplies[i]);
        i++;
    }, 20* 1000)
}
main()
