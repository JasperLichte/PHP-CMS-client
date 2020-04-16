import React, {useEffect} from "react";
import { motion } from "framer-motion";
import './PageContent.scss';
import {Theme} from "../../../../util/themes/themes";
import {useDispatch} from "react-redux";
import ActionType from "../../../../actions/ActionType";
import {IRouterProps} from "../../../routes/Routes";
import Footer from "../footer/Footer";

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
    ease: 'anticipate',
};

interface IProps extends IRouterProps {
    theme: Theme,
}

const PageContent: React.FC<IProps> = ({children, theme, user}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ActionType.SET_THEME,
            theme: theme,
        });
    }, [theme, dispatch]);

    return <motion.div
        className="page-content"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
        <Footer theme={theme} user={user}/>
    </motion.div>
};

export default PageContent;
