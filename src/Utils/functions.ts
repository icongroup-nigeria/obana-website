export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export function toInitials(words: string) {
  const wordsArr = words.split(' ');
  const initials = wordsArr.map((word) => word.charAt(0).toUpperCase());
  return initials;
}
