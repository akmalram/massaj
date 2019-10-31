window.addEventListener("load", () => {
    const modalToggler = (buttonClass, modalClass) => {
        let btn = document.querySelectorAll(buttonClass),
            modal = document.querySelector(modalClass),
            closetBtn = document.querySelector(`${modalClass} .close-btn`),
            modalBackground = document.querySelector(`${modalClass} .modal-background`);
    
        btn.forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.add('active'); 
            });
        });
    
        [closetBtn, modalBackground].forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        });
    }
    
    modalToggler('.call-order-btn', '.call-order-modal');
    modalToggler('.register-modal-btn', '.register-modal');
})