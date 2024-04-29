module.exports.firsthandler = async (event) => {
  console.log(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is get function!",
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
  console.log(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is post function!",
      },
      null,
      2
    ),
  };
};
