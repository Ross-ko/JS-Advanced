function encodeAndDecodeMessages() {
    const messageEl = document.querySelectorAll("textarea")[0];
    const receivedMsgEl = document.querySelectorAll("textarea")[1];
    const encodeBtn = document.querySelectorAll("button")[0];
    const decodeBtn = document.querySelectorAll("button")[1];

    encodeBtn.addEventListener('click', encode);

    function encode() {
        let message = messageEl.value;
        let encodeMsg = '';
        for (let i = 0; i < message.length; i++) {
            encodeMsg += String.fromCharCode(message.charCodeAt(i) + 1);
        }
        messageEl.value = '';
        receivedMsgEl.value = encodeMsg;
    }

    decodeBtn.addEventListener('click', decode);
    
    function decode() {
        let receivedMsg = receivedMsgEl.value;
        let decodedMsg = '';
        for (let i = 0; i < receivedMsg.length; i++) {
            decodedMsg += String.fromCharCode(receivedMsg.charCodeAt(i) - 1);
        }
        receivedMsgEl.value = decodedMsg;
    }
}