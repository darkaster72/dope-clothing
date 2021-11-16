import React, { useContext } from "react";
import SectionsContext from "../../context/sections/section.context";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

const Directory = () => {
    const sections = useContext(SectionsContext);
    return <div className="directory-menu">
        {sections.map(
            ({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps}>
            </MenuItem>)}
    </div>;
};

export default Directory;