import "../index.css";
import AccordionItem from "./AccordionItem";

const BoatsAccordion = ({ boats}) => {
  return (
    <div className="flex flex-col gap-3 w-5/6 md:w-3/5 boats-accordion my-16">
      {Object.values(boats).map((boat) => (
        <AccordionItem
          data={boat}
          key={boat.id}
        />
      ))}
    </div>
  );
};

export default BoatsAccordion;
