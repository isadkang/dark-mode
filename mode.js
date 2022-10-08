let body = document.body;
      let info = document.getElementById("info")
      let mode = document.getElementById("mode")
      let home = document.getElementById("home")
      
      const darklimit = 5;
      let darkCounter = 0;
      let darkRemainingLeft;

      function darkMode() {
          if(darkRemainingLeft == 0){
            info.textContent = "JATAH FITUR DARK MODE SUDAH HABIS"
            mode.style.display = "none";
            home.textContent = "RESTART" 
            return;
          }
          else if (darkCounter == 1){
            mode.textContent = "LIGHT"
          }
          else if (darkCounter == 2){
            mode.textContent = "DARK"
          }
          else if (darkCounter == 3){
            mode.textContent = "LIGHT"
          }
          else if (darkCounter == 4){
            mode.textContent = "DARK"
          }
          
        darkCounter += 1;
        darkRemainingLeft = darklimit - darkCounter;

        console.log ("function di klik sebanyak :", darkCounter);
        console.log ("jatah dark mode anda tinggal :", darkRemainingLeft)

        // render ke info element
    info.textContent = `Darkmode dipakai ${darkCounter}x, Jatah ${darkRemainingLeft}`

        body.classList.toggle("dark");
      }

      function reRender() {
        location.reload();
      }