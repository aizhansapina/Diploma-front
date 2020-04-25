import React from "react";

export const Logout = (props) => {
    sessionStorage.clear("token")
};