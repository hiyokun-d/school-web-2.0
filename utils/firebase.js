import { initializeApp } from "firebase/app"
import { getDownloadURL, listAll, ref, getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.firebaseAPIKEY,
    authDomain: process.env.firebaseAuthDomain,
    projectId: process.env.firebaseProjectID,
    storageBucket: "school-data-e6a70.appspot.com",
    messagingSenderId: process.env.firebaseMessagingSenderID,
    appId: process.env.firebaseAppID,
    measurementId: process.env.firebaseMeasurementID
}

const firebaseApp = initializeApp(firebaseConfig, "schoolapp")
const STORAGE = getStorage(firebaseApp)

let imageRef = ref(STORAGE, "photos")

/**
 * @hiyokun-d
 * ---
 * it will be takes images from the storage (firebase) and then download it into 
 * your system then we use that image
 * ---
 */
let Images = []
listAll(imageRef)
    .then((result) => {
        const downloadPromises = result.items.map((item) => {
            const fileRef = ref(STORAGE, item.fullPath);
            return getDownloadURL(fileRef)
                .then((url) => {
                    Images.push(url);
                })
                .catch((error) => {
                    throw new Error(`Error downloading file ${item.name}: ${error}`);
                });
        });

        // Wait for all download promises to resolve
        return Promise.all(downloadPromises);
    })
    .then(() => {
        // Check if Images array is empty
        if (Images.length === 0) {
            console.log("No images were loaded!");
        } else {
            console.log("Images loaded!");
        }
    })
    .catch((error) => {
        return new Error("Error:", error);
    });

export {Images};