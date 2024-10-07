import colors from "colors";
const logger = (req, res, next) => {
  //color object
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };
    const color = methodColors[req.method];

  console.log(`${req.method}${req.protocal}://${req.get("host")}${
    req.originalUrl
  }`[color]);
  next();
};

export default logger;
