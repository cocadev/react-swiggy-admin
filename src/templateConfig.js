// APEX React Template Config File
//-------------------------------

// You can customise the theme with the help of this file

// Change menu background from here, you can place new image also and use it.
import sidebarBGImage from "./assets/img/sidebar-bg/01.jpg";

//Template config options
const templateConfig = {
   sidebar: {      
      size: 'sidebar-md', // Options: 'sidebar-lg', 'sidebar-md', 'sidebar-sm'
      backgroundColor: "orderangel", // Options: 'orderangel', black', 'pomegranate', 'king-yna', 'ibiza-sunset', 'flickr', 'purple-bliss', 'man-of-steel', 'purple-love'
      backgroundImage: false, // Options: true, false | Set true to show background image
      backgroundImageURL: sidebarBGImage // Change image from sidebarBGImage import
   }
};

export default templateConfig;
