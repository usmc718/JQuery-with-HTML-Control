// Inside the login form submit event handler
// Assuming the login fails
$('#errorMessage').text('Incorrect username or password').show();
$('#username, #password').val('');
// Assuming dropdown has id="ticketType"
$('#ticketType').change(function(){
    var selectedTicket = $(this).val();
    $('.formFields').hide(); // Assuming all form fields have class="formFields"
    if(selectedTicket === 'computer') {
        $('#computerFields').show(); // Assuming computer-related fields have id="computerFields"
    } else if(selectedTicket === 'software') {
        $('#softwareFields').show(); // Assuming software-related fields have id="softwareFields"
    } else if(selectedTicket === 'network') {
        $('#networkFields').show(); // Assuming network-related fields have id="networkFields"
    }
});
