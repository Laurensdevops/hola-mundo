import React from "react";
import toast from "react-hot-toast";

const ToastrNotification = () => {
    const notifySuccess = (message, position = "top-right") => toast.success(message, {
        position: position, 
        duration: 4000
    });
    const notifyError = (message, position = "top-right") => toast.error(message, {
        position: position,
        duration: 4000
    });
    const notifyInfo = (message, position = "top-right") => toast(message, {
        icon: "ℹ️", 
        position: position,
         duration: 4000
    });

    return {
        notifySuccess,
        notifyError,
        notifyInfo,
    };
};

export default ToastrNotification;
