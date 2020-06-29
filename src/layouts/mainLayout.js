// import external modules
import React, { PureComponent } from "react";
import classnames from "classnames";

// import internal(own) modules
import { FoldedContentConsumer, FoldedContentProvider } from "../utility/context/toggleContentContext";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// Styling
import "../assets/scss/layouts/mainLayout.scss";

import templateConfig from "../templateConfig";

class MainLayout extends PureComponent {
   state = {
      width: window.innerWidth,
      sidebarState: "close"
   };

   updateWidth = () => {
      this.setState(prevState => ({
         width: window.innerWidth
      }));
   };

   componentDidMount() {
      if (window !== "undefined") {
         window.addEventListener("resize", this.updateWidth, false);
      }
   }

   componentWillUnmount() {
      if (window !== "undefined") {
         window.removeEventListener("resize", this.updateWidth, false);
      }
   }

   toggleSidebarMenu(sidebarState) {
      this.setState({ sidebarState });
   }

   render() {
      return (
            <FoldedContentProvider>
               <FoldedContentConsumer>
               {context => (
                     <div
                        className={classnames("wrapper "+ templateConfig.sidebar.size, {
                           "menu-collapsed": context.foldedContent || this.state.width < 991,
                           "main-layout": !context.foldedContent
                        })}
                     >
                        <Sidebar
                           toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
                           sidebarState={this.state.sidebarState}
                        />
                        <Navbar
                           toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
                           sidebarState={this.state.sidebarState}
                        />
                        <main>{this.props.children}</main>
                        <Footer />
                     </div>
                  )}
               </FoldedContentConsumer>
            </FoldedContentProvider>
      );
   }
}

export default MainLayout;
