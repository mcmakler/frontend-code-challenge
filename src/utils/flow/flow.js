export default function flow (funcs) {
  return function(data) {
    funcs.forEach(func => {
      data = func(data);
    });

    return data;
  };
}
