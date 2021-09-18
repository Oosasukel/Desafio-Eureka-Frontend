export const formatCEP = (CEP: string) => {
  if (CEP.length !== 8) return CEP;

  const cepFormatted = `${CEP.substring(0, 5)}-${CEP.substring(5, CEP.length)}`;

  return cepFormatted;
};
