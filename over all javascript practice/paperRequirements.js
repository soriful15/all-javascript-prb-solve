function paperRequirements(paper1,paper2,paper3){
    let firstBookPaper = 100;
    let secondBookPaper = 200;
    let thirdBookPaper = 300;
    let firstBookPaperAll =paper1*firstBookPaper;
    let secondBookPaperAll =paper2* secondBookPaper;
    let thirdBookPaperAll =paper3* thirdBookPaper;
    let overAllPage = firstBookPaperAll+secondBookPaperAll+thirdBookPaperAll;
    return overAllPage;
    

}
console.log(paperRequirements(3,4,5))