(function() {
    for(let buyBtn of document.querySelectorAll('.buy')) {
        buyBtn.onclick = () => {
            let phone = prompt('Enter your phone: ');
            alert('Minh Phuong will contact you via number: ' + phone);
        };
    }
})();