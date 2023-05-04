import socket from "src/helpers/socket.io";

export function ConnectionManager() {
  function connect() {
    socket().connect();
  }

  function disconnect() {
    socket().disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}