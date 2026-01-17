import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 w-full ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
