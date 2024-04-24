module.exports.pranata = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
      },
      null,
      2
    ),
  };
};

module.exports.pranatapost = async (event) => {
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
