// const SubExist =(str)=>{
//     const arrstr = str.split(" ");
//     let cnt = 0;
//     arrstr.forEach(element => {
//     if (element.toUppercase() =='Lorem'.toLowerCase()){
//         cnt=cnt+1;
//     }
//     });
//     return cnt;
// }
// const strData= 'Lorem ipsum set amet Lorem';

// console.log (SubExist(strData));

const SuExist = (str) => {
  return str.split(" ").filter((item) => item === "Lorem").length;
};
const strData = "Lorem ipsum set amet Lorem";
console.log(SubExist(strData));
