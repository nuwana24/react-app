import React, { useEffect } from "react";
import Tick from "../../../images/tick-icon.png"

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { destroy, content, title, duration = 0, id } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div className="toaster-full">
      <div className={"toast-header"}>
        <div className="iconHeader">
          <img
            id="react-icon"
            src={Tick}
            style={{ height: "25px", width: "25px" }}
            alt=""
          />
          {title} {id}
        </div>
        <div className={"toast-body"}>{content}</div>
      </div>
      <button className="toast-button" onClick={destroy}>
        X
      </button>
    </div>
  );
};

export default Toast;
