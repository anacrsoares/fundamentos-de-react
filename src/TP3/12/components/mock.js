export const fullNumberList = Array.from({ length: 300 }, () =>
  Math.floor(Math.random() * 6)
);
export const emptyNumberList = [];


function choiceList() {
    const choice = Math.random() < 0.5;
    return choice ? fullNumberList : emptyNumberList;
  }
  
  
export const randomNumberList = choiceList();