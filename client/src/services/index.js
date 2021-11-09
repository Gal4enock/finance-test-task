const { Manager } = require("socket.io-client");

const manager = new Manager("http://localhost:4000/", {
  reconnectionDelayMax: 10000
});

const socket = manager.socket("/", {
  auth: {
    token: "123"
  }
});

export default socket;
