fetch("https://hnm-inc.herokuapp.com/api/login", {
  method: "POST",
  body: { username: "deepanshu", password: "password" },
})
  .then((data) => {
    dispatch(loginInSuccess(data));
  })
  .catch((err) => {
    console.log(err);
  });
