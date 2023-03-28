import NextNprogress from 'nextjs-progressbar'
import styled from 'styled-components';

export const ProgressBar = styled(NextNprogress)`
  .bar {
    background-color: #29d;
    height: 3px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transition: width 0.1s ease-in-out;
  }

  .peg {
    display: none;
  }
`;
