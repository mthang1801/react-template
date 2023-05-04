const getMessage = (data : any, icon?: any) => {
  if (data !== undefined && data !== null) {
    let check = data;
    let result = "";
    if (Array.isArray(check)) {
      for (let i = 0; i < check.length; i++) {
        result += check[i];
        if (i !== check.length - 1) {
          result += icon || "\n";
        }
      }
    } else {
      result = data;
    }
    return result;
  }
  return "";
};

export default getMessage;