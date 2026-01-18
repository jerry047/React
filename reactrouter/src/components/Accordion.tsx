import { useState } from 'react';

const Accordion = ({ items }: AccordionProps) => {
  // State to keep track of which item is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    // Toggle between opening and closing the clicked item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item: AccordionItem, index: number) => (
        <div key={index} className="accordion-item">
          {/* Title */}
          <div 
            className="accordion-title" 
            onClick={() => handleToggle(index)}
          >
            {item.title}
            {/* Icon to show expand/collapse state */}
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>

          {/* Content */}
          {openIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// defining type 
type AccordionItem = {
  title: string,
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
}

export default Accordion