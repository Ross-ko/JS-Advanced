function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]{2,}$/;
    const mail = document.querySelector('#email');
    
    mail.addEventListener('change', isChanged);

    function isChanged(event) {
        let email = event.target.value;
        if(!pattern.test(email)){
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    }
}