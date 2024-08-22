document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchQuery').value.trim();
    if (!query) return;

    document.getElementById('searchButton').disabled = true;
    
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';

    setTimeout(() => {
        fetchUserData(query)
            .then(user => {
                document.getElementById('results').style.display = 'block';
                document.getElementById('userName').textContent = user.name;
                document.getElementById('userEmail').textContent = user.email;
                document.getElementById('userProfilePicture').src = user.profilePicture;

            })
            .catch(error => {
                document.getElementById('errorMessage').textContent = error.message;
                document.getElementById('errorMessage').style.display = 'block';
            })
            .finally(() => {
                document.getElementById('loadingSpinner').style.display = 'none';
                document.getElementById('searchButton').disabled = false;
            });
    }, 1000); 
});


function fetchUserData(query) {
    return new Promise((resolve, reject) => {
      const mockData = [
        {
          name: "Raj",
          email: "raj@gmail.com",
          profilePicture: "raj.png",
        },
        {
          name: "Simran",
          email: "simran@gmail.com",
          profilePicture: "simran.png",
        },
        {
         name: "Mufaddal KC",
         email: "mufazzalkc@gmail.com",
         profilePicture: "raj.png",

        }
      ];
  
      const user = mockData.find((user) => user.name.toLowerCase() === query.toLowerCase());
  
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    });
  }

