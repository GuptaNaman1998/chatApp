const d = new Date();

const formatMsg = (username, msg) => {
  return {
    username: username,
    msg: msg,
    time: d.toLocaleTimeString(),
  };
};

module.exports = formatMsg;
