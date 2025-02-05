// src/components/GlobalTooltip.jsx
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const GlobalTooltip = ({
  content,
  placement = 'top',
  animation = 'shift-away',
  delay = [200, 0],
  arrow = true,
  ...props
}) => {
  return (
    <Tippy
      content={content}
      placement={placement}
      animation={animation}
      delay={delay}
      arrow={arrow}
      {...props}
    >
      {props.children}
    </Tippy>
  );
};

export default GlobalTooltip;
