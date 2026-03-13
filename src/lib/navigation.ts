export const openExternal = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const goToPath = (path: string) => {
  window.location.href = path;
};

export const goToMail = (email: string, subject?: string) => {
  const encodedSubject = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  window.location.href = `mailto:${email}${encodedSubject}`;
};
