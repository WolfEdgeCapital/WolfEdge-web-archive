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

var today = new Date().toLocaleString();

// Reference messages collection
var investRef = firebase.database().ref('invest');

// Listen for form submit
document.getElementById('investForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    // Get values
    var invest_firstName = getInputVal('firstName');
    var invest_email = getInputVal('email');
    var invest_companyName = getInputVal('companyName');
    var invest_lastName = getInputVal('lastName');
    var invest_city = getInputVal('city');
    var invest_jobTitle = getInputVal('jobTitle');
    var invest_phone = getInputVal('phone');
    var invest_investType = getInputVal('investType');
    var invest_accInvestorStatus = getInputVal('accInvestorStatus');
    var invest_hearAboutUs = getInputVal('hearAboutUs');
    var invest_investment = getInputVal('investment');
    var date = today;

    $('#submitModal').modal('show');

    submitInvestData(invest_firstName, invest_email, invest_companyName, invest_lastName, invest_city, invest_jobTitle, invest_phone, invest_investType, invest_accInvestorStatus, invest_hearAboutUs, invest_investment, date);

    setTimeout(function() {
        $('#submitModal').modal('hide');
    }, 3000);
    // Clear form
    document.getElementById('investForm').reset();

}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

function submitInvestData(invest_firstName, invest_email, invest_companyName, invest_lastName, invest_city, invest_jobTitle, invest_phone, invest_investType, invest_accInvestorStatus, invest_hearAboutUs, invest_investment, date) {
    var newInvestRef = investRef.push();
    newInvestRef.set({
        firstName: invest_firstName,
        lastName: invest_lastName,
        email: invest_email,
        city: invest_city,
        company: invest_companyName,
        jobTitle: invest_jobTitle,
        phone: invest_phone,
        investmentType: invest_investType,
        accreditedInvestorStatus: invest_accInvestorStatus,
        hearAboutUs: invest_hearAboutUs,
        totalInvestment: invest_investment,
        date: date
    });
}
