export const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -500 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
};

export const zoomIn = {
  initial: { scale: 0.4, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 1.5 },
};

export const cardFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
};

export const cardFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
};
