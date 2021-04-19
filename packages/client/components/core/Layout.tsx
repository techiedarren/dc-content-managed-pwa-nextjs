import Head from "next/head";
import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import PromoBanner from "../PromoBanner";
import SearchBox from "../SearchBox";
import Sidebar from "../ui/Sidebar/Sidebar";
import UserActions from "../UserActions";

interface Props {
    pageProps: {
        content: any;
    };
}

const Layout: FC<Props> = ({ children, pageProps }) => {

    const navigationLinks: any[] = pageProps.content?.navigationLinks || [];

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return <>
        <Head>
            <title>ANYA FINN</title>
        </Head>

        <div>
            <PromoBanner>ORDER BEFORE 1PM FOR NEXT DAY DELIVERY</PromoBanner>

            <Header actions={<UserActions />}
                search={<SearchBox />}
                navigation={(
                    <Navigation links={navigationLinks}>
                    </Navigation>
                )}
                onToggleSidebar={handleToggleSidebar}>
            </Header>

            {children}

            <Footer />
        </div>

        <Sidebar links={navigationLinks} open={sidebarOpen} onToggleOpen={handleToggleSidebar} />
    </>;
}