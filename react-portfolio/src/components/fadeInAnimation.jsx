export const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (index) => ({
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.25 * index,
      type: "spring",
      bounce: 0.4,
    },
  }),
};
