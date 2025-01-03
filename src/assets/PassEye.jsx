const PassEye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="var( --secondary-text)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.653 5.482A6.985 6.985 0 0 0 1.29 8a7.004 7.004 0 0 0 8.62 4.737M4.152 4.152A7.004 7.004 0 0 1 14.71 7.999a7.015 7.015 0 0 1-2.862 3.849M4.152 4.152 2 2m2.152 2.152 2.433 2.433m5.263 5.263L14 14m-2.152-2.152L9.415 9.415a2 2 0 0 0-2.829-2.829m2.828 2.828L6.587 6.587"
    />
  </svg>
);
export default PassEye;
