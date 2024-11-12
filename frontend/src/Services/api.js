const BASE_URL = import.meta.env.VITE_API_URL;

export const propertyApi = {
  POST_PROPERTYDATA: BASE_URL + "/property/postproperty",
  GET_PROPERTYDATA: BASE_URL + "/property/allproperty",
  GET_PROPERTYDATA_BY_ID: BASE_URL + "/property/properties/:id"
};


export const contactApi = {
  CREATE_CONTACT: BASE_URL + "/contact/contacts"
}