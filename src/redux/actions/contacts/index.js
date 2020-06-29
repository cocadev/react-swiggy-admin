import axios from 'axios';

export function addContact(id, firstname, lastname, password, position, phone, email, address, notes, img, country, city){

   return function(dispatch){
      axios.get("http://167.114.232.135:3000/")
           .then((response) => {
               dispatch({
                  type: "ADD_CONTACT",
                  id: id++,
                  firstname: firstname ? firstname : "",
                  lastname: lastname ? lastname : "",
                  image: img ? img : "",
                  position: position ? position : "",
                  password: password ? password : "",
                  phone: phone ? phone : "",
                  email: email ? email : "",
                  address: address ? address : "",
                  notes: notes ? notes : "",
                  country: country ? country : "",
                  city: city ? city : ""
               })
           })
           .catch((err) => {
              console.log(err)
           })
   }
}

export const updateContact = (id, field, value) => ({
   type: "UPDATE_CONTACT",
   id: id,
   field: field,
   value: value
});

export const contactDetails = id => ({
   type: "CONTACT_DETAILS",
   id
});

export const setEditContactFlag = flag => ({
   type: "EDIT_CONTACT",
   flag
});

export const setVisibilityFilter = filter => ({
   type: "SET_VISIBILITY_FILTER",
   filter
});

export const contactsSearch = searchTerm => ({
   type: "FILTER_CONTACT",
   payload: searchTerm
});

export const toggleStarredContact = id => ({
   type: "TOGGLE_STARRED_CONTACT",
   id
});

export const deleteContact = id => ({
   type: "DELETE_CONTACT",
   id
});

export const contactVisiblityFilter = {
   SHOW_ALL: "SHOW_ALL",
   FREQUENT_CONTACT: "FREQUENT_CONTACT",
   STARRED_CONTACT: "STARRED_CONTACT",
   ENGINEERING_DEPARTMENT_CONTACT: "ENGINEERING_DEPARTMENT_CONTACT",
   SALES_DEPARTMENT_CONTACT: "Sales",
   SUPPORT_DEPARTMENT_CONTACT: "SUPPORT_DEPARTMENT_CONTACT",
   SEARCH_CONTACT: "SEARCH_CONTACT",
   DELETED_CONTACT: "DELETED_CONTACT"
};
