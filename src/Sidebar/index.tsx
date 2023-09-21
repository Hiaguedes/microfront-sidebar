import React, { FC } from "react";

export type SidebarItems = {
    itens:  [React.ReactNode]
}

const Sidebar: FC<SidebarItems> = ({ itens }) => {
    return (
        <aside style={{
            width: '170px',
            height: '100vh',
            overflowY: 'auto',
            backgroundColor: '#e6e6e6',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {
             itens.map(Element => Element)
            }
        </aside>
    )
};

export default Sidebar;