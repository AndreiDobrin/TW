window.onload = function(){
    const check = document.getElementById("check1");
    function checkCheck(){
        if(check.checked == true){
            img1.style.opacity = '1';
            img2.style.opacity = '0';
        }
        else{
            img1.style.opacity = '0';
            img2.style.opacity = '1';
        }
    }
        document.getElementById('totalAmount').textContent = initializeTotal().toFixed(2)
        // Init din storage; daca nu exista => 0
        function initializeTotal() {
            const storedTotal = localStorage.getItem('houseTotal');
            return storedTotal ? parseFloat(storedTotal) : 0;
        }

        // Actualizare display si storage
        function updateTotal(amount) {
            const totalElement = document.getElementById('totalAmount');
            totalElement.textContent = amount.toFixed(2);
            localStorage.setItem('houseTotal', amount);
        }

        // ++
        function addToTotal() {
            const currentTotal = initializeTotal();
            let newTotal = currentTotal + 2250000;
            updateTotal(newTotal);
        }

        // Reset
        function resetTotal() {
            updateTotal(0);
        }

        document.getElementById('buy').addEventListener('click', addToTotal)
        document.getElementById('reset').addEventListener('click', resetTotal)

/*        
        const img1 = document.getElementById("img1");
        const img2 = document.getElementById("img2");
        setInterval(checkCheck, 500);
*/







        

        }