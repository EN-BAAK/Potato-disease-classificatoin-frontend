const DOMAIN = import.meta.env.VITE_DOMAIN;

const API_BASE_URL = `${DOMAIN}`;

export const predictPotatoState = async (form: FormData) => {
  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: "POST",
    credentials: "include",
    body: form,
  });

  const responseBody = await response.json();

  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};