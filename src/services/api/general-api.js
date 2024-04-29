//for company status

import { COMPANY_STATUS_URL, GALLERY_URL, JOB_CAREER_URL, NOTICE_URL, RESEARCHANDDEVELOPMENT_URL } from "../routes/general-routes";

export async function getCompanyStatusData() {
     try {
          const response = await fetch(COMPANY_STATUS_URL, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;


     } catch (error) {
          return error;

     }
}


export async function getResearchAndDevelopmentData() {
     try {
          const response = await fetch(RESEARCHANDDEVELOPMENT_URL, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
     } catch (error) {
          return error;

     }
}


export async function getGalleryData() {
     try {
          const response = await fetch(GALLERY_URL, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
     } catch (error) {
          return error;

     }
}   

export async function getGalleryWithId(id){
     try {
          const response = await fetch(`${GALLERY_URL}${id}/`, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
     } catch (error) {
          return error;

     }

}

export async function getJobCareerData() {
     try {
          const response = await fetch(JOB_CAREER_URL, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
     } catch (error) {
          return error;

     }
}


export async function getJobDetailsData(id) {
     try {
          const response = await fetch(`${JOB_CAREER_URL}${id}/`, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
     } catch (error) {
          return error;

     }
}

export async function getNoticeData() {
     try {
          const response = await fetch(NOTICE_URL, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
     } catch (error) {
          return error;

     }
}