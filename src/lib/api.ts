
const BASE_URL = "https://fe-test.zojapay.com/api";

export const registerAdmin = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${BASE_URL}/admin/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

 
  return res.json(); // { token, opt, message }
};


export const verifyOtp = async (otp: string) => {
  const res = await fetch(`${BASE_URL}/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "OTP verification failed");
  }

  return data;
};

export const resendOtp = async (email: string) => {
  const res = await fetch(`${BASE_URL}/resend-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Resend OTP failed");
  }

  return data;
};




export const loginUser = async (form: { email: string; password: string }) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Login failed");
  }

  return data;
};

