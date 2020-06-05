import mongoose from 'mongoose';

export function connectWithDatabase() {
  const username = 'admin';
  const password = '1';

  mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0-w410h.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
      if (error) {
        console.error('Connection error! -> ', error.message);
      } else {
        console.log('Connected with database');
      }
    }
  );
}
