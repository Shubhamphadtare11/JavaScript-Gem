//Q1 Create a button in UI and add debounce as follows=>
        // -->Show "Button Pressed <X> Times" every time button is pressed
        // Increase "Triggered <Y> Times" count after 800ms of debounce

        const btn =document.querySelector(".increment_btn");
        const btnPress =document.querySelector(".increment_pressed");
        const count =document.querySelector(".increment_count");

        var pressedCount = 0;
        var triggerCount = 0;

        const debouncedCount = _.debounce(()=>{
            count.innerHTML = ++triggerCount;
        },800)

    

        btn.addEventListener("click",()=>{
                btnPress.innerHTML = ++pressedCount;
                debouncedCount();
        });

        

        //We can use debounce functionality from lodash library
        
        //1. search lodash cdn
        //2. take link and copy script tag in html
        //3. google lodash
        //4. click on first link
        //5. in documentation, search debounce
        //6. copy function in script
