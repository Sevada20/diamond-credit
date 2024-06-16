const LetterIcon = ({ color = "none", width = 34, height = 34 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4694 19.4615L1 13.3077L32.8367 1L20.5918 33L14.4694 19.4615Z"
        fill="#5F6181"
      />
      <path
        d="M14.4694 19.4615L1 13.3077L32.8367 1L20.5918 33L14.4694 19.4615ZM14.4694 19.4615L21.8163 12.0769"
        stroke="#373962"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LetterIcon;
