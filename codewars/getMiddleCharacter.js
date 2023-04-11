function getMiddle(s){
  if(s.length % 2 !== 0){ //odd
    const middle = s.substr((s.length / 2) - 0.5, 1);
    return middle;
  }else{ //even
    const middle = s.substr((s.length / 2) - 1, 2);
    return middle;
  };
};
console.log(getMiddle("12345678"))