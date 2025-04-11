import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  useEffect(() => {
    const db = SQLite.openDatabase('test.db');
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT);',
        [],
        () => console.log('✅ Table created'),
        (_, err) => {
          console.error('❌ Error:', err);
          return true;
        }
      );
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SQLite Test</Text>
    </View>
  );
}
