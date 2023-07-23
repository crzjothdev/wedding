import { doc, getDoc } from 'firebase/firestore'
import db from './config'

export async function getUser(username: string) {
    const docRef = doc(db, 'users', username)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        throw new Error('Usuario no encontrado')
    }
}