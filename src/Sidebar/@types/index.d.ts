import { SidebarItems } from "@src/Sidebar";

export type { SidebarItems }
import { FC } from 'react'
declare module 'mainApp/sidebar' {
      const RemoteApp: FC<SidebarItems>;
    
      export default RemoteApp;
    }