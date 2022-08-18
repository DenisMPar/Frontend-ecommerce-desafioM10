interface Options extends RequestInit {
  headers?: (Headers & { Authorization: string }) | {};
  body?: string;
}

export async function fetchApi(input: RequestInfo, options?: Options) {
  const token = getSettedToken();
  const formattedOptions = options || {};
  if (token) {
    formattedOptions.headers = {
      ...options?.headers,
      Authorization: "bearer " + token,
    };
  }

  const url = "https://backend-ecommerce-desafiom9.vercel.app/api" + input;

  const res = await fetch(url, formattedOptions);

  if (res.status >= 200 && res.status < 300) {
    return await res.json();
  } else {
    const json = await res.json();
    throw { message: "Algo salio mal", error: json };
  }
}

type AuthProps = {
  email: string;
};

export async function getAuth(body: AuthProps) {
  try {
    const res = await fetchApi("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res;
  } catch (error: any) {
    return error;
  }
}

type TokenProps = {
  email: string;
  code: number;
};
export async function getToken(body: TokenProps) {
  try {
    const res = await fetchApi("/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    setToken(res.token);
    return { token: true };
  } catch (error) {
    return error;
  }
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
}
export async function getSettedToken() {
  return await localStorage.getItem("token");
}
export function removeToken() {
  localStorage.removeItem("token");
}
