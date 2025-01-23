window.onload = function(){
        // Loading JSON file
        function loadJSON() {
            let wtf = new XMLHttpRequest();
            wtf.open('GET', 'login.json', true);
            
            wtf.onreadystatechange = function() {
                if (wtf.readyState === 4 && wtf.status === 200) {
                    // Parse JSON response
                    let data = JSON.parse(wtf.responseText);
                    
                    // Display data
                    let output = '<h2>Useri si parole:</h2>';
                    data.users.forEach(user => {
                        output += `<p>username: ${user.username}, password: ${user.password}`;
                    });
                    
                    document.getElementById('result').innerHTML = output;
                }
            };
            
            wtf.send();
        }

        loadJSON()



}