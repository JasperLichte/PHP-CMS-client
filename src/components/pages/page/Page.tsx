import React from "react";
import './Page.scss';
import Nav from "./nav/Nav";
import { motion } from "framer-motion";
import {useSelector} from "react-redux";
import {themeSelector} from "../../../selectors/selectors";
import {IRouterProps} from "../../routes/Routes";

const pageVariants = {
    initial: {
        opacity: 0,
        x: '-100vw',
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: '100vw',
        scale: 1.2,
    },
};

const pageTransition = {
    duration: 1,
    type: 'tween',
    transition: 'anticipate',

};

const Page: React.FC<IRouterProps> = ({children, user}) => {
    const theme = useSelector(themeSelector);

    return <motion.div
        className="page"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        <Nav theme={theme} />
        <div className="content">
            <main>
                {children}
            </main>
        </div>
    </motion.div>
};

export default Page;
