const messageReply = document.getElementById("messageReply");

document.getElementById("messageReply").addEventListener("click", function () {
    const writeMessage = document.getElementById("writeMessage");
    if(writeMessage.style.display === "none" || writeMessage.style.display === ""){
        writeMessage.style.display = "flex"
    }else{
        writeMessage.style.display = "none"
    }
})

const messageReplys = document.getElementById("messageReplys");

document.getElementById("messageReplys").addEventListener("click", function () {
    const writeMessages = document.getElementById("writeMessages");

    if(writeMessages.style.display === "none" || writeMessages.style.display === ""){
        writeMessages.style.display = "flex"
    }else{
        writeMessages.style.display = "none"
    }
})


const iconPlus = document.getElementById("iconPlus");
const iconMinus = document.getElementById("iconMinus");
const numberCount = document.getElementById("numberCount");
const messageText = document.getElementById("messageText");
const replySend = document.getElementById("replySend");
const sendReply = document.getElementById("sendReply");


let messages = [messageText.textContent];
let currentIndex = 0;


const updateMessage = () => {
    messageText.textContent = messages[currentIndex];
    numberCount.textContent = currentIndex + 1; 
};


sendReply.addEventListener('click', () => {
    const replyMessage = replySend.value.trim(); 

    if (replyMessage) {
      
        messages.push(replyMessage);        
        currentIndex = messages.length - 1;
        updateMessage();
        replySend.value = '';
    }
});

iconPlus.addEventListener('click', () => {
    if (currentIndex < messages.length - 1) {
        currentIndex++;
        updateMessage();
    }
});


iconMinus.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMessage();
    }
});


const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const numberCounts = document.getElementById("numberCounts");
const messageTexts = document.getElementById("messageTexts");
const replySends = document.getElementById("replySends");
const sendReplys = document.getElementById("sendReplys");

let message = [messageTexts.textContent];
let currentlyIndex = 0;

const updateMessages = () => {
    messageTexts.textContent = message[currentlyIndex];
    numberCounts.textContent = currentlyIndex + 1;
};
sendReplys.addEventListener('click', () => {
    const replyMessages = replySends.value.trim();

    if(replyMessages){
        message.push(replyMessages);
        currentlyIndex = message.length - 1;
        updateMessages();
        replySends.value = '';
    }
});

forward.addEventListener('click', () => {
    if (currentlyIndex < message.length - 1) {
        currentlyIndex++;
        updateMessages();
    }
});

backward.addEventListener('click', () => {
    if (currentlyIndex > 0) {
        currentlyIndex--;
        updateMessages();
    }
})