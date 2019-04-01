import React from 'react';
import Heading from "../Heading";
import NotFoundWrapper from "./NotFoundWrapper";

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <Heading>{'404 - Not found'}</Heading>
        </NotFoundWrapper>
    );
};

export default NotFound;
