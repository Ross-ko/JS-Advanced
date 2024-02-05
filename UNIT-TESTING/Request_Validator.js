function requestValidator(input) {
  let method = ["GET", "POST", "DELETE", "CONNECT"];
  if (!method.includes(input.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  let uriMask = /^(?:[a-zA-Z0-9.]+|\*)$/g;
  if (!input.uri || !input.uri.match(uriMask)) {
    throw new Error("Invalid request header: Invalid URI");
  }

  let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  if (!version.includes(input.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  let invalidChars = ["<", ">", "\\", "&", `'`, `"`];
  if (!input.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }
  for (let char of input.message) {
    if (invalidChars.includes(char)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return input;
}

requestValidator({
  method: "GET5",

  uri: "svn.public.catalog",

  version: "HTTP/1.1",

  message: "",
});
