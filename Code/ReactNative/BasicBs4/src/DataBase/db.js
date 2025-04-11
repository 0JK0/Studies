import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

let db;

export const initDB = async () => {
  try {
    db = await SQLite.openDatabase({ name: 'mydb.db', location: 'default' });
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
      );
    `);
    console.log('Database initialized');
    return db;
  } catch (error) {
    console.error('Failed to initialize DB:', error);
    throw error;
  }
};

export const getDB = () => db;
