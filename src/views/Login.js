import React from "react";

import Content from "../components/Content";

export default (props) => {
    return <Content onLogin={props.onLogin} page={props.page} />
}

