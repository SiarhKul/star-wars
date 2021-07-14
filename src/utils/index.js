export const getAbbreviation = str => {
  const formatedStr = str.match(/[a-zA-Z0-9]/g).join('');
  const hasNumber = /[0-9]/.test(formatedStr);
  return hasNumber
    ? formatedStr.slice(0, 2)
    : formatedStr.match(/[A-Z]/g).join('');
};
