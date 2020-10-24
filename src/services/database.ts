import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('joaosnotes.db')

db.transaction(tx => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, checked BOOLEAN)')
})

export default db;