// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { X } from "react-feather";
// import internal(own) modules
import { FoldedContentConsumer } from "../../../../utility/context/toggleContentContext";
import Logo from "../../../../assets/img/logos/logo-oa.png";
// Styling
import "../../../../assets/scss/components/sidebar/sidebarHeader/sidebarHeader.scss";

class SidebarHeader extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu('close');
   };

   render() {
      return (
         <FoldedContentConsumer>
            {context => (
               <div className="sidebar-header">
                  <div className="logo clearfix ">
                     <NavLink to="/" className="logo-text float-left">
                        <div className="logo-img w-100 ">
                           <img src={Logo} className='w-100' alt="logo" width="190" />
                        </div>
                        
                     </NavLink>

                     <span href="" className="nav-close d-block d-md-block d-lg-none d-xl-none" id="sidebarClose">
                        <X
                           onClick={this.handleClick} size={20}
                        />
                     </span>
                  </div>
               </div>
            )}
         </FoldedContentConsumer>
      );
   }
}

export default SidebarHeader;
