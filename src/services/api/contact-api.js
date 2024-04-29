import { CONTACT_URL } from "../routes/contact-routes";

export async function postContactUs(name, email, phone, subject, message) {
    try {
        const response = await fetch(CONTACT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return({
                status: true,
                data: data
            })
        }else{
            return({
                status: false
            })
        }
       
    } catch (error) {
        return error;

    }
}