
import { LucideProps } from 'lucide-react';

export const Leaf = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A13.9 13.9 0 0 0 2.05 6.168C2 5.924 2 5.67 2 5.414c0-.161 2.689-.162 3 0 1.044.542 1.78 1.355 2.18 2.385C10.5 15.5 22 12 22 12c0 2.5-7.811 8-11 8Z" />
      <path d="M11 20c-.5-1.5-3-3-5-3" />
    </svg>
  );
};

export default Leaf;
