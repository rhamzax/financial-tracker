import Head from "next/head";
import { Sidebar } from "./Sidebar";


const Layout = ({children, title}) => {

    return (
        <div className="bg-background h-screen">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="flex">
                <Sidebar/> 
                <main className="container text-l bg-background mx-auto">
                    {children}
                </main>

            </div>
            
            {/* <footer className="flex justify-center items-center mt-10">
                <a
                    className="flex flex-col"
                    href="https://domthedev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/domthedev.png" alt="Dom the dev Logo" width={72} height={72}/>
                </a>
            </footer> */}
        </div>
    );
};

export default Layout;