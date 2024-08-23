// document.getElementById('searchButton').addEventListener('click', function() {
//     const query = document.getElementById('searchQuery').value.trim();
//     if (!query) return;

//     document.getElementById('searchButton').disabled = true;
    
//     document.getElementById('loadingSpinner').style.display = 'block';
//     document.getElementById('results').style.display = 'none';
//     document.getElementById('errorMessage').style.display = 'none';

//     setTimeout(() => {
//         fetchUserData(query)
//             .then(user => {
//                 document.getElementById('results').style.display = 'block';
//                 document.getElementById('userName').textContent = user.name;
//                 document.getElementById('userEmail').textContent = user.email;
//                 document.getElementById('userProfilePicture').src = user.profilePicture;

//             })
//             .catch(error => {
//                 document.getElementById('errorMessage').textContent = error.message;
//                 document.getElementById('errorMessage').style.display = 'block';
//             })
//             .finally(() => {
//                 document.getElementById('loadingSpinner').style.display = 'none';
//                 document.getElementById('searchButton').disabled = false;
//             });
//     }, 1000); 
// });


// function fetchUserData(query) {
//     return new Promise((resolve, reject) => {
//       const mockData = [
//         {
//           name: "Raj",
//           email: "raj@gmail.com",
//           profilePicture: "raj.png",
//         },
//         {
//           name: "Simran",
//           email: "simran@gmail.com",
//           profilePicture: "simran.png",
//         },
//         {
//          name: "Mufaddal KC",
//          email: "mufazzalkc@gmail.com",
//          profilePicture: "raj.png",

//         }
//       ];
  
//       const user = mockData.find((user) => user.name.toLowerCase() === query.toLowerCase());
  
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error("User not found"));
//       }
//     });
//   }



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
              document.getElementById('userName').textContent = `Name: ${user.name || user.login}`;
              document.getElementById('userEmail').textContent = `Email: ${user.email || 'Not available'}`;
              document.getElementById('userProfilePicture').src = user.avatar_url;

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
  return fetch(`https://api.github.com/users/${query}`)
      .then(response => {
          if (!response.ok) {
              throw new Error("User not found");
          }
          return response.json();
      })
      .then(userData => {
          return userData;
      });
}
