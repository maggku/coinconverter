# Errors

## HTML - Errors

![HTML validator errors image 1](../../images/html-errors-1.png)
![HTML validator errors image 2](../../images/html-errors-2.png)
![HTML validator errors image 3](../../images/html-errors-3.png)

## HTML After - No Errors

![HTML validator errors image 3](../../images/noerrors-html.png)

## CSS - Errors

![HTML validator errors image 3](../../images/css-errors-1.png)

## CSS After - No Errors

![HTML validator errors image 3](../../images/noerrors-css.png)


## Java Script - Errors

![HTML validator errors image 3](../../images/jshint.png)

## Other - Nav bar - font not vertically centered.

![HTML validator errors image 3](../../images/bug-navbar-1.png)


## Other - Nav bar - fixed

### Adding an extra margin top of 26px.



![HTML validator errors image 3](../../images/bug-navbar-2.png)

![HTML validator errors image 3](../../images/bug-navbar-3.png)





## Other - dark mode working on the mobile version of the design but not desktop 

![HTML validator errors image 3](../../images/bugs1.png)

![HTML validator errors image 3](../../images/bugs2.png)

![HTML validator errors image 3](../../images/bugs3.png)

![HTML validator errors image 3](../../images/bugs4.png)

## Other - dark mode working on the mobile version of the design but not desktop - fixed

### Sollution in script.js:

1. Selecting all toggle switches with the class "form-check-input":
   ```javascript
   const toggleSwitches = document.querySelectorAll(".form-check-input");


2. Adding the event listener to each one
    ```javascript
    toggleSwitches.forEach(toggle => {
    toggle.addEventListener("change", toggleDarkMode);

3. When one is clicked, it will toggle the dark mode and synchronize the state of all toggles
    ```javascript
        function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        
        // Making sure that both Mobile and Desktop toggles are in sync.
        toggleSwitches.forEach(toggle => {
            toggle.checked = document.body.classList.contains("dark-mode");
        });
    }


![HTML validator errors image 3](../../images/bugs5.png)

![HTML validator errors image 3](../../images/bugs6.png)





