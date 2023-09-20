import { container } from "webpack"; 

const { ModuleFederationPlugin } = container;

const moduleFederationConfig =  new ModuleFederationPlugin(({
            name: 'sidebarComponent',
            filename: 'remote.js',
            exposes: {
                './sidebar': './src/Sidebar/index.tsx'
            }
        }))
    


// const moduleFederationConfig = new container.ModuleFederationPlugin({

// })

export default moduleFederationConfig