import { ABOUT_URL, BODS_URL, CHAIRMAN_VOICE_URL, MDS_VOICE_URL, VALUES_URL } from "../routes/about-routes";

export async function getAboutData() {

    try {
        const response = await fetch(ABOUT_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;

    }

}

export async function getValuesData() {

    try {
        const response = await fetch(VALUES_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;

    }
}


export async function getChairmanVoiceData() {

    try {
        const response = await fetch(CHAIRMAN_VOICE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;

    }
}

export async function getMDSVoiceData() {

    try {
        const response = await fetch(MDS_VOICE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;

    }
}

export async function getBODSData() {
    
        try {
            const response = await fetch(BODS_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
    
        }
}



