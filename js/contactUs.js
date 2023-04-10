// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
   apiKey: "AIzaSyD_fzqtBpCR9MPfPcASRc6febUxft7qG5k",
   authDomain: "wolfedge-contact.firebaseapp.com",
   databaseURL: "https://wolfedge-contact.firebaseio.com",
   projectId: "wolfedge-contact",
   storageBucket: "wolfedge-contact.appspot.com",
   messagingSenderId: "563951652971"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
var investRef = firebase.database().ref('invest');

var today = new Date().toLocaleString();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    var date = today;
    $('#submitContactModal').modal('show');
    // Save message
    saveMessage(name, email, phone, message, date);
    setTimeout(function() {
        $('#submitContactModal').modal('hide');
    }, 2000);
    // Clear form
    document.getElementById('contactForm').reset();

}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name, email, phone, message, date) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
        date: date
    });
}
