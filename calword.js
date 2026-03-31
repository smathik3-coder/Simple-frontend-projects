function calculate() {
    // Textarea-la irukku value-vai edukkurom
    const text = document.getElementById("writeyourmessage").value;

    // Spaces-ai trim panni, empty strings-ai filter pandrom
    const words = text.trim().split(/\s+/);
    
    // Oru vaarthai kooda illana count 0, illana length-ai edukkurom
    const wordCount = text.trim() === "" ? 0 : words.length;

    // Result-ai button-laye display pandrom (neenga kudutha ID-padi)
    document.getElementById("displayResult").innerText =  wordCount;
}