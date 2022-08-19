
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: 'ken adams',
      isGold: true,
      email: 'email'
    });
  }, 1000);
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 1000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}