// This function will be called whenever the extension is activated
function replaceThumbnails() {
    // Select all elements with the class "ytd-thumbnail"
    const thumbnails = document.querySelectorAll(".ytd-thumbnail");
  
    // The array of images to use as replacements
    const imageArray = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsyQ9Bdekawqs-UdqfCmhkL62O7sTBNyNoA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zrpPsOIEC8pLKsBNwIgUSOt7N71v5UL5oQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RPywiRehpCNX8g4GnAIj0mqqeWb45ZrbxQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf591TMfCx9_b4y4jRPp7Zo3-xJ3htTJQ1Q&usqp=CAU",
        "https://variety.com/wp-content/uploads/2022/11/Wednesday_S1_E4_00_07_01_16RC.jpg?w=681&h=383&crop=1&resize=681%2C383",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQla_xEYB8TSG8nDtEhzYsrRStszhOCZUVnPA&usqp=CAU",
        "https://hips.hearstapps.com/hmg-prod/images/wednesday-s1-e4-00-34-26-18r-1670000381.jpg?crop=0.752xw:1.00xh;0.104xw,0&resize=1200:*",
    ];
  
    // Loop through each thumbnail element
    for (const thumbnail of thumbnails) {
      // Select the thumbnail image element
      const img = thumbnail.querySelector("img");
  
      // If the thumbnail has an image element
      if (img) {
        // Generate a random number between 0 and the length of the image array
        const randomIndex = Math.floor(Math.random() * imageArray.length);
  
        // Set the src attribute of the image to a random image from the array
        img.src = imageArray[randomIndex];
      }
    }
  }
  
  // Replace the thumbnails when the extension is first activated
  replaceThumbnails();
  
 
  