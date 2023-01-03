import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styled } from "../stitches.config";

export function Carousel({ children }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const items = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 200,
      transition: {
        when: "afterChildren",
      },
    },
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <CarouselWrapper ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <InnerCarousel
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial="hidden"
        whileInView="visible"
        variants={items}
      >
        {children}
      </InnerCarousel>
    </CarouselWrapper>
  );
}

export function CarouselItem({ children }) {
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  return <Item variants={item}>{children}</Item>;
}

const CarouselWrapper = styled(motion.div, {
  cursor: "grab",
  overflow: "hidden",
});

const InnerCarousel = styled(motion.div, {
  display: "flex",
  gap: "1.75rem",

  "@md": {
    gap: "2.5rem",
    paddingX: "2.5rem",
  },
});

const Item = styled(motion.div, {
  minWidth: "min(27.5rem, 100%)",
  alignItems: "stretch",
});
